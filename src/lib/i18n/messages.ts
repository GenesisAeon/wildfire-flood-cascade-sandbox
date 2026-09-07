import { formatDe } from "@/lib/utils";
import {
  CALIFORNIA_ECOREGIONS_AFFECTED,
  CALIFORNIA_ECOREGIONS_TOTAL,
  CALIFORNIA_ONSET_ADVANCE_MAX_DAYS,
  CALIFORNIA_ONSET_ADVANCE_MIN_DAYS,
  CLAUSIUS_CLAPEYRON_BASELINE_PCT_PER_DEGC,
  FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT,
  HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC,
  POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT,
  POST_MEGAFIRE_FLOOD_PROBABILITY,
  PRE_FIRE_FLOOD_PROBABILITY,
  SMOKE_AEROSOL_REGIONS_STUDIED,
} from "@/lib/wfc/constants";
import type { EvidenceEntry, Stance } from "@/lib/wfc/evidence";

export type Locale = "de" | "en";

export type Messages = {
  language: string;
  documentTitle: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  lead: string;
  statusLabel: string;
  statusHeading: string;
  statusBody: string;
  filterHeading: string;
  filterHint: string;
  filterAll: string;
  filterOnset: string;
  filterPrecipitation: string;
  filterAmplification: string;
  filterAria: string;
  hiddenOne: string;
  hiddenMany: (n: number) => string;
  hiddenSuffix: string;
  numbersHeading: string;
  evidenceHeading: string;
  evidenceLead: string;
  entriesCount: (visible: number, total: number) => string;
  coreClaim: string;
  citation: string;
  doiSource: string;
  close: string;
  drawerFoot: string;
  honestyHeading: string;
  sourcesHeading: string;
  sourcesLead: string;
  sourcesFoot: string;
  disclaimerHeading: string;
  disclaimerLead: string;
  disclaimerBody: string;
  linkKlimakatalog: string;
  linkAppsHub: string;
  linkGithub: string;
  linkSandboxGithub: string;
  stanceLabel: Record<Stance, string>;
  evidenceTitle: Record<EvidenceEntry["id"], string>;
  evidenceCore: Record<EvidenceEntry["id"], string>;
  headlines: Record<EvidenceEntry["id"], string>;
  keyNumberLabels: Record<string, string>;
  sourceNotes: Record<EvidenceEntry["id"], string>;
};

const evidenceCoreDe = (): Record<EvidenceEntry["id"], string> => ({
  fan2026:
    "Feuer-Saison-Timing verschiebt sich regional unterschiedlich — nicht einheitlich global. Boreale/Taiga-Gebiete: früherer Beginn (früherer Schneeschmelz). Mittelmeer/Wüste: verzögerter Beginn und verlängerte Spätsaison — die Gegenrichtung. Prairie/humid: abgeschwächtes Signal.",
  madakumbura2025: `Kalifornien: Feuer-Saison-Beginn ${CALIFORNIA_ONSET_ADVANCE_MIN_DAYS}–${CALIFORNIA_ONSET_ADVANCE_MAX_DAYS} Tage früher (1992–2020) in ${CALIFORNIA_ECOREGIONS_AFFECTED} von ${CALIFORNIA_ECOREGIONS_TOTAL} Ökoregionen — regionale Bestätigung innerhalb des divergenten globalen Bildes.`,
  zhu2025: `Rauch-Aerosole wirken als Kondensations-/Eis-Keime, verzögern Tropfenkoaleszenz in höhere, kältere Höhen und verstärken latente Wärmefreisetzung. Verifiziert über ${SMOKE_AEROSOL_REGIONS_STUDIED} feuerbetroffene Regionen — kein global einheitlicher Koeffizient.`,
  calvo2026: `Valencia-Flashflood Oktober 2024: stündliche Regenintensität +${formatDe(HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC)} %/°C gegenüber vorindustriellem Gegenfakt — übersteigt Clausius-Clapeyron-Basis (~${formatDe(CLAUSIUS_CLAPEYRON_BASELINE_PCT_PER_DEGC)} %/°C). Dynamische Verstärkung zusätzlich zur thermodynamischen Feuchte.`,
  kang2025: `SE-Australien, 50-Jahre-Abfluss, 3 Megafires: jährliche Hochwasserwahrscheinlichkeit ${formatDe(PRE_FIRE_FLOOD_PROBABILITY)} (~1-in-64) → ${formatDe(POST_MEGAFIRE_FLOOD_PROBABILITY)} (~1-in-8). Mechanismus: Kronen-/Streu-Interzeptionsverlust — ausdrücklich NICHT Bodenhydrophobie.`,
  hawker2026: `Standard-Annahmen zur Gerinnekapazität unterschätzen Hochwasserausdehnung um ${formatDe(FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT[0])}–${formatDe(FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT[1])} % und Exposition um ${formatDe(POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT[0])}–${formatDe(POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT[1])} % (Mississippi-Becken). Gerinneänderung vergleichbar mit Klimawandel-Effekt.`,
  azadgar2026:
    "Landnahme/Versiegelung (WASI/NWASI) in Gdansk, Mailand, Gent, Oslo (2012–2018): Umwandlung natürlicher Flächen in versiegelte Siedlungsflächen verringert messbar die Regenrückhaltekapazität (InVEST Urban Stormwater Retention Model).",
});

