import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';
import type { ControlStatus, StatusEnum } from '../types/soc2';

export function useAllStatuses() {
  return useQuery<ControlStatus[]>({
    queryKey: ['statuses'],
    queryFn: () => api.get('/control-status').then((r) => r.data),
  });
}

export function useCriterionStatus(criterionId: string) {
  return useQuery<ControlStatus>({
    queryKey: ['status', criterionId],
    queryFn: () => api.get(`/control-status/${criterionId}`).then((r) => r.data),
    enabled: !!criterionId,
  });
}

export function useUpdateStatus() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ criterionId, status, notes }: { criterionId: string; status?: StatusEnum; notes?: string }) =>
      api.put(`/control-status/${criterionId}`, { status, notes }).then((r) => r.data),
    onSuccess: (data: ControlStatus) => {
      qc.setQueryData(['status', data.criterion_id], data);
      qc.invalidateQueries({ queryKey: ['statuses'] });
    },
  });
}
