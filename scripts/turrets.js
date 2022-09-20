const effects = require("libs/effects");
const palette = require("libs/palette");
const bullets = require("libs/bullets");

const point = extend(ItemTurret, "r-point", {});

const direction = extend(ItemTurret, "r-direction", {
	load() {
          this.super$load()
	  this.a = 0.0
	},
	setBars(){
		this.super$setBars();
		this.addBar("shootSpeed", entity => new Bar(
			() => Core.bundle.get("stat.mega-adds.shootspeed") + " " + (this.a * 100) + "%", 
			() => Pal.powerBar, 
			() => 1
		));
	},
});
direction.buildType = () => extend(ItemTurret.ItemTurretBuild, direction, {
    updateTile(){
        	this.super$updateTile();
        	if(this.isShooting() && this.hasAmmo()){
            		direction.a = Mathf.clamp(direction.a + 0.007, 0.1, 5)
        	}else{
            		direction.a = Mathf.clamp(direction.a - 0.015, 0.1, 5)
        	};
    	},
    	baseReloadSpeed() {
        	return this.efficiency * direction.a;
    	},
});

const line = extend(PowerTurret, "r-line", {});

const angle = extend(PowerTurret, "r-angle", {
  shootSound: Sounds.malignShoot,
  shootType: bullets.angleBullet,
});

const vector = extend(PowerTurret, "r-vector", {});

const bolt = extend(PowerTurret, "b-bolt", {});

const blitz = extend(PowerTurret, "b-blitz", {});

const blast = extend(PowerTurret, "b-blast", {});

const volt = extend(PowerTurret, "b-volt", {});

const bit = extend(PowerTurret, "b-bit", {
	shootType: bullets.bitBullet,
	range: 140,
	rotateSpeed: Infinity,
});
bit.buildType = () => extend(PowerTurret.PowerTurretBuild, bit,  {
	previousRot: 90,
  updateTile() {
	  this.super$updateTile();
	  this.previousRot = this.rotation;
	  this.rotation = Mathf.round(this.previousRot / 45.0) * 45;
  }
});

const power = extend(PowerTurret, "b-power", {});

const pulsar = extend(ContinuousTurret, "b-pulsar", {
  	shootType: bullets.pulsarLaser,
	range: 200,
});

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

const ditch = extend(ItemTurret, "w-ditch", {
	shootEffect: effects.whiteShoot,
	heatColor: palette.red,
});

const space = extend(PowerTurret, "w-space", {
	shootEffect: effects.whiteShoot,
	shootType: bullets.spaceBolt,
	range: 190,
});
space.shoot.firstShotDelay = effects.whiteCharge.lifetime;

const artifact = extend(ItemTurret, "w-artifact", {
	shootEffect: effects.whiteShoot,
});

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
		Fill.circle(b.x, b.y, 3);
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
	  for(let i = 0; i < 6; i++){
      		this.rainbowRegions[i] = Core.atlas.find(this.name + "-rainbow-" + i);
    	}
  },
  shootType: prismBolt,
  range: 190,
});
prism.buildType = () => extend(PowerTurret.PowerTurretBuild, prism,  {
	frame: 0,
	frameTimer: 0,
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
		if(Mathf.chance(0.8)){
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
	  this.rainbowRegions = [];
	  this.region = Core.atlas.find(this.name);
	  this.baseRegion = Core.atlas.find("block-" + this.size);
	  for(let i = 0; i < 11; i++){
      		this.rainbowRegions[i] = Core.atlas.find(this.name + "-rainbow-" + i);
    	}
  },
  shootType: hexBullet,
  range: 190,
});
hex.buildType = () => extend(PowerTurret.PowerTurretBuild, hex,  {
	frame: 0,
	frameTimer: 0,
  draw() {
	  Draw.rect(hex.baseRegion, this.x, this.y, 0);
	  Draw.rect(hex.region, this.x, this.y, this.rotation - 90);
	  Draw.blend(Blending.additive);
          if(this.frameTimer >= 20){
		  this.frame += 1
		  this.frameTimer = 0
		  
		  if(this.frame == 11){
			  this.frame = 0
		  }
	  }else{
		  if(this.frameTimer < 20){this.frameTimer += 1} 
	  }
	  Draw.color(Color.valueOf("ff7272").shiftHue(Time.time * 2.3));
          Draw.rect(hex.rainbowRegions[this.frame], this.x, this.y, this.rotation - 90);
	  Draw.blend();
          Draw.color()
  }
});
const blank = extend(PowerTurret, "w-blank", {
  	shootType: bullets.blankBullet,
  	range: 190,
	shootEffect: effects.blackFlare,
	load() {
		this.super$load();
		this.region = Core.atlas.find(this.name);
	  	this.baseRegion = Core.atlas.find("block-" + this.size);
	},
});
blank.buildType = () => extend(PowerTurret.PowerTurretBuild, blank,  {
  updateTile() {
  	  this.super$updateTile();
	  if(Mathf.chance(0.22)){
            effects.blackCloudOut.at(this.x, this.y);
        };
  },
	draw() {
	Draw.rect(blank.baseRegion, this.x, this.y, 0);
	  Draw.rect(blank.region, this.x, this.y, this.rotation - 90);
	Draw.color(palette.darkGray);
	  for(let i = 0; i < 5; i++){
		  Lines.arc(this.x, this.y, 12, 0.14, i * 360/5 + Time.time * 1.3);
	  };
	Draw.color()
},
});

const electron = extend(ItemTurret, "y-electron", {
	shootEffect: effects.electronShoot,
});

const photon = extend(PowerTurret, "y-photon", {
	shootEffect: effects.electronShoot,
	shootType: bullets.photonOrb,
	range: 190,
});

const surge = extend(ItemTurret, "y-surge", {
	shootEffect: effects.cannonShoot,
});
