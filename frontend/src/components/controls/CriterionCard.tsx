import { useNavigate } from 'react-router-dom';
import { FileText, ChevronRight } from 'lucide-react';
import type { Criterion, ControlStatus } from '../../types/soc2';
import { STATUS_LABELS, STATUS_COLORS, STATUS_DOT } from '../../lib/utils';

interface Props {
  criterion: Criterion;
  status: ControlStatus | null;
  evidenceCount?: number;
}

export default function CriterionCard({ criterion, status, evidenceCount = 0 }: Props) {
  const navigate = useNavigate();
  const s = status?.status || 'not_started';

  return (
    <button
      onClick={() => navigate(`/controls/${criterion.categoryCode}/${criterion.id}`)}
      className="text-left w-full bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center font-mono text-xs font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
              {criterion.id}
            </span>
            <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${STATUS_COLORS[s]}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[s]}`} />
              {STATUS_LABELS[s]}
            </span>
          </div>
          <p className="text-sm font-medium text-gray-800 group-hover:text-blue-700 line-clamp-2 transition-colors">
            {criterion.title}
          </p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            <span>{criterion.pointsOfFocus.length} controls</span>
            {evidenceCount > 0 && (
              <span className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                {evidenceCount} files
              </span>
            )}
          </div>
        </div>
        <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-blue-500 shrink-0 mt-1 transition-colors" />
      </div>
    </button>
  );
}
