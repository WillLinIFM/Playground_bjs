        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true);
        var scene = new BABYLON.Scene(engine);  
        // here the doc for Load function: http://doc.babylonjs.com/api/classes/babylon.sceneloader#load
//        BABYLON.SceneLoader.Load("../obj/Armour/", "AntoniaHairV2.babylon", engine, function (scene) {
//        BABYLON.SceneLoader.ImportMesh("AntoniaHair_145349", "../obj/Armour/", "AntoniaHairV2.babylon", scene, function (meshes) {
//        var m = meshes[0];
//            
//        m.isVisible = false;
//            
//        TOAD_MODEL = m;
//        });
        



            //as this .babylon example hasn't camera in it, we have to create one
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0 , 150, 0), scene);
        // This positions the camera
            scene.autoClear = null;
            scene.activeCamera = camera;
            camera.attachControl(canvas, false);
            camera.lowerRadiusLimit = camera.upperRadiusLimit = camera.radius;
            var light1_front = new BABYLON.HemisphericLight("Omni1", new BABYLON.Vector3(0, 1, -1), scene);
            scene.beforeCameraRender = function () {
            light1_front.intensity = 0.7;        
            };
             camera.setPosition(new BABYLON.Vector3(0 , 150, -150));

            engine.runRenderLoop(function() {
                scene.render();
            });

            window.addEventListener("resize", function () {
                engine.resize();
            });
//        });