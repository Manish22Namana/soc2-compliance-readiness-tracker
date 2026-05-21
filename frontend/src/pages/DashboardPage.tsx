import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Clock, Circle, MinusCircle, TrendingUp } from 'lucide-react';
import { useCatalog } from '../hooks/useControls';
import { useAllStatuses } from '../hooks/useControlStatus';
import { useAuthStore } from '../store/authStore';
import type { StatusEnum } from '../types/soc2';

const STATUS_ICON: Record<StatusEnum, React.ReactNode> = {
  complete: <CheckCircle2 className="h-4 w-4 text-green-500" />,
  in_progress: <Clock className="h-4 w-4 text-amber-500" />,
  not_started: <Circle className="h-4 w-4 text-gray-300" />,
  na: <MinusCircle className="h-4 w-4 text-slate-400" />,
};

export default function DashboardPage() {
  const { user } = useAuthStore();
  const { data: catalog } = useCatalog();
  const { data: statuses = [] } = useAllStatuses();
  const navigate = useNavigate();

  if (!catalog) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-8 w-8 border-2 border-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  const allCriteria = catalog.categories.flatMap((c) => c.criteria);
  const totalCriteria = allCriteria.length;
  const totalPOF = allCriteria.reduce((acc, c) => acc + c.pointsOfFocus.length, 0);

  const statusMap = new Map(statuses.map((s) => [s.criterion_id, s.status as StatusEnum]));
  const complete = [...statusMap.values()].filter((s) => s === 'complete').length;
  const inProgress = [...statusMap.values()].filter((s) => s === 'in_progress').length;
  const notStarted = totalCriteria - complete - inProgress - [...statusMap.values()].filter((s) => s === 'na').length;
  const na = [...statusMap.values()].filter((s) => s === 'na').length;
  const pct = Math.round((complete / totalCriteria) * 100);

  const categoryProgress = catalog.categories.map((cat) => {
    const ids = cat.criteria.map((c) => c.id);
    const done = ids.filter((id) => statusMap.get(id) === 'complete').length;
    const inProg = ids.filter((id) => statusMap.get(id) === 'in_progress').length;
    return { ...cat, done, inProg, total: ids.length };
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name?.split(' ')[0]} 👋
        </h1>
        <p className="text-gray-500 text-sm mt-1">Here's your SOC2 readiness overview</p>
      </div>

      {/* Score card */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-200 text-sm font-medium">Overall Readiness</p>
            <div className="flex items-end gap-2 mt-1">
              <span className="text-5xl font-bold">{pct}%</span>
              <span className="text-blue-200 text-sm mb-2">{complete} of {totalCriteria} criteria complete</span>
            </div>
          </div>
          <TrendingUp className="h-16 w-16 text-blue-300 opacity-50" />
        </div>
        <div className="mt-4 bg-blue-500/40 rounded-full h-3">
          <div
            className="bg-white rounded-full h-3 transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-blue-200 text-xs mt-2">{totalPOF} total points of focus across {totalCriteria} criteria</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Complete', value: complete, icon: <CheckCircle2 className="h-5 w-5 text-green-500" />, bg: 'bg-green-50' },
          { label: 'In Progress', value: inProgress, icon: <Clock className="h-5 w-5 text-amber-500" />, bg: 'bg-amber-50' },
          { label: 'Not Started', value: notStarted < 0 ? 0 : notStarted, icon: <Circle className="h-5 w-5 text-gray-400" />, bg: 'bg-gray-50' },
          { label: 'N/A', value: na, icon: <MinusCircle className="h-5 w-5 text-slate-400" />, bg: 'bg-slate-50' },
        ].map((s) => (
          <div key={s.label} className={`${s.bg} border border-gray-100 rounded-xl p-4 flex items-center gap-3`}>
            {s.icon}
            <div>
              <p className="text-2xl font-bold text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Category grid */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Category Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {categoryProgress.map((cat) => {
          const pctCat = Math.round((cat.done / cat.total) * 100);
          return (
            <button
              key={cat.code}
              onClick={() => navigate(`/controls/${cat.code}`)}
              className="bg-white border border-gray-200 rounded-xl p-4 text-left hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{cat.code}</span>
                  <span className="text-sm font-medium text-gray-800 truncate max-w-[200px]" title={cat.name}>{cat.name}</span>
                </div>
                <span className="text-xs font-semibold text-gray-600">{cat.done}/{cat.total}</span>
              </div>
              <div className="bg-gray-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${pctCat === 100 ? 'bg-green-500' : pctCat > 0 ? 'bg-blue-500' : 'bg-gray-200'}`}
                  style={{ width: `${pctCat}%` }}
                />
              </div>
              {cat.inProg > 0 && (
                <p className="text-xs text-amber-600 mt-1">{cat.inProg} in progress</p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
