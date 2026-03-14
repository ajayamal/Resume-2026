type BadgeProps = {
  content: string;
};

export const Badge = ({ content }: BadgeProps) => {
  if (!content) return null;
  return (
    <li className="px-2 text-xs py-1 text-white bg-zinc-900 border border-zinc-700 rounded-lg list-none">
      {content}
    </li>
  );
};
