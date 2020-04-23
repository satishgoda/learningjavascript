var sunLight = new BABYLON.DirectionalLight(
  "sunLight",
  new BABYLON.Vector3(-1, -1, -1),
  scene
);
sunLight.intensity = 0.8;

var ambientLight = new BABYLON.HemisphericLight(
  "ambientLight",
  new BABYLON.Vector3(0, 1, 0),
  scene
);
ambientLight.intensity = .3;


// SHADOWS

sunLight.autoUpdateExtends = true;
sunLight.autoCalcShadowZBounds = true;

var shadowGenerator = new BABYLON.ShadowGenerator(128, sunLight);
shadowGenerator.addShadowCaster(box);
shadowGenerator.bias = 0.005;
