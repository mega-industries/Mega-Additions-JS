const effects = require("libs/effects");
const palette = require("libs/palette");

const point = extend(ItemTurret, "r-point", {});

const line = extend(PowerTurret, "r-line", {});

const angle = extend(PowerTurret, "r-angle", {
  shootSound: Sounds.malignShoot,
  shootType: extend(EmpBulletType, {
    scaleLife: true,
    lifetime: 40,
    damage: 60,
    areaDamage: 75,
    areaDamageRadius: 60,
    radius: 60,
    timeIncrease: 0,
    timeDuration: 0,
    speed: 5,
    width: 6,
    height: 6,
    sprite: "circle-bullet",
    hitSound: Sounds.plasmaboom,
    shrinkY: 0,
    trailWidth: 3,
    trailLength: 15,
    trailColor: palette.red,
    backColor: palette.red,
    frontColor: Color.white,
    hitEffect: effects.angleBlast,
    despawnEffect: Fx.none,
    despawnHit: true,
    lightColor: palette.red,
    hitColor: palette.red,
    trailEffect: effects.redFlare,
    trailInterval: 3,
    trailRotation: true,
  }),
});

const vector = extend(PowerTurret, "r-vector", {});

const bolt = extend(PowerTurret, "b-bolt", {});

const blitz = extend(PowerTurret, "b-blitz", {});

const blast = extend(PowerTurret, "b-blast", {});

const volt = extend(PowerTurret, "b-volt", {});

const power = extend(PowerTurret, "b-power", {});

const burst = extend(ItemTurret, "p-burst", {});

const gamma = extend(ItemTurret, "p-gamma", {});

const reboot = extend(PowerTurret, "g-reboot", {});

const revamp = extend(PowerTurret, "g-revamp", {
  shootEffect: effects.greenFlare,
});

const dimension = extend(ItemTurret, "g-dimension", {
  shootEffect: effects.greenFlare,
  smokeEffect: effects.greenTurretSmoke,
});

const sword = extend(ItemTurret, "g-sword", {});

const battleaxe = extend(ItemTurret, "g-battleaxe", {});

const crack = extend(ItemTurret, "crack", {});
crack.coolant = new ConsumeLiquid(Liquids.water, 0.06).update = false;