const evidenceCoreEn = (): Record<EvidenceEntry["id"], string> => ({
  fan2026:
    "Fire-season timing shifts are regionally divergent — not globally uniform. Boreal/taiga: earlier onset (earlier snowmelt). Mediterranean/desert: delayed onset and extended late season — the opposite direction. Prairie/humid: muted signal.",
  madakumbura2025: `California: fire-season onset advanced ${CALIFORNIA_ONSET_ADVANCE_MIN_DAYS}–${CALIFORNIA_ONSET_ADVANCE_MAX_DAYS} days (1992–2020) across ${CALIFORNIA_ECOREGIONS_AFFECTED} of ${CALIFORNIA_ECOREGIONS_TOTAL} ecoregions — a regional confirmation within the divergent global picture.`,
  zhu2025: `Smoke aerosols act as cloud-condensation/ice-nucleating particles, delaying droplet coalescence to higher, colder altitude and intensifying latent-heat release. Verified across ${SMOKE_AEROSOL_REGIONS_STUDIED} fire-impacted regions — not a universal global coefficient.`,
  calvo2026: `Valencia flash flood October 2024: hourly rainfall intensity +${formatDe(HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC)} %/°C vs. a pre-industrial counterfactual — exceeds Clausius-Clapeyron baseline (~${formatDe(CLAUSIUS_CLAPEYRON_BASELINE_PCT_PER_DEGC)} %/°C). Dynamical amplification on top of thermodynamic moisture capacity.`,
  kang2025: `SE Australia, 50-year streamflow, 3 megafires: annual flood probability ${formatDe(PRE_FIRE_FLOOD_PROBABILITY)} (~1-in-64) → ${formatDe(POST_MEGAFIRE_FLOOD_PROBABILITY)} (~1-in-8). Mechanism: canopy/litter interception loss — explicitly NOT soil hydrophobicity.`,
  hawker2026: `Standard channel-capacity assumptions underestimate flood extent by ${formatDe(FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT[0])}–${formatDe(FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT[1])} % and exposure by ${formatDe(POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT[0])}–${formatDe(POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT[1])} % (Mississippi basin). Channel change comparable in magnitude to climate-change forcing.`,
  azadgar2026:
    "Land-take/sealing (WASI/NWASI) in Gdansk, Milan, Ghent, Oslo (2012–2018): converting natural/semi-natural land into sealed urban surfaces measurably reduces stormwater retention capacity (InVEST Urban Stormwater Retention Model).",
});

