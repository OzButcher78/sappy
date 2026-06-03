import { CATEGORY_LABELS, type Project } from "@/lib/projects";

type Category = Project["category"];

// Solid, high-contrast badges so the project type reads instantly over imagery.
const STYLES: Record<Category, string> = {
  web: "border-[var(--accent-light)]/60 bg-[var(--accent)] text-white shadow-sm shadow-black/30",
  app: "border-violet-300/60 bg-violet-500 text-white shadow-sm shadow-black/30",
};

function CategoryIcon({ category }: { category: Category }) {
  const common = {
    width: 12,
    height: 12,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };
  if (category === "app") {
    return (
      <svg {...common}>
        <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10.5 18h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  // web — globe
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

/** Color-coded Website / App badge for project cards. */
export default function CategoryBadge({
  category,
  locale = "en",
  className = "",
}: {
  category: Category;
  locale?: "en" | "de";
  className?: string;
}) {
  return (
    <span
      className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold tracking-wide ${STYLES[category]} ${className}`}
    >
      <CategoryIcon category={category} />
      {CATEGORY_LABELS[category][locale]}
    </span>
  );
}
