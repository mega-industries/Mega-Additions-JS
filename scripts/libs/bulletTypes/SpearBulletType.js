module.exports = {
  spearBullet(color, width, height, sideWidth, sideLength, sideAngle, obj){
    const shoot = extend(ParticleEffect, {
    line: true,
    lenFrom: 4,
    lenTo: 0,
    strokeFrom: 1.4,
    strokeTo: 0,
    colorFrom: Color.white,
    colorTo: color,
    cone: 30,
    length: 12,
    lifetime: 50,
    particles: 8
  });
  
  if(obj == undefined) obj = {};
  obj = Object.assign({
    draw(b){
      if(!b) return;
      
      Draw.color(color);
      Draw.z(Layer.bullet);
      
      Drawf.tri(b.x, b.y, width, height, b.rotation);
      Drawf.tri(b.x, b.y, sideWidth, sideLength, b.rotation - sideAngle);
      Drawf.tri(b.x, b.y, sideWidth, sideLength, b.rotation + sideAngle);
    },
    hittable: false,
    absorbable: false,
    shootEffect: shoot,
    pierce: true,
    pierceCap: 3,
  }, obj);
  
  const spear = extend(BasicBulletType, obj);
  return spear;
  };
};