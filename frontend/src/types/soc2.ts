export type StatusEnum = 'not_started' | 'in_progress' | 'complete' | 'na';

export interface PointOfFocus {
  id: string;
  title: string;
  description: string;
}

export interface Criterion {
  id: string;
  categoryCode: string;
  title: string;
  description: string;
  pointsOfFocus: PointOfFocus[];
}

export interface Category {
  code: string;
  name: string;
  description: string;
  criteria: Criterion[];
}

export interface Soc2Catalog {
  version: string;
  categories: Category[];
}

export interface ControlStatus {
  criterion_id: string;
  status: StatusEnum;
  notes: string;
  updated_at: string | null;
}

export interface EvidenceFile {
  id: number;
  criterionId: string;
  originalName: string;
  mimeType: string;
  sizeBytes: number;
  uploadedAt: string;
}

export interface ChatMessage {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}
