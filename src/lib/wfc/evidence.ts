/**
 * Structured evidence entries + honesty APIs for wildfire-flood-cascade-utac.
 * Ported 1:1 from P121 v1.0.1 (synthesis_hypothesis + module honesty checks).
 * No UTAC/CREP/AFET framing -- see constants.ts and DISCLAIMER.md.
 */

import {
  AREA_ABOVE_180MM_RAINFALL_INCREASE_PCT,
  AZADGAR_2026_CITATION,
  CALIFORNIA_ECOREGIONS_AFFECTED,
  CALIFORNIA_ECOREGIONS_TOTAL,
  CALIFORNIA_ONSET_ADVANCE_MAX_DAYS,
  CALIFORNIA_ONSET_ADVANCE_MIN_DAYS,
  CALIFORNIA_STUDY_PERIOD,
  CALVO_SANCHO_2026_CITATION,
  CASCADE_LINKS,
  CATCHMENT_RAINFALL_VOLUME_INCREASE_PCT,
  CLAUSIUS_CLAPEYRON_BASELINE_PCT_PER_DEGC,
  FAN_2026_CITATION,
  FIRE_SEASON_SHIFT_BY_BIOME,
  FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT,
  GLACIER_BUFFER_CROSS_REFERENCE_CITATION,
  GLACIER_BUFFER_CROSS_REFERENCE_PACKAGE,
  GLACIER_BUFFER_CROSS_REFERENCE_PACKAGE_ID,
  HAWKER_2026_CITATION,
  HAWKER_STUDY_AREA_SQ_MILES,
  HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC,
  KANG_2025_CITATION,
  MADAKUMBURA_2025_CITATION,
  MEGAFIRE_YEARS_STUDIED,
  MECHANISM_BREAKDOWN_PCT,
  POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT,
  POST_MEGAFIRE_FLOOD_PROBABILITY,
  PRE_FIRE_FLOOD_PROBABILITY,
  SEALING_CITIES_STUDIED,
  SEALING_INDEX_NAMES,
  SEALING_STUDY_PERIOD,
  SIX_HOUR_RAINFALL_RATE_INCREASE_PCT,
  SMOKE_AEROSOL_REGIONS_STUDIED,
  STREAMFLOW_RECORD_YEARS,
  ZHU_2025_CITATION,
} from "./constants.ts";

/**
 * Cascade stage of an evidence entry.
 * - onset: fire-season timing shift
 * - precipitation: smoke / SST moisture intensification
 * - amplification: post-fire / channel / sealing flood amplifiers
 */
export type Stance = "onset" | "precipitation" | "amplification";

export type EvidenceEntry = {
  id:
    | "fan2026"
    | "madakumbura2025"
    | "zhu2025"
    | "calvo2026"
    | "kang2025"
    | "hawker2026"
    | "azadgar2026";
  label: string;
  stance: Stance;
  citation: string;
};

export const ALL_EVIDENCE: readonly EvidenceEntry[] = [
  {
    id: "fan2026",
    label: "Fan et al. 2026 (regionally divergent fire-season timing)",
    stance: "onset",
    citation: FAN_2026_CITATION,
  },
  {
    id: "madakumbura2025",
    label: "Madakumbura et al. 2025 (California onset advance)",
    stance: "onset",
    citation: MADAKUMBURA_2025_CITATION,
  },
  {
    id: "zhu2025",
    label: "Zhu et al. 2025 (smoke-aerosol precipitation invigoration)",
    stance: "precipitation",
    citation: ZHU_2025_CITATION,
  },
  {
    id: "calvo2026",
    label: "Calvo-Sancho et al. 2026 (Valencia SST moisture attribution)",
    stance: "precipitation",
    citation: CALVO_SANCHO_2026_CITATION,
  },
  {
    id: "kang2025",
    label: "Kang et al. 2025 (post-megafire flood probability)",
    stance: "amplification",
    citation: KANG_2025_CITATION,
  },
  {
    id: "hawker2026",
    label: "Hawker et al. 2026 (channel/floodplain underestimation)",
    stance: "amplification",
    citation: HAWKER_2026_CITATION,
  },
  {
    id: "azadgar2026",
    label: "Azadgar et al. 2026 (urban sealing / land-take)",
    stance: "amplification",
    citation: AZADGAR_2026_CITATION,
  },
];

export function onsetEvidence(): readonly EvidenceEntry[] {
  return ALL_EVIDENCE.filter((e) => e.stance === "onset");
}

export function precipitationEvidence(): readonly EvidenceEntry[] {
  return ALL_EVIDENCE.filter((e) => e.stance === "precipitation");
}

export function amplificationEvidence(): readonly EvidenceEntry[] {
  return ALL_EVIDENCE.filter((e) => e.stance === "amplification");
}

/** Structural: more than one cascade stage present among ALL_EVIDENCE. */
export function hasMultipleCascadeStages(): boolean {
  const stages = new Set(ALL_EVIDENCE.map((e) => e.stance));
  return stages.size > 1;
}