const headlines = (): Record<EvidenceEntry["id"], string> => ({
  fan2026: "biome-divergent (boreal earlier / med-desert later)",
  madakumbura2025: `${CALIFORNIA_ONSET_ADVANCE_MIN_DAYS}–${CALIFORNIA_ONSET_ADVANCE_MAX_DAYS} days · ${CALIFORNIA_ECOREGIONS_AFFECTED}/${CALIFORNIA_ECOREGIONS_TOTAL} ecoregions`,
  zhu2025: `smoke invigoration · ${SMOKE_AEROSOL_REGIONS_STUDIED} regions`,
  calvo2026: `+${formatDe(HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC)} %/°C hourly · exceeds CC ~${formatDe(CLAUSIUS_CLAPEYRON_BASELINE_PCT_PER_DEGC)} %/°C`,
  kang2025: `${formatDe(PRE_FIRE_FLOOD_PROBABILITY)} → ${formatDe(POST_MEGAFIRE_FLOOD_PROBABILITY)} annual flood prob.`,
  hawker2026: `extent ${formatDe(FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT[0])}–${formatDe(FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT[1])} % · exposure ${formatDe(POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT[0])}–${formatDe(POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT[1])} %`,
  azadgar2026: "WASI/NWASI · Gdansk, Milan, Ghent, Oslo",
});

