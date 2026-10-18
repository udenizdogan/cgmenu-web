import { SITE_URL } from "@/lib/site";
import { getMenuStrings } from "@/lib/tenant/ui-strings";

// Shown for unknown subdomains too, where there is no business locale to
// honour, so the message is given in both Turkish and English.
export default function TenantNotFound() {
  const tr = getMenuStrings("tr").notFound;
  const en = getMenuStrings("en").notFound;

  return (
    <main className="mx-auto max-w-md px-6 py-28 text-center font-sans">
      <p className="text-sm font-bold text-brand-500">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">{tr.title}</h1>
      <p className="mt-3 text-ink-500">{tr.body}</p>
      <p lang="en" className="mt-6 text-sm text-ink-500">
        {en.title}. {en.body}
      </p>
      <a href={SITE_URL} className="mt-8 inline-block font-semibold text-brand-600 underline">
        CG Menu
      </a>
    </main>
  );
}
