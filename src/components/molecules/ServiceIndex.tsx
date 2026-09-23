import Link from "next/link";

export default function ServiceIndex({
  groups,
}: {
  groups: readonly { id: string; title: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {groups.map((group) => (
        <Link
          key={group.id}
          href={`#${group.id}`}
          className="rounded-full border border-border bg-surface px-4 py-2 text-[15px] font-medium text-ink no-underline transition-colors hover:border-accent hover:text-accent"
        >
          {group.title}
        </Link>
      ))}
    </div>
  );
}