export const messages: Record<Locale, Messages> = {
  de: {
    language: "Sprache",
    documentTitle: "Wildfire–Flood-Cascade",
    eyebrow: "Wildfire-Flood-Cascade-Sandbox · wildfire-flood-cascade-utac P121",
    titleLead: "Kette real.",
    titleAccent: " Kombiniert nicht studiert.",
    lead: "Sieben real verifizierte Mechanismen — Feuer-Saison, Rauch, SST-Feuchte, Post-Feuer-Hochwasser, Gerinne/Auen, Versiegelung, Gletscher-Puffer — aber keine einzelne Studie prüft die volle Kette als ein System.",
    statusLabel: "Honesty",
    statusHeading: "Komponenten verifiziert · Kette nicht kombiniert studiert",
    statusBody:
      "is_combined_cascade_a_directly_studied_single_system() = false. component_mechanisms_independently_verified() = true. Fan 2026: Feuer-Saison-Richtung regional divergent (nicht global einheitlich). Kang 2025: Mechanismus Interzeption, nicht Bodenhydrophobie. Kein UTAC/CREP/AFET, kein erfundenes Gamma.",
    filterHeading: "Cascade-Stufe",
    filterHint: "Filter ändert die Ansicht, nicht den Befund.",
    filterAll: "alle",
    filterOnset: "Feuer-Saison",
    filterPrecipitation: "Niederschlag",
    filterAmplification: "Hochwasser-Verstärkung",
    filterAria: "Nach Cascade-Stufe filtern",
    hiddenOne: "1 Eintrag ausgeblendet",
    hiddenMany: (n) => `${n} Einträge ausgeblendet`,
    hiddenSuffix: "— die Honesty bleibt.",
    numbersHeading: "Kennzahlen (1:1 aus P121)",
    evidenceHeading: "Mechanismen",
    evidenceLead:
      "Jede Kette-Stufe einzeln belegt halten — und die Kombinations-Honesty sichtbar lassen.",
    entriesCount: (visible, total) => `${visible} / ${total} Einträge`,
    coreClaim: "Kernaussage",
    citation: "Zitat",
    doiSource: "DOI / Quelle",
    close: "Schließen",
    drawerFoot:
      "Sieben Quellen, eine Honesty-Linie — die volle Kette ist nicht als Einzelstudie belegt.",
    honestyHeading: "Honesty-Checks",
    sourcesHeading: "Quellen",
    sourcesLead:
      "Konstanten 1:1 aus wildfire-flood-cascade-utac (P121, v1.0.1). Die Oberfläche ist übersetzt; Zahlen und Zitationen bleiben in ihren Einheiten.",
    sourcesFoot:
      "Keine UTAC/CREP/AFET-Verknüpfung. Gletscher-Puffer nur Querverweis auf glacier-buffer-utac (P99). Owner: GenesisAeon / Johann Römer. MIT.",
    disclaimerHeading: "Disclaimer",
    disclaimerLead:
      "Jeder Mechanismus ist real und unabhängig verifiziert. Die volle kombinierte Kausal-Kette ist nirgendwo als Einzelstudie belegt — das ist Absicht, kein Versehen.",
    disclaimerBody:
      "Keine UTAC-, CREP- oder AFET-Brücke. Kein erfundenes Gamma. Zahlen und DOIs stammen 1:1 aus wildfire-flood-cascade-utac (P121, v1.0.1).",
    linkKlimakatalog: "Klimakatalog · wildfire-flood-cascade-utac",
    linkAppsHub: "GenesisAeon Apps-Hub",
    linkGithub: "Quellpaket auf GitHub",
    linkSandboxGithub: "GitHub-Paket (Sandbox)",
    stanceLabel: {
      onset: "Feuer-Saison",
      precipitation: "Niederschlag",
      amplification: "Hochwasser-Verstärkung",
    },
    evidenceTitle: {
      fan2026: "Fan et al. 2026 — Feuer-Saison regional divergent",
      madakumbura2025: "Madakumbura et al. 2025 — Kalifornien früher",
      zhu2025: "Zhu et al. 2025 — Rauch-Aerosol-Invigoration",
      calvo2026: "Calvo-Sancho et al. 2026 — Valencia SST-Feuchte",
      kang2025: "Kang et al. 2025 — Post-Megafire-Hochwasser",
      hawker2026: "Hawker et al. 2026 — Gerinne/Auen-Unterschätzung",
      azadgar2026: "Azadgar et al. 2026 — Versiegelung / Landnahme",
    },
    evidenceCore: evidenceCoreDe(),
    headlines: headlines(),
    keyNumberLabels: {
      ca_days: "Kalifornien Beginn-Vorlauf",
      valencia: "Valencia Intensität / °C",
      flood_pre: "Vor-Feuer-Hochwasser-Prob.",
      flood_post: "Nach-Megafire-Hochwasser-Prob.",
      extent: "Ausdehnungs-Unterschätzung",
      exposure: "Expositions-Unterschätzung",
    },
    sourceNotes: {
      fan2026: "Feuer-Saison-Timing regional divergent — nicht global einheitlich.",
      madakumbura2025: "Kalifornien: 6–46 Tage früherer Beginn, 11/13 Ökoregionen.",
      zhu2025: "Rauch-Aerosole verstärken Niederschlag über 5 Regionen.",
      calvo2026: "Valencia: +20 %/°C stündlich, über Clausius-Clapeyron.",
      kang2025: "1-in-64 → 1-in-8; Mechanismus Interzeption, nicht Hydrophobie.",
      hawker2026: "Ausdehnung 9–152 %, Exposition 15–472 % unterschätzt.",
      azadgar2026: "WASI/NWASI in 4 europäischen Städten 2012–2018.",
    },
  },
  en: {
    language: "Language",
    documentTitle: "Wildfire–Flood Cascade",
    eyebrow: "Wildfire-flood-cascade sandbox · wildfire-flood-cascade-utac P121",
    titleLead: "Links real.",
    titleAccent: " Combined not studied.",
    lead: "Seven independently verified mechanisms — fire season, smoke, SST moisture, post-fire flood, channel/floodplain, sealing, glacier buffer — but no single study tests the full chain as one system.",
    statusLabel: "Honesty",
    statusHeading: "Components verified · combined cascade not studied as one system",
    statusBody:
      "is_combined_cascade_a_directly_studied_single_system() = false. component_mechanisms_independently_verified() = true. Fan 2026: fire-season direction regionally divergent (not globally uniform). Kang 2025: interception mechanism, not soil hydrophobicity. No UTAC/CREP/AFET, no invented gamma.",
    filterHeading: "Cascade stage",
    filterHint: "The filter changes the view, not the finding.",
    filterAll: "all",
    filterOnset: "Fire season",
    filterPrecipitation: "Precipitation",
    filterAmplification: "Flood amplification",
    filterAria: "Filter by cascade stage",
    hiddenOne: "1 entry hidden",
    hiddenMany: (n) => `${n} entries hidden`,
    hiddenSuffix: "— honesty stays.",
    numbersHeading: "Key numbers (1:1 from P121)",
    evidenceHeading: "Mechanisms",
    evidenceLead: "Keep each cascade stage visible — and keep the combined-chain honesty explicit.",
    entriesCount: (visible, total) => `${visible} / ${total} entries`,
    coreClaim: "Core claim",
    citation: "Citation",
    doiSource: "DOI / source",
    close: "Close",
    drawerFoot:
      "Seven sources, one honesty line — the full cascade is not a single studied system.",
    honestyHeading: "Honesty checks",
    sourcesHeading: "Sources",
    sourcesLead:
      "Constants 1:1 from wildfire-flood-cascade-utac (P121, v1.0.1). The chrome is translated; numbers and citations stay in their units.",
    sourcesFoot:
      "No UTAC/CREP/AFET link. Glacier buffer is a cross-reference to glacier-buffer-utac (P99) only. Owner: GenesisAeon / Johann Römer. MIT.",
    disclaimerHeading: "Disclaimer",
    disclaimerLead:
      "Every mechanism is real and independently verified. The full combined causal chain is not documented as a single study anywhere — that is intentional, not an omission.",
    disclaimerBody:
      "No UTAC, CREP, or AFET bridge. No invented gamma. Numbers and DOIs are 1:1 from wildfire-flood-cascade-utac (P121, v1.0.1).",
    linkKlimakatalog: "Climate catalog · wildfire-flood-cascade-utac",
    linkAppsHub: "GenesisAeon Apps-Hub",
    linkGithub: "Source package on GitHub",
    linkSandboxGithub: "GitHub package (sandbox)",
    stanceLabel: {
      onset: "Fire season",
      precipitation: "Precipitation",
      amplification: "Flood amplification",
    },
    evidenceTitle: {
      fan2026: "Fan et al. 2026 — fire season regionally divergent",
      madakumbura2025: "Madakumbura et al. 2025 — California earlier",
      zhu2025: "Zhu et al. 2025 — smoke-aerosol invigoration",
      calvo2026: "Calvo-Sancho et al. 2026 — Valencia SST moisture",
      kang2025: "Kang et al. 2025 — post-megafire flood",
      hawker2026: "Hawker et al. 2026 — channel/floodplain underestimation",
      azadgar2026: "Azadgar et al. 2026 — sealing / land-take",
    },
    evidenceCore: evidenceCoreEn(),
    headlines: headlines(),
    keyNumberLabels: {
      ca_days: "California onset advance",
      valencia: "Valencia intensity / °C",
      flood_pre: "Pre-fire flood prob.",
      flood_post: "Post-megafire flood prob.",
      extent: "Extent underestimation",
      exposure: "Exposure underestimation",
    },
    sourceNotes: {
      fan2026: "Fire-season timing regionally divergent — not globally uniform.",
      madakumbura2025: "California: 6–46 days earlier onset, 11/13 ecoregions.",
      zhu2025: "Smoke aerosols invigorate precipitation across 5 regions.",
      calvo2026: "Valencia: +20 %/°C hourly, exceeds Clausius-Clapeyron.",
      kang2025: "1-in-64 → 1-in-8; interception, not hydrophobicity.",
      hawker2026: "Extent 9–152 %, exposure 15–472 % underestimated.",
      azadgar2026: "WASI/NWASI across 4 European cities 2012–2018.",
    },
  },
};

