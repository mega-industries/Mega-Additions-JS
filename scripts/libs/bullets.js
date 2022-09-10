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
    hitEffect: Fx.none,
    despawnEffect: Fx.none,
    despawnHit: true,
    lightColor: palette.darkGray,
    draw(b){
        Draw.color(palette.darkGray)
        Fill.circle(b.x, b.y, 3.5)
        for(let i = 0; i < 5; i++){
		  Lines.arc(b.x, b.y, 7, 0.14, i * 360/5 + Time.time * 1.3);
	  };
    }
  });

exports.pulsarLaser = extend(PointLaserBulletType, {
	drawSize: 1500,
	sprite: "parallax-laser",
	damage: 700,
	beamEffect: new MultiEffect(effects.blueCloud, new WrapEffect(Fx.colorTrail, Pal.lancerLaser)),
	status: StatusEffects.shocked,
	statusDuration: 100,
  });

exports.photonOrb = extend(MissileBulletType, {
	weaveScl: 0,
	weaveMag: 0,
	homingPower: 0.09,
    lifetime: 45,
    damage: 55,
    speed: 4.5,
    hitEffect: Fx.none,
    despawnEffect: Fx.none,
    despawnHit: true,
    lightColor: palette.yellow,
	spin: 3,
	trailRotation: true,
	trailEffect: effects.photonTrail,
	trailInterval: 0.5,
	hitSound: Sounds.none,
    draw(b){
        Draw.color(Color.white)
        Drawf.tri(b.x, b.y, 6, 6, b.rotation);
    }
  });
