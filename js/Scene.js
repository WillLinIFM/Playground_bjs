        if (BABYLON.Engine.isSupported()) {
        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true, null, false);
        var scene = new BABYLON.Scene(engine);     
        scene.autoClear = false; // Color buffer
        engine.setHardwareScalingLevel(0.5) //increase the rendering quality. default = 1 (0.5~4)
        // Creates, angles, distances and targets the camera
	    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0 , 150, 0), scene);
        // This positions the camera
        scene.activeCamera = camera;
        camera.setPosition(new BABYLON.Vector3(0 , 150, -150));    
        camera.angularSensibility = 100;
        camera.moveSensibility = 100;   
        // This attaches the camera to the canvas
        camera.attachControl(canvas, false);
        camera.lowerRadiusLimit = camera.upperRadiusLimit = camera.radius;
        var SCENE_RUN = true; 
        var light1_front = new BABYLON.HemisphericLight("Omni1", new BABYLON.Vector3(0, 1, -1), scene);
        scene.beforeCameraRender = function () {
        light1_front.intensity = 0.5;        
        };
            engine.runRenderLoop(function () {
                
                if(SCENE_RUN)       // only when scene_run = true run render loop
                    scene.render();
            })
            //Resize
        window.addEventListener("resize", function () {
            engine.resize();
        });
        }else{
        alert("WebGL not supported in this browser.");
        }








function teston(){
    ctest = new Armour.MeshFactory(scene);
    ctestM = ctest.instance("armour");
    
}

function testoff(){
    if(scene.getMeshByID("armour")) ctestM.dispose(false,true);
    
}
    
