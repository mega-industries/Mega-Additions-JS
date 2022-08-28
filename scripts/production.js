const effects = require("libs/effects");
const palette = require("libs/palette");

const magDrill = extend(Drill, "magnetic-drill", {
  updateEffect: effects.magneticDrillUpdate,
  updateEFfectChance: 0.05,
  drillEffect: Fx.none,
});

const scrapFilter = extend(GenericCrafter, "scrap-filter", {
  updateEffect: Fx.hitLaser,
  updateEffectChance: 0.04,
});
