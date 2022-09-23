const bullets = require("libs/bullets");
const stats = require("libs/stats");

const testBlock = extend(PowerTurret, "test", {
  shootType: Bullets.placeholder,
});

const anuken = extend(PowerTurret, "op-anuken", {
  setStats(){
    this.super$setStats()
    this.stats.remove(Stat.ammo)
    this.stats.add(Stat.ammo, stats.whatTheFork)
  },
  shootType: bullets.FORK_YOU,
  range: 1000,
  health: 999999999,
});
