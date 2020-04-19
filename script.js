var canvas = document.getElementById("renderCanvas"); 
var engine = new BABYLON.Engine(canvas, true); 


var createScene = function() {
  var scene = new BABYLON.Scene(engine);

  var camera = new BABYLON.ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 2,
    2,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  camera.attachControl(canvas, true);

  var light1 = new BABYLON.HemisphericLight(
    "light1",
    new BABYLON.Vector3(1, 1, 1),
    scene
  );

  var box  = new BABYLON.MeshBuilder.CreateBox(
    "box",
    {
        faceColors: [
            new BABYLON.Color4(1, 0, 0),
            new BABYLON.Color4(0, 1, 0),
            new BABYLON.Color4(0, 0, 1),
            new BABYLON.Color4(1, 1, 0),
            new BABYLON.Color4(0, 1, 1),
            new BABYLON.Color4(1, 0, 1),
        ],
    },
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
