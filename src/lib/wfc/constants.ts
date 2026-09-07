/**
 * Real, independently verified constants for wildfire-flood-cascade-utac (P121).
 * Ported 1:1 from src/wildfire_flood_cascade_utac/constants.py (package v1.0.1).
 * Deliberately has NO UTAC/CREP/AFET bridge. See DISCLAIMER.md.
 * No invented numbers, Gamma, or DOIs.
 */

export const PACKAGE_ID = 121;
export const SOURCE_VERSION = "1.0.1";

export const FAN_2026_CITATION =
  "Fan, S., Tao, W., Zhang, Y., Shindell, D., Zhang, Y. (2026). " +
  "\"Regionally divergent shifts in global fire season timing under recent warming\". " +
  "Geophysical Research Letters. DOI: 10.1029/2025GL121153.";

export const FAN_2026_DOI = "10.1029/2025GL121153";

export const FIRE_SEASON_SHIFT_BY_BIOME = {
  boreal_taiga: "earlier onset (earlier snowmelt)",
  mediterranean_desert: "delayed onset, extended late season",
  prairie_humid: "muted / weak signal",
} as const;

export const MADAKUMBURA_2025_CITATION =
  "Madakumbura, G.D., et al. (2025). " +
  "\"Advancing fire season onset across California ecoregions\". " +
  "Science Advances. DOI: 10.1126/sciadv.adt2041.";

export const MADAKUMBURA_2025_DOI = "10.1126/sciadv.adt2041";

export const CALIFORNIA_ONSET_ADVANCE_MIN_DAYS = 6;
export const CALIFORNIA_ONSET_ADVANCE_MAX_DAYS = 46;
export const CALIFORNIA_ECOREGIONS_AFFECTED = 11;
export const CALIFORNIA_ECOREGIONS_TOTAL = 13;
export const CALIFORNIA_STUDY_PERIOD = [1992, 2020] as const;

export const ZHU_2025_CITATION =
  "Zhu, H., Zhao, H., Yang, S., et al. (2025). " +
  "\"Wildfire smoke aerosols invigorate precipitation across fire-impacted regions\". " +
  "npj Climate and Atmospheric Science, 8, 170. DOI: 10.1038/s41612-025-01047-3.";

export const ZHU_2025_DOI = "10.1038/s41612-025-01047-3";

export const SMOKE_AEROSOL_REGIONS_STUDIED = 5;

export const CALVO_SANCHO_2026_CITATION =
  "Calvo-Sancho, C., Diaz-Fernandez, J., Gonzalez-Aleman, J.J., et al. (2026). " +
  "\"Anthropogenic warming intensified the October 2024 Valencia flash-flood rainfall\". " +
  "Nature Communications. DOI: 10.1038/s41467-026-68929-9.";

export const CALVO_SANCHO_2026_DOI = "10.1038/s41467-026-68929-9";

export const HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC = 20.0;
export const SIX_HOUR_RAINFALL_RATE_INCREASE_PCT = 21.0;
export const AREA_ABOVE_180MM_RAINFALL_INCREASE_PCT = 55.0;
export const CATCHMENT_RAINFALL_VOLUME_INCREASE_PCT = 19.0;
export const CLAUSIUS_CLAPEYRON_BASELINE_PCT_PER_DEGC = 7.0;

export const MECHANISM_BREAKDOWN_PCT = {
  convective_updrafts: 11.9,
  latent_heat_release: 29.5,
  graupel: 32.4,
  precipitation_efficiency: 12.6,
} as const;

export const KANG_2025_CITATION =
  "Kang, T-H., et al. (2025). " +
  "\"Interception reduction from deforestation and forest fire increases large-scale fluvial flooding risk\". " +
  "Communications Earth & Environment. DOI: 10.1038/s43247-025-02748-6.";

export const KANG_2025_DOI = "10.1038/s43247-025-02748-6";

export const PRE_FIRE_FLOOD_PROBABILITY = 0.016;
export const POST_MEGAFIRE_FLOOD_PROBABILITY = 0.127;
export const MEGAFIRE_YEARS_STUDIED = [2003, 2007, 2009] as const;
export const STREAMFLOW_RECORD_YEARS = 50;

export const HAWKER_2026_CITATION =
  "Hawker, L., Darby, S., Slater, L., et al. (2026). " +
  "\"River channel change can affect flood hazard and impact substantially\". " +
  "Communications Earth & Environment. DOI: 10.1038/s43247-026-03517-9.";

export const HAWKER_2026_DOI = "10.1038/s43247-026-03517-9";

export const FLOOD_EXTENT_UNDERESTIMATION_RANGE_PCT = [9.0, 152.0] as const;
export const POPULATION_EXPOSURE_UNDERESTIMATION_RANGE_PCT = [15.0, 472.0] as const;
export const HAWKER_STUDY_AREA_SQ_MILES = 52000;

export const AZADGAR_2026_CITATION =
  "Azadgar, A., Benedini, A., Salata, S., Lacoere, P., Badach, J., Nyka, L. (2026). " +
  "\"Flood-sensitive land take (FSL) analysis: A new way to read how urban sealing shapes flood risk\". " +
  "Journal of Environmental Management. DOI: 10.1016/j.jenvman.2026.129513.";

export const AZADGAR_2026_DOI = "10.1016/j.jenvman.2026.129513";

export const SEALING_CITIES_STUDIED = ["Gdansk", "Milan", "Ghent", "Oslo"] as const;
export const SEALING_STUDY_PERIOD = [2012, 2018] as const;
export const SEALING_INDEX_NAMES = ["WASI", "NWASI"] as const;

export const GLACIER_BUFFER_CROSS_REFERENCE_PACKAGE = "glacier-buffer-utac";
export const GLACIER_BUFFER_CROSS_REFERENCE_PACKAGE_ID = 99;
export const GLACIER_BUFFER_CROSS_REFERENCE_CITATION = "Huss & Hock (2018)";

export const CASCADE_LINKS = [
  "earlier fire-season onset (regionally divergent, not global)",
  "smoke-aerosol precipitation invigoration",
  "warmer SST -> more available moisture -> heavier rain",
  "post-fire canopy/litter interception loss -> higher flood risk",
  "degraded river channel / lost floodplain capacity",
  "large-scale settlement-area sealing",
  "glacier-buffer loss (regional, cross-referenced, not re-derived here)",
] as const;
