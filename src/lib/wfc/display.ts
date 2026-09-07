import {
  AZADGAR_2026_DOI,
  CALIFORNIA_ECOREGIONS_AFFECTED,
  CALIFORNIA_ECOREGIONS_TOTAL,
  CALIFORNIA_ONSET_ADVANCE_MAX_DAYS,
  CALIFORNIA_ONSET_ADVANCE_MIN_DAYS,
  CALVO_SANCHO_2026_DOI,
  FAN_2026_DOI,
  FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT,
  HAWKER_2026_DOI,
  HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC,
  KANG_2025_DOI,
  MADAKUMBURA_2025_DOI,
  POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT,
  POST_MEGAFIRE_FLOOD_PROBABILITY,
  PRE_FIRE_FLOOD_PROBABILITY,
  SMOKE_AEROSOL_REGIONS_STUDIED,
  ZHU_2025_DOI,
} from "./constants.ts";
import type { EvidenceEntry, Stance } from "./evidence.ts";
import { formatDe } from "../utils.ts";

export const STANCE_LABEL_DE: Record<Stance, string> = {
  onset: "Feuer-Saison",
  precipitation: "Niederschlag",
  amplification: "Hochwasser-Verstaerkung",
};

export const EVIDENCE_DOI: Record<EvidenceEntry["id"], string> = {
  fan2026: FAN_2026_DOI,
  madakumbura2025: MADAKUMBURA_2025_DOI,
  zhu2025: ZHU_2025_DOI,
  calvo2026: CALVO_SANCHO_2026_DOI,
  kang2025: KANG_2025_DOI,
  hawker2026: HAWKER_2026_DOI,
  azadgar2026: AZADGAR_2026_DOI,
};

export const EVIDENCE_URL: Record<EvidenceEntry["id"], string> = {
  fan2026: `https://doi.org/${FAN_2026_DOI}`,
  madakumbura2025: `https://doi.org/${MADAKUMBURA_2025_DOI}`,
  zhu2025: `https://doi.org/${ZHU_2025_DOI}`,
  calvo2026: `https://doi.org/${CALVO_SANCHO_2026_DOI}`,
  kang2025: `https://doi.org/${KANG_2025_DOI}`,
  hawker2026: `https://doi.org/${HAWKER_2026_DOI}`,
  azadgar2026: `https://doi.org/${AZADGAR_2026_DOI}`,
};

export function stanceLabelDe(stance: Stance): string {
  return STANCE_LABEL_DE[stance];
}

export function headlineFor(entry: EvidenceEntry): string {
  switch (entry.id) {
    case "fan2026":
      return "biome-divergent (boreal earlier / med-desert later)";
    case "madakumbura2025":
      return `${CALIFORNIA_ONSET_ADVANCE_MIN_DAYS}-${CALIFORNIA_ONSET_ADVANCE_MAX_DAYS} days earlier · ${CALIFORNIA_ECOREGIONS_AFFECTED}/${CALIFORNIA_ECOREGIONS_TOTAL} ecoregions`;
    case "zhu2025":
      return `smoke invigoration · ${SMOKE_AEROSOL_REGIONS_STUDIED} regions`;
    case "calvo2026":
      return `+${formatDe(HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC)} %/°C hourly · exceeds CC ~7 %/°C`;
    case "kang2025":
      return `${formatDe(PRE_FIRE_FLOOD_PROBABILITY)} → ${formatDe(POST_MEGAFIRE_FLOOD_PROBABILITY)} annual flood prob.`;
    case "hawker2026":
      return `extent ${formatDe(FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT[0])}-${formatDe(FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT[1])} % · exposure ${formatDe(POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT[0])}-${formatDe(POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT[1])} %`;
    case "azadgar2026":
      return "WASI/NWASI · Gdansk, Milan, Ghent, Oslo";
  }
}

export const KEY_NUMBERS = [
  {
    id: "ca_days",
    label: "California onset advance",
    value: `${CALIFORNIA_ONSET_ADVANCE_MIN_DAYS}–${CALIFORNIA_ONSET_ADVANCE_MAX_DAYS} d`,
  },
  {
    id: "valencia",
    label: "Valencia intensity / °C",
    value: `+${formatDe(HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC)} %`,
  },
  {
    id: "flood_pre",
    label: "Pre-fire flood prob.",
    value: formatDe(PRE_FIRE_FLOOD_PROBABILITY),
  },
  {
    id: "flood_post",
    label: "Post-megafire flood prob.",
    value: formatDe(POST_MEGAFIRE_FLOOD_PROBABILITY),
  },
  {
    id: "extent",
    label: "Extent underestimation",
    value: `${formatDe(FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT[0])}–${formatDe(FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT[1])} %`,
  },
  {
    id: "exposure",
    label: "Exposure underestimation",
    value: `${formatDe(POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT[0])}–${formatDe(POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT[1])} %`,
  },
] as const;
