interface BadgeProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

export default function Badge({ name, className, onClick }: BadgeProps) {
  className = className ? className : "bg-pink-600";
  return (
    <span
      className={`inline-flex cursor-pointer text-white rounded-full h-6 px-3 justify-center items-center ${className} last:ml-2`}
      onClick={onClick}
    >
      {name}
    </span>
  );
}
