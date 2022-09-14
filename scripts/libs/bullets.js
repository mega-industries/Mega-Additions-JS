const effects = require("libs/effects");
const palette = require("libs/palette");
//const spearBLib = require("libs/bulletTypes/SpearBulletType");

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
	damage: 375,
	beamEffect: effects.blueCloud,
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
	trailRotation: true,
	trailEffect: effects.photonTrail,
	trailInterval: 0.5,
	hitSound: Sounds.none,
    draw(b){
        Draw.color(Color.white)
	    Draw.z(Layer.bullet);
	    
        Drawf.tri(b.x, b.y, 6, 6, b.rotation);
    }
});

exports.bitBullet = extend(BasicBulletType, {
	homingPower: 0.13,
	lifetime: 90,
	speed: 2,
	damage: 15,
	splashDamage: 35,
	splashDamageRadius: 40,
	hitSize: 8,
	trailEffect: effects.bitTrail,
	hitEffect: effects.bitBurst,
	despawnEffect: Fx.none,
	hitSound: Sounds.dullExplosion,
	trailInterval: 3.5,
	draw(b){
		Draw.color(Pal.lancerLaser);
		Draw.z(Layer.bullet);
		
		Fill.rect(b.x, b.y, 8, 8);
	},
});

const spaceFrag = extend(MissileBulletType, {
	weaveScl: 0,
	weaveMag: 0,
	homingPower: 0.08,
	speed: 6,
	lifetime: 20,
	damage: 45,
	hitEffect: effects.smallImplode,
	despawnEffect: Fx.none,
	despawnHit: true,
	trailRotation: true,
	trailEffect: effects.spaceTrail,
	trailInterval: 0.5,
	lightColor: palette.black,
	hitSound: Sounds.lasercharge2,
	draw(b){
        Draw.color(Color.white);
		Draw.z(Layer.bullet);
		
        Drawf.tri(b.x, b.y, 8, 8, b.rotation);
    }
});

exports.spaceBolt = extend(MissileBulletType, {
	weaveScl: 0,
	weaveMag: 0,
	homingPower: 0.011,
    lifetime: 45,
    damage: 135,
    speed: 4.5,
	pierce: true,
	fragOnHit: false,
	fragBullets: 6,
	fragBullet: spaceFrag,
    hitEffect: effects.smallImplode,
    despawnEffect: effects.largeImplode,
    despawnHit: false,
    lightColor: palette.black,
	trailRotation: true,
	trailEffect: effects.spaceTrail,
	trailInterval: 0.5,
	hitSound: Sounds.lasercharge2,
	chargeEffect: effects.whiteCharge,
    draw(b){
        Draw.color(Color.white);
	    Draw.z(Layer.bullet);
	    
        Drawf.tri(b.x, b.y, 8, 8, b.rotation);
    }
});

exports.polarisSpear = extend(BasicBulletType, {
	speed: 3,
	lifetime: 60,
	damage: 65,
	pierce: true,
	pierceCap: 3,
	draw(b){
      		Draw.color(palette.yellow);
      		Draw.z(Layer.bullet);
      
     		 Drawf.tri(b.x, b.y, 4, 12, b.rotation - 180);
      		Drawf.tri(b.x, b.y, 2, 6, b.rotation - 180 - 13);
      		Drawf.tri(b.x, b.y, 2, 6, b.rotation - 180 + 13);
    	},
});
