import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Shield, MessageCircle } from 'lucide-react';
import { useCatalog } from '../../hooks/useControls';
import { useAllStatuses } from '../../hooks/useControlStatus';
import { cn } from '../../lib/utils';

const CATEGORIES = [
  'CC1','CC2','CC3','CC4','CC5','CC6','CC7','CC8','CC9',
  'A1','PI1','C1','P1','P2','P3','P4','P5','P6','P7','P8',
];

export default function Sidebar() {
  const { data: catalog } = useCatalog();
  const { data: statuses } = useAllStatuses();

  const getCategoryProgress = (code: string) => {
    if (!catalog || !statuses) return null;
    const cat = catalog.categories.find((c) => c.code === code);
    if (!cat) return null;
    const criteriaIds = cat.criteria.map((c) => c.id);
    const complete = statuses.filter(
      (s) => criteriaIds.includes(s.criterion_id) && s.status === 'complete'
    ).length;
    return { complete, total: criteriaIds.length };
  };

  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0 shrink-0">
      <div className="px-4 py-5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-blue-600" />
          <span className="font-semibold text-gray-900 text-sm">SOC2 Compass</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-3">
        <div className="px-3 mb-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              cn('flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors',
                isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-100')
            }
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </NavLink>
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              cn('flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors',
                isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-100')
            }
          >
            <MessageCircle className="h-4 w-4" />
            AI Consultant
          </NavLink>
        </div>

        <div className="px-4 py-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Controls</p>
        </div>

        {CATEGORIES.map((code) => {
          const progress = getCategoryProgress(code);
          const catName = catalog?.categories.find((c) => c.code === code)?.name;
          return (
            <div key={code} className="px-3">
              <NavLink
                to={`/controls/${code}`}
                className={({ isActive }) =>
                  cn('flex items-center justify-between px-3 py-1.5 rounded-lg text-sm transition-colors group',
                    isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-100')
                }
              >
                <span className="flex items-center gap-2 truncate">
                  <span className="font-mono text-xs font-semibold w-9 shrink-0">{code}</span>
                  <span className="truncate text-xs text-gray-500 group-hover:text-gray-700"
                    title={catName}>
                    {catName ? catName.split(':')[0] : ''}
                  </span>
                </span>
                {progress && (
                  <span className={cn('text-xs font-medium ml-1 shrink-0',
                    progress.complete === progress.total ? 'text-green-600' : 'text-gray-400')}>
                    {progress.complete}/{progress.total}
                  </span>
                )}
              </NavLink>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
