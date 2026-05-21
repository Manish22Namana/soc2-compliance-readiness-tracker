import type { StatusEnum } from '../../types/soc2';
import { STATUS_LABELS } from '../../lib/utils';

interface Props {
  value: StatusEnum;
  onChange: (s: StatusEnum) => void;
  disabled?: boolean;
}

const OPTIONS: StatusEnum[] = ['not_started', 'in_progress', 'complete', 'na'];

const OPTION_STYLES: Record<StatusEnum, string> = {
  not_started: 'text-gray-700',
  in_progress: 'text-amber-700',
  complete: 'text-green-700',
  na: 'text-slate-500',
};

const SELECT_STYLES: Record<StatusEnum, string> = {
  not_started: 'bg-gray-100 border-gray-200 text-gray-700',
  in_progress: 'bg-amber-50 border-amber-200 text-amber-700',
  complete: 'bg-green-50 border-green-200 text-green-700',
  na: 'bg-slate-100 border-slate-200 text-slate-500',
};

export default function StatusSelector({ value, onChange, disabled }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as StatusEnum)}
      disabled={disabled}
      className={`text-sm border rounded-lg px-3 py-1.5 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${SELECT_STYLES[value]}`}
    >
      {OPTIONS.map((opt) => (
        <option key={opt} value={opt} className={OPTION_STYLES[opt]}>
          {STATUS_LABELS[opt]}
        </option>
      ))}
    </select>
  );
}
