const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://chatgpt4mobile.com";

type BreadcrumbItem = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href && {
        item: item.href.startsWith("http")
          ? item.href
          : `${BASE_URL}${item.href}`,
      }),
    })),
  };

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mb-4 text-xs text-zinc-500 sm:mb-6"
      >
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="text-zinc-600" aria-hidden>
                  /
                </span>
              )}
              {item.href ? (
                <a
                  href={item.href}
                  className="hover:text-emerald-300 hover:underline"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-zinc-400">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
