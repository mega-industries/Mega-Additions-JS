const palette = require("libs/palette")

exports.redFlare = new Effect(16, 100, e => {
    Lines.stroke(e.fout() * 2);

    Draw.color(palette.red);
    for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 6, 40 * e.fout(), i*180+90+e.rotation);
    }
});

exports.greenFlare = new Effect(16, 100, e => {
    Lines.stroke(e.fout() * 2);

    Draw.color(palette.green);
    for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 6, 40 * e.fout(), i*180+90+e.rotation);
    }
});

exports.blackFlare = new Effect(16, 100, e => {
    Lines.stroke(e.fout() * 2);

    Draw.color(palette.darkGray);
    for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 6, 40 * e.fout(), i*180+90+e.rotation);
    }
});

const angleBlastRing1 = extend(WaveEffect, {
    sides: 0,
    colorFrom: palette.red,
    colorTo: palette.red,
    sizeFrom: 30,
    sizeTo: 30,
    strokeFrom: 2,
    strokeTo: 0,
    lifetime: 70,
});
const angleBlastRing2 = extend(WaveEffect, {
    sides: 0,
    colorFrom: palette.red,
    colorTo: palette.red,
    sizeFrom: 60,
    sizeTo: 60,
    strokeFrom: 2,
    strokeTo: 0,
    lifetime: 70,
});
const angleBlastFlash = extend(ParticleEffect, {
    colorFrom: palette.red,
    colorTo: palette.red,
    sizeFrom: 60,
    sizeTo: 60,
    lifetime: 3,
    length: 0,
    particles: 1,
});
const angleBlastMid = extend(ParticleEffect, {
    colorFrom: palette.red,
    colorTo: palette.red,
    sizeFrom: 4,
    sizeTo: 0,
    lifetime: 70,
    length: 0,
    particles: 1,
});
const angleBlastSparks = extend(ParticleEffect, {
    colorFrom: palette.red,
    colorTo: palette.red,
    line: true,
    lenFrom: 6.5,
    lenTo: 0,
    srokeFrom: 3,
    strokeTo: 1.35,
    interp: Interp.pow5Out,
    lifetime: 32,
    length: 83,
    particles: 12,
});
exports.angleBlast = new MultiEffect(angleBlastRing1, angleBlastRing2, angleBlastFlash, angleBlastMid, angleBlastSparks)

exports.magneticDrillUpdate = extend(WaveEffect, {
    sides: 0,
    colorFrom: palette.blue,
    colorTo: palette.blue,
    sizeFrom: 7,
    sizeTo: 0,
    strokeFrom: 0,
    strokeTo: 0.6,
    lifetime: 30,
});

exports.greenTurretSmoke = extend(ParticleEffect, {
    colorFrom: palette.green,
    colorTo: Color.valueOf("83f79322"),
    sizeFrom: 4,
    sizeTo: 0,
    lifetime: 47,
    length: 30,
    particles: 17,
    interp: Interp.pow5Out,
    cone: 23,
});

exports.cannonShoot = new Effect(16, 100, e => {
    Lines.stroke(e.fout() * 2);

    Draw.color(Pal.engine);
    for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 6, 70 * e.fout(), i*180+90+e.rotation);
    }
    Drawf.tri(e.x, e.y, 6, 60 * e.fout(), e.rotation-30);
    Drawf.tri(e.x, e.y, 6, 60 * e.fout(), e.rotation+30);
    Drawf.tri(e.x, e.y, 6, 85 * e.fout(), e.rotation);
});

exports.largeCannonShoot = new Effect(16, 100, e => {
    Lines.stroke(e.fout() * 2);

    Draw.color(Pal.lancerLaser);
    for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 6, 90 * e.fout(), i*180+90+e.rotation);
    }
    Drawf.tri(e.x, e.y, 6, 80 * e.fout(), e.rotation-30);
    Drawf.tri(e.x, e.y, 6, 80 * e.fout(), e.rotation+30);
    Drawf.tri(e.x, e.y, 6, 105 * e.fout(), e.rotation);
});