export function stanceLabel(stance: Stance, t: Messages): string {
  return t.stanceLabel[stance];
}

export function headlineForLocale(entry: EvidenceEntry, t: Messages): string {
  return t.headlines[entry.id];
}

export function keyNumbersForLocale(t: Messages) {
  return [
    {
      id: "ca_days",
      label: t.keyNumberLabels.ca_days,
      value: `${CALIFORNIA_ONSET_ADVANCE_MIN_DAYS}–${CALIFORNIA_ONSET_ADVANCE_MAX_DAYS} d`,
    },
    {
      id: "valencia",
      label: t.keyNumberLabels.valencia,
      value: `+${formatDe(HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC)} %`,
    },
    {
      id: "flood_pre",
      label: t.keyNumberLabels.flood_pre,
      value: formatDe(PRE_FIRE_FLOOD_PROBABILITY),
    },
    {
      id: "flood_post",
      label: t.keyNumberLabels.flood_post,
      value: formatDe(POST_MEGAFIRE_FLOOD_PROBABILITY),
    },
    {
      id: "extent",
      label: t.keyNumberLabels.extent,
      value: `${formatDe(FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT[0])}–${formatDe(FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT[1])} %`,
    },
    {
      id: "exposure",
      label: t.keyNumberLabels.exposure,
      value: `${formatDe(POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT[0])}–${formatDe(POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT[1])} %`,
    },
  ] as const;
}
