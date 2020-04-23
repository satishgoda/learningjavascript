var ground = new BABYLON.MeshBuilder.CreateGround(
  "ground",
  {
    width: 5,
    height: 5
  },
  scene
);

ground.receiveShadows = true;


var box = new BABYLON.MeshBuilder.CreateBox("box", {}, scene);

box.setPositionWithLocalVector(new BABYLON.Vector3(0, 0.5, 0));
