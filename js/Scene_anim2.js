        if (BABYLON.Engine.isSupported()) {
        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true, null, false);
        var scene = new BABYLON.Scene(engine);     
        // Creates, angles, distances and targets the camera
	    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0 , 150, 0), scene);
        // This positions the camera
        scene.activeCamera = camera;  
        camera.setPosition(new BABYLON.Vector3(0 , 180, -250));    
        // This attaches the camera to the canvas
        camera.attachControl(canvas, false);
        camera.lowerRadiusLimit = camera.upperRadiusLimit = camera.radius;
        var light1_front = new BABYLON.HemisphericLight("Omni1", new BABYLON.Vector3(0, 1, -1), scene);
        scene.beforeCameraRender = function () {
        light1_front.intensity = 1.6;        
        };

        engine.runRenderLoop(function () {
                    scene.render();
//                    scene.onPointerUp = function(){
//                   console.log(camera.position);
//                }
            })
        }else{
        alert("WebGL not supported in this browser.");
        }





function updateshapekey(sa){
    var shapekeyslide = new QI.VertexDeformation("ENTIRE_MESH","BASIS",["FQYDA"],[sa],1);
        ctestMI.queueSingleEvent(shapekeyslide);
        ctestMI2.queueSingleEvent(shapekeyslide);    
//    var shapekeyslide = new QI.VertexDeformation("ENTIRE_MESH","BASIS",["KEY 1"],[sa],1);
//        ctestMI.queueSingleEvent(shapekeyslide);
        //ctestMI2.queueSingleEvent(shapekeyslide);
}
    
function animationtoggle(){
    scene.beginAnimation(scene.getSkeletonByName(""), 0, 60, true, 1);
    console.log("Start Animation");
pause()
restart()
stop()
reset()
}

function test_MaDecoder(){
        $.getScript("tag_randomvalue.js",function(){
    ctest = new tag_randomvalue.MeshFactory(scene);
    ctestMI = ctest.instance("shirt0702")
    ctestMI.position = new BABYLON.Vector3(0,50,20);
    var shapekeyslide = new QI.VertexDeformation("ENTIRE_MESH","BASIS",["KEY 1"],[0.01],1);
    ctestMI.queueSingleEvent(shapekeyslide);
    //Camera Aniamtion
    var positionAnimation = new BABYLON.Animation("camerarotate", "alpha", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    var positionAnimation2 = new BABYLON.Animation("cameraposition", "radius", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

    var keys1 = [{
        frame : 0,
        value : -1
        }, {
        frame : 100,
        value : 4.7
        }];
    var keys2 = [{
        frame : 0,
        value : 50
        }, {
        frame : 100,
        value : 150
        }];

    positionAnimation.setKeys(keys1);
    positionAnimation2.setKeys(keys2);
    camera.animations.push(positionAnimation);
    camera.animations.push(positionAnimation2);
    scene.beginAnimation(camera, 0, 100, false, 1);
        })
}

function teston(){
    
    $.getScript("anim_bF_avatar2.js",function(){
    ctest = new anim_bF_avatar2.MeshFactory(scene);
    ctestMI = ctest.instance("anim_pose_ca")
    ctestMI.position = new BABYLON.Vector3(0,50,20);
       // ctestMI.computeBonesUsingShaders = false;
    console.log(scene);
    console.log(window);
    $.getScript("anim_bF_clo2.js",function(){
    ctest = new anim_bF_clo2.MeshFactory(scene);
    ctestMI = ctest.instance("anim_pose_clo1_sle_ca.001")
    ctestMI.position = new BABYLON.Vector3(0,50,20);
       // ctestMI.computeBonesUsingShaders = false;
    console.log(scene);
    console.log(window);
    scene.beginAnimation(scene.getSkeletonByName("anim_pose_ca"), 0, 80, true, 1);
    scene.beginAnimation(scene.getSkeletonByName("anim_pose_clo1_sle_ca.001"), 0, 80, true, 1);
  })   
})   
    
} 


function testoff(){
    if(scene.getMeshByID("152QA_bone")) ctestMI.dispose(false,true);
    if(scene.getMeshByID("FQBasis")) ctestMI2.dispose(false,true);
}
    //window.dazavatar_dress1.dazavatar_dress1 = null;
    
