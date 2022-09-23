const bullets = require("libs/bullets");
const stats = require("libs/stats");

const testBlock = extend(PowerTurret, "test", {
  shootType: Bullets.placeholder,
});

const anuken = extend(PowerTurret, "op-anuken", {
  setStats(){
    this.super$setStats()
    this.stats.add(Stat.ammo, stats.whatTheFork)
  },
  shootType: bullets.FORK_YOU,
  health: 999999999,
});
