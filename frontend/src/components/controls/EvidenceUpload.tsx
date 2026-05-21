import React, { useRef, useState } from 'react';
import { Upload, AlertCircle } from 'lucide-react';
import { useUploadEvidence } from '../../hooks/useEvidence';

interface Props {
  criterionId: string;
}

const ALLOWED_TYPES = ['application/pdf', 'image/png', 'image/jpeg',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain'];

export default function EvidenceUpload({ criterionId }: Props) {
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mutate: upload, isPending } = useUploadEvidence(criterionId);

  const processFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setError('');
    const valid: File[] = [];
    for (const f of Array.from(files)) {
      if (!ALLOWED_TYPES.includes(f.type)) {
        setError(`File type not allowed: ${f.name}`);
        return;
      }
      if (f.size > 10 * 1024 * 1024) {
        setError(`File too large (max 10MB): ${f.name}`);
        return;
      }
      valid.push(f);
    }
    if (valid.length > 5) { setError('Maximum 5 files at once'); return; }
    upload(valid, { onError: (e: any) => setError(e.response?.data?.error || 'Upload failed') });
  };

  return (
    <div>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); processFiles(e.dataTransfer.files); }}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
          dragging ? 'border-blue-400 bg-blue-50' : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
        } ${isPending ? 'opacity-50 pointer-events-none' : ''}`}
      >
        <Upload className="h-8 w-8 text-gray-300 mx-auto mb-2" />
        <p className="text-sm font-medium text-gray-600">
          {isPending ? 'Uploading...' : 'Drop files here or click to upload'}
        </p>
        <p className="text-xs text-gray-400 mt-1">PDF, PNG, JPG, DOCX, XLSX, TXT — max 10MB each, up to 5 files</p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.png,.jpg,.jpeg,.docx,.xlsx,.txt"
          className="hidden"
          onChange={(e) => processFiles(e.target.files)}
        />
      </div>
      {error && (
        <p className="flex items-center gap-1 text-sm text-red-600 mt-2">
          <AlertCircle className="h-4 w-4" /> {error}
        </p>
      )}
    </div>
  );
}
