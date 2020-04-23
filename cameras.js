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