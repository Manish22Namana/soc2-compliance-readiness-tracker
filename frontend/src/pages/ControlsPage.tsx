import { useParams, Navigate } from 'react-router-dom';
import { useCategory } from '../hooks/useControls';
import { useAllStatuses } from '../hooks/useControlStatus';
import CriterionCard from '../components/controls/CriterionCard';
import type { StatusEnum } from '../types/soc2';

export default function ControlsPage() {
  const { categoryCode = 'CC1' } = useParams();
  const { data: category, isLoading } = useCategory(categoryCode);
  const { data: statuses = [] } = useAllStatuses();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-8 w-8 border-2 border-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!category) return <Navigate to="/controls/CC1" replace />;

  const statusMap = new Map(statuses.map((s) => [s.criterion_id, s]));

  const complete = category.criteria.filter((c) => statusMap.get(c.id)?.status === 'complete').length;
  const total = category.criteria.length;
  const pct = Math.round((complete / total) * 100);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-1">
          <span className="font-mono text-sm font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-lg">
            {category.code}
          </span>
          <h1 className="text-xl font-bold text-gray-900">{category.name}</h1>
        </div>
        <p className="text-sm text-gray-500 mt-1">{category.description}</p>
        <div className="flex items-center gap-4 mt-3">
          <div className="flex-1 bg-gray-100 rounded-full h-2 max-w-xs">
            <div
              className={`h-2 rounded-full transition-all ${pct === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-sm text-gray-600 font-medium">{complete}/{total} complete</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {category.criteria.map((criterion) => (
          <CriterionCard
            key={criterion.id}
            criterion={criterion}
            status={statusMap.get(criterion.id) || null}
          />
        ))}
      </div>
    </div>
  );
}
