import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';
import type { Soc2Catalog, Category } from '../types/soc2';

export function useCatalog() {
  return useQuery<Soc2Catalog>({
    queryKey: ['catalog'],
    queryFn: () => api.get('/controls').then((r) => r.data),
    staleTime: Infinity,
  });
}

export function useCategory(code: string) {
  return useQuery<Category>({
    queryKey: ['category', code],
    queryFn: () => api.get(`/controls/${code}`).then((r) => r.data),
    staleTime: Infinity,
    enabled: !!code,
  });
}
