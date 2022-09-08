const effects = require("libs/effects");
const palette = require("libs/palette");

exports.angleBullet = extend(EmpBulletType, {
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
  });

exports.blankBullet = extend(BasicBulletType, {
    lifetime: 70,
    damage: 75,
    areaDamage: 45,
    areaDamageRadius: 30,
    speed: 2.5,
    sprite: "circle-bullet",
    hitSound: Sounds.dullExplosion,
    trailWidth: 3,
    trailLength: 15,
    trailColor: palette.darkGray,
    hitEffect: Fx.none,
    despawnEffect: Fx.none,
    despawnHit: true,
    lightColor: palette.darkGray,
    trailEffect: effects.blackFlare,
    trailInterval: 5,
    trailRotation: true,
    draw(b){
        Draw.color(palette.darkGray)
        Draw.rect(Core.atlas.find("circle-bullet-back"), b.x, b.y, 6, 6, 0);
        for(let i = 0; i < 5; i++){
		  Lines.arc(this.x, this.y, 7, 0.14, i * 360/5 + Time.time * 1.3);
	  };
    }
  });
