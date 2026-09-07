import {
  exceedsClausiusClapeyronScaling,
  isChannelChangeEffectComparableToClimateChange,
  isCombinedCascadeADirectlyStudiedSingleSystem,
  isEffectClaimedGloballyUniform,
  isMechanismSoilHydrophobicity,
  isShiftDirectionUniformGlobally,
} from "@/lib/wfc";
import { useLocale } from "@/lib/i18n/locale";
import { keyNumbersForLocale } from "@/lib/i18n/messages";

export function KeyNumbers() {
  const { t } = useLocale();
  const numbers = keyNumbersForLocale(t);

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{t.numbersHeading}</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {numbers.map((n) => (
          <div key={n.id} className="rounded-lg bg-elevated p-3">
            <p className="text-2xs font-medium uppercase tracking-[0.12em] text-subtle">
              {n.label}
            </p>
            <p className="mt-1 font-mono text-lg tabular-nums text-fg">{n.value}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-6 text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
        {t.honestyHeading}
      </h3>
      <ul className="mt-3 space-y-2 font-mono text-xs text-muted">
        <li>
          is_combined_cascade_a_directly_studied_single_system() ={" "}
          <span className="text-accent">
            {String(isCombinedCascadeADirectlyStudiedSingleSystem())}
          </span>
        </li>
        <li>
          is_shift_direction_uniform_globally() ={" "}
          <span className="text-accent">
            {String(isShiftDirectionUniformGlobally())}
          </span>
        </li>
        <li>
          is_mechanism_soil_hydrophobicity() ={" "}
          <span className="text-accent">
            {String(isMechanismSoilHydrophobicity())}
          </span>
        </li>
        <li>
          is_effect_claimed_globally_uniform() ={" "}
          <span className="text-accent">
            {String(isEffectClaimedGloballyUniform())}
          </span>
        </li>
        <li>
          exceeds_clausius_clapeyron_scaling() ={" "}
          <span className="text-accent">
            {String(exceedsClausiusClapeyronScaling())}
          </span>
        </li>
        <li>
          is_channel_change_effect_comparable_to_climate_change() ={" "}
          <span className="text-accent">
            {String(isChannelChangeEffectComparableToClimateChange())}
          </span>
        </li>
      </ul>
    </section>
  );
}
