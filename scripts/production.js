const effects = require("libs/effects");

const magDrill = extend(Drill, "magnetic-drill", {
  updateEffect: effects.magneticDrillUpdate,
  updateEFfectChance: 0.05,
  drillEffect: Fx.none,
});
