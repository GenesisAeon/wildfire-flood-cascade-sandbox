import { useLocale } from "@/lib/i18n/locale";
import type { EvidenceEntry } from "@/lib/wfc";

const CITES: {
  id: EvidenceEntry["id"];
  authors: string;
  year: string;
  title: string;
  journal: string;
  doi: string;
}[] = [
  {
    id: "fan2026",
    authors: "Fan, S., Tao, W., Zhang, Y., Shindell, D., Zhang, Y.",
    year: "2026",
    title: "Regionally divergent shifts in global fire season timing under recent warming",
    journal: "Geophysical Research Letters",
    doi: "10.1029/2025GL121153",
  },
  {
    id: "madakumbura2025",
    authors: "Madakumbura, G.D., et al.",
    year: "2025",
    title: "Advancing fire season onset across California ecoregions",
    journal: "Science Advances",
    doi: "10.1126/sciadv.adt2041",
  },
  {
    id: "zhu2025",
    authors: "Zhu, H., Zhao, H., Yang, S., et al.",
    year: "2025",
    title: "Wildfire smoke aerosols invigorate precipitation across fire-impacted regions",
    journal: "npj Climate and Atmospheric Science",
    doi: "10.1038/s41612-025-01047-3",
  },
  {
    id: "calvo2026",
    authors: "Calvo-Sancho, C., Diaz-Fernandez, J., Gonzalez-Aleman, J.J., et al.",
    year: "2026",
    title: "Anthropogenic warming intensified the October 2024 Valencia flash-flood rainfall",
    journal: "Nature Communications",
    doi: "10.1038/s41467-026-68929-9",
  },
  {
    id: "kang2025",
    authors: "Kang, T-H., et al.",
    year: "2025",
    title:
      "Interception reduction from deforestation and forest fire increases large-scale fluvial flooding risk",
    journal: "Communications Earth & Environment",
    doi: "10.1038/s43247-025-02748-6",
  },
  {
    id: "hawker2026",
    authors: "Hawker, L., Darby, S., Slater, L., et al.",
    year: "2026",
    title: "River channel change can affect flood hazard and impact substantially",
    journal: "Communications Earth & Environment",
    doi: "10.1038/s43247-026-03517-9",
  },
  {
    id: "azadgar2026",
    authors: "Azadgar, A., Benedini, A., Salata, S., Lacoere, P., Badach, J., Nyka, L.",
    year: "2026",
    title:
      "Flood-sensitive land take (FSL) analysis: A new way to read how urban sealing shapes flood risk",
    journal: "Journal of Environmental Management",
    doi: "10.1016/j.jenvman.2026.129513",
  },
];

export function Sources() {
  const { t } = useLocale();

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{t.sourcesHeading}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{t.sourcesLead}</p>
      <ul className="mt-5 space-y-4 text-sm">
        {CITES.map((c) => (
          <li key={`${c.authors}-${c.year}`} className="border-t border-ring pt-4">
            <p className="text-fg">
              {c.authors} ({c.year}). <span className="italic">{c.title}.</span>
              {c.journal ? ` ${c.journal}.` : null}
            </p>
            <p className="mt-1 text-muted">{t.sourceNotes[c.id]}</p>
            <a
              className="mt-1 inline-flex min-h-11 items-center font-mono text-xs text-accent underline-offset-4 hover:underline"
              href={`https://doi.org/${c.doi}`}
              target="_blank"
              rel="noreferrer"
            >
              doi:{c.doi}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs leading-relaxed text-subtle">{t.sourcesFoot}</p>
    </section>
  );
}
