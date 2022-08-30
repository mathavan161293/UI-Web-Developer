interface TableHeadProps {
  name: string;
  className?: string;
}

export default function TableHead({ name, className }: TableHeadProps) {
  className = className ? className : "";
  return (
    <th
      className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-slate-50 text-slate-500 border-slate-100 ${className}`}
    >
      {name}
    </th>
  );
}
