// Assign materials
box.material = mtl_apple;
ground.material = mtl_sand;


var shadowGenerator = new BABYLON.ShadowGenerator(128, sunLight);
shadowGenerator.addShadowCaster(box);
shadowGenerator.bias = 0.005;
