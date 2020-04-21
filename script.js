var canvas = document.getElementById("renderCanvas"); 
var engine = new BABYLON.Engine(canvas, true); 


var createScene = function() {
  var scene = new BABYLON.Scene(engine);

  var axes = new BABYLON.Debug.AxesViewer(scene);
  
  var camera = new BABYLON.ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 2,
    2,
    new BABYLON.Vector3(-1, 1, 2),
    scene
  );
  camera.attachControl(canvas, true);

  var light1 = new BABYLON.HemisphericLight(
    "light1",
    new BABYLON.Vector3(1, 1, 1),
    scene
  );

  var plane = new BABYLON.MeshBuilder.CreatePlane(
    "plane",
    {size: 1},
    scene
  );
  
  var sourcePlane = new BABYLON.Plane(0, 1, 0, 0);
  sourcePlane.normalize()
  
  var groundplane = new BABYLON.MeshBuilder.CreatePlane(
    "plane",
    {
      size: 5,
      sourcePlane: sourcePlane,
      sideOrientation: BABYLON.Mesh.DOUBLESIDE
    },
    scene
  );
  
  var box = new BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      faceColors: [
        new BABYLON.Color4(1, 0, 0, 1),
        new BABYLON.Color4(0, 1, 0, 1),
        new BABYLON.Color4(0, 0, 1, 1),
        new BABYLON.Color4(1, 1, 0, 1),
        new BABYLON.Color4(1, 0, 1, 1),
        new BABYLON.Color4(0, 1, 1, 1),
      ],
    },
    scene
  );
  
  box.setPositionWithLocalVector(new BABYLON.Vector3(0, .5, 0));

  return scene;
};


var scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});


window.addEventListener("resize", function() {
  engine.resize();
});
