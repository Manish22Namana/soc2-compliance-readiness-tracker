import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, MessageCircle, CheckSquare, Save } from 'lucide-react';
import { useCategory } from '../hooks/useControls';
import { useCriterionStatus, useUpdateStatus } from '../hooks/useControlStatus';
import { useEvidence } from '../hooks/useEvidence';
import StatusSelector from '../components/controls/StatusSelector';
import EvidenceUpload from '../components/controls/EvidenceUpload';
import EvidenceList from '../components/controls/EvidenceList';
import type { StatusEnum } from '../types/soc2';

export default function CriterionDetailPage() {
  const { categoryCode = '', criterionId = '' } = useParams();
  const navigate = useNavigate();
  const { data: category } = useCategory(categoryCode);
  const { data: statusData } = useCriterionStatus(criterionId);
  const { data: evidence = [] } = useEvidence(criterionId);
  const { mutate: updateStatus, isPending } = useUpdateStatus();

  const criterion = category?.criteria.find((c) => c.id === criterionId);

  const [status, setStatus] = useState<StatusEnum>('not_started');
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (statusData) {
      setStatus(statusData.status);
      setNotes(statusData.notes);
    }
  }, [statusData]);

  const handleSave = () => {
    updateStatus({ criterionId, status, notes }, {
      onSuccess: () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      },
    });
  };

  const handleAskAI = () => {
    navigate(`/chat?q=${encodeURIComponent(`Help me implement ${criterionId}: ${criterion?.title || ''}`)}`);
  };

  if (!criterion) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-8 w-8 border-2 border-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 hover:text-gray-600 transition-colors">
          <ChevronLeft className="h-4 w-4" /> Back
        </button>
        <span>/</span>
        <Link to={`/controls/${categoryCode}`} className="hover:text-gray-600 transition-colors">{categoryCode}</Link>
        <span>/</span>
        <span className="text-gray-600 font-medium">{criterionId}</span>
      </div>

      {/* Header */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-4 shadow-sm">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-sm font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-lg">
                {criterion.id}
              </span>
            </div>
            <h1 className="text-lg font-bold text-gray-900">{criterion.title}</h1>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{criterion.description}</p>
          </div>
        </div>

        {/* Status + Actions */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100 flex-wrap">
          <StatusSelector value={status} onChange={setStatus} />
          <button
            onClick={handleSave}
            disabled={isPending}
            className="flex items-center gap-1.5 bg-blue-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {saved ? <><CheckSquare className="h-4 w-4" /> Saved!</> : <><Save className="h-4 w-4" /> Save</>}
          </button>
          <button
            onClick={handleAskAI}
            className="flex items-center gap-1.5 border border-purple-200 text-purple-700 bg-purple-50 text-sm px-4 py-1.5 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Ask AI
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Points of Focus */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="h-5 w-5 bg-blue-100 text-blue-700 rounded text-xs flex items-center justify-center font-bold">
              {criterion.pointsOfFocus.length}
            </span>
            Points of Focus
          </h2>
          <ol className="space-y-4">
            {criterion.pointsOfFocus.map((pof, i) => (
              <li key={pof.id} className="flex gap-3">
                <span className="h-5 w-5 rounded-full bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{pof.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{pof.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right column: notes + evidence */}
        <div className="space-y-4">
          {/* Notes */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-semibold text-gray-900 mb-3">Implementation Notes</h2>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Document your implementation approach, responsible team, links to policies..."
              rows={5}
              className="w-full text-sm text-gray-800 border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none placeholder-gray-400"
            />
            <button
              onClick={handleSave}
              disabled={isPending}
              className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
            >
              {saved ? '✓ Saved' : 'Save notes'}
            </button>
          </div>

          {/* Evidence */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-semibold text-gray-900 mb-3">Evidence ({evidence.length})</h2>
            <div className="mb-4">
              <EvidenceUpload criterionId={criterionId} />
            </div>
            <EvidenceList files={evidence} criterionId={criterionId} />
          </div>
        </div>
      </div>
    </div>
  );
}
