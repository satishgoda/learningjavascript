var canvas = document.getElementById("renderCanvas");

var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);

var axes_world = new BABYLON.Debug.AxesViewer(scene);

// CAMERA

var camera = new BABYLON.ArcRotateCamera(
  "Camera",
  Math.PI / 2,
  Math.PI / 2,
  2,
  new BABYLON.Vector3(0, 0, 0),
  scene
);
camera.setPosition(new BABYLON.Vector3(-2, 2, 5));
camera.attachControl(canvas, true);

// GEOMETRY

var ground = new BABYLON.MeshBuilder.CreateGround(
  "ground",
  {
    width: 15, 
    height: 15
  },
  scene
);
ground.receiveShadows = true;

var box = new BABYLON.MeshBuilder.CreateBox(
  "box",
  {},
  scene
);

box.setPositionWithLocalVector(new BABYLON.Vector3(0, 0.5, 0));

// MATERIALS

mtl_apple = new BABYLON.StandardMaterial("mtl_apple", scene)
mtl_apple.diffuseColor = new BABYLON.Color3(0.8, 0.2, 0);

box.material = mtl_apple;

mtl_sand = new BABYLON.StandardMaterial("mtl_sand", scene)
mtl_sand.diffuseColor = new BABYLON.Color3(0.7, 0.5, 0);

ground.material = mtl_sand

// LIGHTS

var sunLight = new BABYLON.DirectionalLight(
  "sunLight",
  new BABYLON.Vector3(-1, -1, -1),
  scene
);
sunLight.intensity = .8;

var ambientLight = new BABYLON.HemisphericLight(
  "ambientLight",
  new BABYLON.Vector3(0, 1, 0),
  scene
);
ambientLight.intensity = 0.3;

// SHADOWS

sunLight.autoUpdateExtends = true;
sunLight.autoCalcShadowZBounds = true;

var shadowGenerator = new BABYLON.ShadowGenerator(128, sunLight);
shadowGenerator.addShadowCaster(box);
shadowGenerator.bias = 0.005;

scene.debugLayer.show(
{
  embedMode: true,
  enablePopup: false
}
);

// VROOOM

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener("resize", function() {
  engine.resize();
});
