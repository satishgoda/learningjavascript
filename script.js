var canvas = document.getElementById("renderCanvas");

var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);

var axes = new BABYLON.Debug.AxesViewer(scene);

// CAMERA

var camera = new BABYLON.ArcRotateCamera(
  "Camera",
  Math.PI / 2,
  Math.PI / 2,
  2,
  new BABYLON.Vector3(0, 0, 0),
  scene
);
camera.setPosition(new BABYLON.Vector3(-2, 2, 3));
camera.attachControl(canvas, true);

// GEOMETRY

var sourcePlane = new BABYLON.Plane(0, -1, 0, 0);
sourcePlane.normalize();

var groundplane = new BABYLON.MeshBuilder.CreatePlane(
  "plane",
  {
    size: 15,
    sourcePlane: sourcePlane,
    sideOrientation: BABYLON.Mesh.DOUBLESIDE
  },
  scene
);
groundplane.receiveShadows = true;

var box = new BABYLON.MeshBuilder.CreateBox(
  "box",
  {
    faceColors: [
      new BABYLON.Color4(1, 0, 0, 1),
      new BABYLON.Color4(0, 1, 0, 1),
      new BABYLON.Color4(0, 0, 1, 1),
      new BABYLON.Color4(1, 1, 0, 1),
      new BABYLON.Color4(1, 0, 1, 1),
      new BABYLON.Color4(0, 1, 1, 1)
    ]
  },
  scene
);

box.setPositionWithLocalVector(new BABYLON.Vector3(0, 0.5, -2));

box.actionManager = new BABYLON.ActionManager(scene);
box.URL = "https://doc.babylonjs.com/api/classes/babylon.debug.axesviewer";
box.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(
    event
  ) {
    var box = event.meshUnderPointer;
    window.open(box.URL);
  })
);

var sphere = new BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
sphere.setPositionWithLocalVector(new BABYLON.Vector3(2, 0.5, 0));

// LIGHTS

var light1 = new BABYLON.DirectionalLight(
  "light1",
  new BABYLON.Vector3(-1, -1, -1),
  scene
);
light1.intensity = 0.8;

var light2 = new BABYLON.HemisphericLight(
  "light2",
  new BABYLON.Vector3(0, 1, 0),
  scene
);
light2.diffuse = new BABYLON.Color3(0.4, 0.4, 0.3);
light2.intensity = 0.6;

// SHADOWS

light1.autoUpdateExtends = true;
light1.autoCalcShadowZBounds = true;

var shadowGenerator = new BABYLON.ShadowGenerator(128, light1);
shadowGenerator.addShadowCaster(box);
shadowGenerator.addShadowCaster(sphere);
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
