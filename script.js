var canvas = document.getElementById("renderCanvas"); 
var engine = new BABYLON.Engine(canvas, true); 


var createScene = function() {
  var scene = new BABYLON.Scene(engine);

  var camera = new BABYLON.ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 2,
    2,
    new BABYLON.Vector3(0, 0, 3),
    scene
  );
  camera.attachControl(canvas, true);

  var light1 = new BABYLON.HemisphericLight(
    "light1",
    new BABYLON.Vector3(1, 1, 0),
    scene
  );

  var light2 = new BABYLON.PointLight(
    "light2",
    new BABYLON.Vector3(0, 1, -1),
    scene
  );

  var box  = new BABYLON.MeshBuilder.CreateBox(
    "box",
    {},
    scene
  );

  return scene;
};


var scene = createScene();

engine.runRenderLoop(function() {
  scene.render();
});


window.addEventListener("resize", function() {
  engine.resize();
});
