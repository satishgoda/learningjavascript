var canvas = document.getElementById("renderCanvas");

var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);

var axes_world = new BABYLON.Debug.AxesViewer(scene);

// CAMERA
// GEOMETRY
// MATERIALS
// LIGHTS

scene.debugLayer.show({
  embedMode: true,
  enablePopup: false
});


engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener("resize", function() {
  engine.resize();
});