export function fireSeasonShiftByBiome(): Record<string, string> {
  return { ...FIRE_SEASON_SHIFT_BY_BIOME };
}

/** Fan et al. honesty: biomes do not all shift in the same direction. */
export function isShiftDirectionUniformGlobally(): boolean {
  const directions = new Set(Object.values(FIRE_SEASON_SHIFT_BY_BIOME));
  return directions.size <= 1;
}

export function californiaOnsetAdvanceRangeDays(): readonly [number, number] {
  return [CALIFORNIA_ONSET_ADVANCE_MIN_DAYS, CALIFORNIA_ONSET_ADVANCE_MAX_DAYS];
}

export function californiaEcoregionsAffectedFraction(): number {
  return CALIFORNIA_ECOREGIONS_AFFECTED / CALIFORNIA_ECOREGIONS_TOTAL;
}

export function californiaStudyPeriod(): readonly [number, number] {
  return CALIFORNIA_STUDY_PERIOD;
}

export function regionsStudiedCount(): number {
  return SMOKE_AEROSOL_REGIONS_STUDIED;
}

export function doesSmokeDelayPrecipitationOnset(): boolean {
  return true;
}

/** Zhu et al.: effect studied across regions, not a universal coefficient. */
export function isEffectClaimedGloballyUniform(): boolean {
  return false;
}

export function hourlyRainfallIntensityIncreasePctPerDegc(): number {
  return HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC;
}

export function exceedsClausiusClapeyronScaling(): boolean {
  return (
    HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC >
    CLAUSIUS_CLAPEYRON_BASELINE_PCT_PER_DEGC
  );
}

export function mechanismBreakdownPct(): Record<string, number> {
  return { ...MECHANISM_BREAKDOWN_PCT };
}

export function eventNameAndDate(): string {
  return "Valencia flash flood, October 2024";
}

export function sixHourRainfallRateIncreasePct(): number {
  return SIX_HOUR_RAINFALL_RATE_INCREASE_PCT;
}

export function areaAbove180mmRainfallIncreasePct(): number {
  return AREA_ABOVE_180MM_RAINFALL_INCREASE_PCT;
}

export function catchmentRainfallVolumeIncreasePct(): number {
  return CATCHMENT_RAINFALL_VOLUME_INCREASE_PCT;
}

export function preFireFloodProbability(): number {
  return PRE_FIRE_FLOOD_PROBABILITY;
}

export function postMegafireFloodProbability(): number {
  return POST_MEGAFIRE_FLOOD_PROBABILITY;
}

export function floodProbabilityIncreaseFactor(): number {
  return POST_MEGAFIRE_FLOOD_PROBABILITY / PRE_FIRE_FLOOD_PROBABILITY;
}

/** Kang et al.: canopy/litter interception loss, NOT soil hydrophobicity. */
export function isMechanismSoilHydrophobicity(): boolean {
  return false;
}

export function megafireYearsStudied(): readonly number[] {
  return MEGAFIRE_YEARS_STUDIED;
}

export function streamflowRecordLengthYears(): number {
  return STREAMFLOW_RECORD_YEARS;
}

export function floodExtentUnderestimationRangePct(): readonly [number, number] {
  return FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT;
}

export function populationExposureUnderestimationRangePct(): readonly [
  number,
  number,
] {
  return POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT;
}

export function isChannelChangeEffectComparableToClimateChange(): boolean {
  return true;
}

export function studyAreaSqMiles(): number {
  return HAWKER_STUDY_AREA_SQ_MILES;
}

export function citiesStudied(): readonly string[] {
  return SEALING_CITIES_STUDIED;
}

export function sealingStudyPeriod(): readonly [number, number] {
  return SEALING_STUDY_PERIOD;
}

export function indexNames(): readonly [string, string] {
  return SEALING_INDEX_NAMES;
}

export function doesLandTakeReduceStormwaterRetentionCapacity(): boolean {
  return true;
}

export function combinedCascadeDescription(): string {
  return CASCADE_LINKS.join(" -> ");
}

/**
 * Headline honesty check from synthesis_hypothesis.py:
 * no single paper studies the full combined causal chain as one system.
 */
export function isCombinedCascadeADirectlyStudiedSingleSystem(): boolean {
  return false;
}

export function componentMechanismsIndependentlyVerified(): boolean {
  return true;
}

export function numberOfCascadeLinks(): number {
  return CASCADE_LINKS.length;
}

export function glacierBufferCrossReference(): string {
  return (
    `${GLACIER_BUFFER_CROSS_REFERENCE_PACKAGE} ` +
    `(GenesisAeon P${GLACIER_BUFFER_CROSS_REFERENCE_PACKAGE_ID}, ` +
    `${GLACIER_BUFFER_CROSS_REFERENCE_CITATION}) documents glacier ` +
    "peak-water/buffer loss as a regional flood-severity amplifier " +
    "-- not re-derived in this package."
  );
}
