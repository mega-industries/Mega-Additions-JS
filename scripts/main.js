const bullets = require("libs/bullets");

const testBlock = extend(PowerTurret, "test", {
  shootType: bullets.polarisSpear
});

require("turrets");
require("production");
require("items");
require("campaign/serpulo");
require("units");
