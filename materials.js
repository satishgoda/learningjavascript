mtl_apple = new BABYLON.StandardMaterial("mtl_apple", scene);
mtl_apple.diffuseColor = new BABYLON.Color3(0.8, 0.2, 0);

box.material = mtl_apple;

mtl_sand = new BABYLON.StandardMaterial("mtl_sand", scene);
mtl_sand.diffuseColor = new BABYLON.Color3(0.7, 0.5, 0);

ground.material = mtl_sand;
