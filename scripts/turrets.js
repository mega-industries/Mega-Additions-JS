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

const refractLaser = extend(BasicBulletType, {
	
	update: function(b){
		const trnsB = new Vec2();
		const trnsC = new Vec2();
		
		if(b.timer.get(1, 5)){
			Damage.collideLine(b, b.getTeam(), this.hitEffect, b.x, b.y, b.rot(), 245.0, true);
		};
		if(Mathf.chance(0.9)){
			trnsB.trns(b.rot(), Mathf.random(0.5, 240.0), Mathf.range(7.0));
			//trnsC.trns(b.rot() + 90, Mathf.range(7.0));
			Effects.effect(rainbowLaserEffect, b.x + trnsB.x, b.y + trnsB.y, b.rot());
		}
	},
	
	draw: function(b){
		
		const colors = [Color.valueOf("ff000044"), Color.valueOf("ff000099"), Color.valueOf("ff3333"), Color.valueOf("ffffff")];
		const tscales = [1.4, 1.0, 0.9, 0.55];
		const strokes = [1.8, 1.4, 1.04, 0.6];
		const lenscales = [1.0, 1.16, 1.20, 1.23];
		const tmpColor = new Color();

		for(var s = 0; s < 4; s++){
			
			Draw.color(tmpColor.set(colors[s]).shiftHue((s * 45) + (Time.time() * 2.0)));
			for(var i = 0; i < 4; i++){
				Tmp.v1.trns(b.rot() + 180.0, (lenscales[i] - 1.0) * 20.0);
				Lines.stroke((9 + Mathf.absin(Time.time() + (15 * s), 1.9, 1.8)) * b.fout() * strokes[s] * tscales[i]);
				Lines.lineAngle(b.x + Tmp.v1.x, b.y + Tmp.v1.y, b.rot(), 230.0 * b.fout() * lenscales[i], CapStyle.none);
			}
		};
		Draw.reset();
	}
});

refractLaser.speed = 0.001;
refractLaser.damage = 49;
refractLaser.lifetime = 13;
refractLaser.hitEffect = Fx.hitLancer;
refractLaser.despawnEffect = Fx.none;
refractLaser.hitSize = 5;
refractLaser.drawSize = 310;
refractLaser.pierce = true;
refractLaser.shootEffect = Fx.none;
refractLaser.smokeEffect = Fx.none;
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
	  Draw.color(Color.valueOf("ff7272").shiftHue(Time.time * 2));
          Draw.rect(refract.rainbowRegion, this.x, this.y, this.rotation - 90);
          Draw.color()
  }
});
