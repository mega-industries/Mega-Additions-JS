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

const hole = extend(ItemTurret, "w-hole", {});

const refractLaser = extend(LaserBulletType, {
  	length: 173,
  	colors: [Color.valueOf("ff7272"), Color.valueOf("ff7272"), Color.white],
  	damage: 175,
  	hitSize: 4,
  	drawSize: 400,
  	lifetime: 25,
  	sideAngle: 20,
  	width: 32,
});
const refract = extend(PowerTurret, "w-refraction", {
  load() {
          this.super$load()
	  this.region = Core.atlas.find(this.name);
          this.rainbowRegion = Core.atlas.find(this.name + "-rainbow");
	  this.baseRegion = Core.atlas.find("block-" + this.size);
  },
  shootType: refractLaser,
  range: 165,
});
refract.buildType = () => extend(PowerTurret.PowerTurretBuild, refract,  {
  draw() {
	  Draw.rect(refract.baseRegion, this.x, this.y, 0);
	  Draw.rect(refract.region, this.x, this.y, this.rotation - 90);
	  Draw.color(Color.valueOf("ff7272").shiftHue(Time.time * 2.3));
          Draw.rect(refract.rainbowRegion, this.x, this.y, this.rotation - 90);
          Draw.color()
  }
});

const prismBolt = extend(BasicBulletType, {
	sprite: "circle-bullet",
  	width: 1,
  	length: 1,
	shrinkY: 0,
  	damage: 80,
	speed: 4.6,
	lifetime: 43,
	draw(b){
		Draw.color(Color.valueOf("ff7272").shiftHue(Time.time * 2.3));
		Fill.poly(b.x, b.y, 20, 3);
		Draw.reset();
	}
});
const prism = extend(PowerTurret, "w-prism", {
  load() {
          this.super$load()
	  this.rainbowRegions = [];
	  
	  this.region = Core.atlas.find(this.name);
          this.rainbowRegion = Core.atlas.find(this.name + "-rainbow");
	  this.baseRegion = Core.atlas.find("block-" + this.size);
	  for(var i = 0; i < 6; i++){
      		this.rainbowRegions[i] = Core.atlas.find(this.name + "-rainbow-" + i);
    	}
  },
  shootType: prismBolt,
  range: 190,
});
prism.buildType = () => extend(PowerTurret.PowerTurretBuild, prism,  {
	frame: 0,
	frameTimer: 10,
  draw() {
	  Draw.rect(prism.baseRegion, this.x, this.y, 0);
	  Draw.rect(prism.region, this.x, this.y, this.rotation - 90);
	  Draw.blend(Blending.additive);
          if(this.frameTimer >= 20){
		  this.frame += 1
		  this.frameTimer = 0
		  
		  if(this.frame == 6){
			  this.frame = 0
		  }
	  }else{
		  if(this.frameTimer < 20){this.frameTimer += 1} 
	  }
	  Draw.color(Color.valueOf("ff7272").shiftHue(Time.time * 2.3));
          Draw.rect(prism.rainbowRegions[this.frame], this.x, this.y, this.rotation - 90);
	  Draw.blend();
          Draw.color()
  }
});

const mirageLaser = extend(LaserBulletType, {
  	length: 173,
  	colors: [Color.valueOf("ff7272"), Color.valueOf("ff7272"), Color.white],
  	damage: 175,
  	hitSize: 4,
  	drawSize: 400,
  	lifetime: 45,
  	sideAngle: 20,
  	width: 55,
});
const mirage = extend(PowerTurret, "w-mirage", {
  load() {
          this.super$load()
	  this.region = Core.atlas.find(this.name);
          this.rainbowRegion = Core.atlas.find(this.name + "-rainbow");
	  this.baseRegion = Core.atlas.find("block-" + this.size);
  },
  shootType: mirageLaser,
  range: 165,
});
mirage.buildType = () => extend(PowerTurret.PowerTurretBuild, mirage,  {
  draw() {
	  Draw.rect(mirage.baseRegion, this.x, this.y, 0);
	  Draw.rect(mirage.region, this.x, this.y, this.rotation - 90);
	  Draw.color(Color.valueOf("ff7272").shiftHue(Time.time * 2.3));
          Draw.rect(mirage.rainbowRegion, this.x, this.y, this.rotation - 90);
          Draw.color()
  }
});

const hexBullet = extend(BasicBulletType, {
	update(b){
		if(Mathf.chance(0.77)){
			Sounds.spark.at(b);
			Lightning.create(b, Color.valueOf("ff7272").shiftHue(Time.time * 2.3), 12, b.x, b.y, Mathf.random(360), 4);
		}
	},
	
	draw(b){
		Draw.color(Color.valueOf("ff7272").shiftHue(Time.time * 2.3));
		Fill.poly(b.x, b.y, 6, 6);
		Draw.reset();
	}
});
hexBullet.speed = 4.6;
hexBullet.damage = 9;
hexBullet.lifetime = 43;
hexBullet.hitSize = 21;
hexBullet.despawnEffect = Fx.none;
hexBullet.shootEffect = Fx.none;
hexBullet.collides = true;
hexBullet.collidesTiles = false;
hexBullet.pierce = true;
const hex = extend(PowerTurret, "w-hex", {
  load() {
          this.super$load()
	  this.region = Core.atlas.find(this.name);
          this.rainbowRegion = Core.atlas.find(this.name + "-rainbow");
	  this.baseRegion = Core.atlas.find("block-" + this.size);
  },
  shootType: hexBullet,
  range: 190,
});
hex.buildType = () => extend(PowerTurret.PowerTurretBuild, hex,  {
  draw() {
	  Draw.rect(hex.baseRegion, this.x, this.y, 0);
	  Draw.rect(hex.region, this.x, this.y, this.rotation - 90);
	  Draw.color(Color.valueOf("ff7272").shiftHue(Time.time * 2.3));
          Draw.rect(hex.rainbowRegion, this.x, this.y, this.rotation - 90);
          Draw.color()
  }
});