exports.blackCloudOut = extend(ParticleEffect, {
    colorFrom: palette.black,
    colorTo: palette.darkGray,
    sizeFrom: 4,
    sizeTo: 0,
    lifetime: 25,
    length: 7,
    particles: 6,
});

exports.blueCloud = extend(ParticleEffect, {
    colorFrom: Pal.lancerLaser,
    colorTo: Pal.lancerLaser,
    sizeFrom: 4,
    sizeTo: 0,
    lifetime: 37,
    length: 7,
    particles: 6,
});

exports.electronShoot = new Effect(17, e => {
	Draw.color(Color.white, palette.yellow, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.poly(e.x + x, e.y + y, 3, e.fout() * 9, e.rotation);
	}});
	
	Angles.randLenVectors(e.id, 4, e.finpow() * 20.0, e.rotation, 180.0, hl);
});

exports.photonTrail = new Effect(20, e => {
	Draw.color(Color.white, palette.yellow, e.fin());
	Drawf.tri(e.x, e.y, 6 * e.fout(), 6 * e.fout(), e.rotation);
});

exports.bitBurst = new Effect(30, e => {
	let size = 21 * e.fin();
	Draw.color(Pal.lancerLaser);
	Lines.stroke(2.5 * e.fout());
	
	Lines.line(e.x, e.y, e.x - size, e.y);
	Lines.line(e.x, e.y, e.x + size, e.y);
	
	Lines.line(e.x, e.y, e.x, e.y - size);
	Lines.line(e.x, e.y, e.x, e.y + size);
	
	Lines.line(e.x, e.y, e.x - size, e.y - size);
	Lines.line(e.x, e.y, e.x + size, e.y + size);
	
	Lines.line(e.x, e.y, e.x - size, e.y + size);
	Lines.line(e.x, e.y, e.x + size, e.y - size);
});

exports.bitTrail = new Effect(75, e => {
	Draw.color(Pal.lancerLaser);
	Fill.rect(e.x, e.y, 8 * e.fout(), 8 * e.fout());
});
exports.bitTrail.layer = Layer.bullet;

exports.whiteShoot = new Effect(37, e => {
	Draw.color(Color.white, palette.darkGray, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.poly(e.x + x, e.y + y, 4, e.fout() * 9, e.rotation);
	}});
	
	Angles.randLenVectors(e.id, 5, e.finpow() * 20.0, e.rotation, 180.0, hl);
});

exports.whiteCharge = new Effect(44, e => {
	let size = 39 * e.fout();
	Draw.color(palette.darkGray, Color.white, e.fin());
	Lines.stroke(2.5 * e.fin());
	
	Lines.line(e.x, e.y, e.x - size, e.y);
	Lines.line(e.x, e.y, e.x + size, e.y);
	
	Lines.line(e.x, e.y, e.x, e.y - size);
	Lines.line(e.x, e.y, e.x, e.y + size);
	
	Lines.line(e.x, e.y, e.x - size, e.y - size);
	Lines.line(e.x, e.y, e.x + size, e.y + size);
	
	Lines.line(e.x, e.y, e.x - size, e.y + size);
	Lines.line(e.x, e.y, e.x + size, e.y - size);
});

exports.spaceTrail = new Effect(20, e => {
	Draw.color(Color.white, palette.darkGray, e.fin());
	Drawf.tri(e.x, e.y, 8 * e.fout(), 8 * e.fout(), e.rotation);
});

exports.smallImplode = new Effect(35, e => {
	Draw.color(Color.white, palette.black, e.fout());
	Lines.stroke(2 * e.fin());
	Lines.circle(e.x, e.y, 4 + e.fout() * 10);
});

exports.largeImplode = new Effect(55, e => {
	Draw.color(Color.white, palette.black, e.fout());
	Lines.stroke(3 * e.fin());
	Lines.circle(e.x, e.y, 4 + e.fout() * 25);
	
	Draw.color(Color.white, palette.black, e.fin());
	const hl = new Floatc2({get: function(x, y){
		Fill.poly(e.x + x, e.y + y, 4, e.fout() * 9, e.rotation);
	}});
	
	Angles.randLenVectors(e.id, 6, e.fout() * 40.0, e.rotation, 135.0, hl);
});
