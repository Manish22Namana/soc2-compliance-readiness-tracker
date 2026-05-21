import { Download, Trash2, FileText, Image, File } from 'lucide-react';
import type { EvidenceFile } from '../../types/soc2';
import { useDeleteEvidence } from '../../hooks/useEvidence';
import { formatBytes, formatDate } from '../../lib/utils';

interface Props {
  files: EvidenceFile[];
  criterionId: string;
}

function FileIcon({ mime }: { mime: string }) {
  if (mime.startsWith('image/')) return <Image className="h-4 w-4 text-purple-500" />;
  if (mime === 'application/pdf') return <FileText className="h-4 w-4 text-red-500" />;
  return <File className="h-4 w-4 text-blue-500" />;
}

export default function EvidenceList({ files, criterionId }: Props) {
  const { mutate: deleteFile, isPending } = useDeleteEvidence(criterionId);

  if (files.length === 0) {
    return <p className="text-sm text-gray-400 italic">No evidence uploaded yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {files.map((f) => (
        <li key={f.id} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
          <FileIcon mime={f.mimeType} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-800 truncate">{f.originalName}</p>
            <p className="text-xs text-gray-400">{formatBytes(f.sizeBytes)} · {formatDate(f.uploadedAt)}</p>
          </div>
          <a
            href={`/api/evidence/download/${f.id}`}
            download={f.originalName}
            className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors rounded"
            title="Download"
          >
            <Download className="h-4 w-4" />
          </a>
          <button
            onClick={() => deleteFile(f.id)}
            disabled={isPending}
            className="p-1.5 text-gray-400 hover:text-red-600 transition-colors rounded disabled:opacity-50"
            title="Delete"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </li>
      ))}
    </ul>
  );
}
