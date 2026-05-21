import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';
import type { EvidenceFile } from '../types/soc2';

export function useEvidence(criterionId: string) {
  return useQuery<EvidenceFile[]>({
    queryKey: ['evidence', criterionId],
    queryFn: () => api.get(`/evidence/${criterionId}`).then((r) => r.data),
    enabled: !!criterionId,
  });
}

export function useUploadEvidence(criterionId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (files: File[]) => {
      const form = new FormData();
      files.forEach((f) => form.append('files', f));
      return api.post(`/evidence/${criterionId}`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((r) => r.data);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['evidence', criterionId] }),
  });
}

export function useDeleteEvidence(criterionId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (evidenceId: number) => api.delete(`/evidence/${evidenceId}`).then((r) => r.data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['evidence', criterionId] }),
  });
}
