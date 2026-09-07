import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  ALL_EVIDENCE,
  CALIFORNIA_ONSET_ADVANCE_MAX_DAYS,
  CALIFORNIA_ONSET_ADVANCE_MIN_DAYS,
  CLAUSIUS_CLAPEYRON_BASELINE_PCT_PER_DEGC,
  FAN_2026_DOI,
  HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC,
  PACKAGE_ID,
  POST_MEGAFIRE_FLOOD_PROBABILITY,
  PRE_FIRE_FLOOD_PROBABILITY,
  SOURCE_VERSION,
  componentMechanismsIndependentlyVerified,
  exceedsClausiusClapeyronScaling,
  floodProbabilityIncreaseFactor,
  hasMultipleCascadeStages,
  isChannelChangeEffectComparableToClimateChange,
  isCombinedCascadeADirectlyStudiedSingleSystem,
  isEffectClaimedGloballyUniform,
  isMechanismSoilHydrophobicity,
  isShiftDirectionUniformGlobally,
  numberOfCascadeLinks,
} from "./index.ts";

describe("wildfire-flood-cascade P121 port", () => {
  it("keeps package identity", () => {
    assert.equal(PACKAGE_ID, 121);
    assert.equal(SOURCE_VERSION, "1.0.1");
    assert.equal(FAN_2026_DOI, "10.1029/2025GL121153");
  });

  it("keeps seven paper evidence entries across three stages", () => {
    assert.equal(ALL_EVIDENCE.length, 7);
    assert.equal(hasMultipleCascadeStages(), true);
    assert.equal(numberOfCascadeLinks(), 7);
  });

  it("keeps synthesis honesty checks", () => {
    assert.equal(isCombinedCascadeADirectlyStudiedSingleSystem(), false);
    assert.equal(componentMechanismsIndependentlyVerified(), true);
  });

  it("keeps structural module honesty checks", () => {
    assert.equal(isShiftDirectionUniformGlobally(), false);
    assert.equal(isMechanismSoilHydrophobicity(), false);
    assert.equal(isEffectClaimedGloballyUniform(), false);
    assert.equal(exceedsClausiusClapeyronScaling(), true);
    assert.equal(isChannelChangeEffectComparableToClimateChange(), true);
  });

  it("keeps key numbers 1:1", () => {
    assert.equal(CALIFORNIA_ONSET_ADVANCE_MIN_DAYS, 6);
    assert.equal(CALIFORNIA_ONSET_ADVANCE_MAX_DAYS, 46);
    assert.equal(HOURLY_RAINFALL_INTENSITY_INCREASE_PCT_PER_DEGC, 20.0);
    assert.equal(CLAUSIUS_CLAPEYRON_BASELINE_PCT_PER_DEGC, 7.0);
    assert.equal(PRE_FIRE_FLOOD_PROBABILITY, 0.016);
    assert.equal(POST_MEGAFIRE_FLOOD_PROBABILITY, 0.127);
    assert.ok(floodProbabilityIncreaseFactor() > 7);
  });
});
