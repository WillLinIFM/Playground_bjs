        if (BABYLON.Engine.isSupported()) {
        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true, null, false);
        var scene = new BABYLON.Scene(engine);     
        // Creates, angles, distances and targets the camera
	    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0 , 150, 0), scene);
        // This positions the camera
        scene.activeCamera = camera;  
        camera.setPosition(new BABYLON.Vector3(0 , 150, -150));    
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
//        ctestMI2.queueSingleEvent(shapekeyslide);    
//    var shapekeyslide = new QI.VertexDeformation("ENTIRE_MESH","BASIS",["KEY 1"],[sa],1);
//        ctestMI.queueSingleEvent(shapekeyslide);
        //ctestMI2.queueSingleEvent(shapekeyslide);
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
    
    $.getScript("avatar_anim.js",function(){
    ctest = new avatar_anim.MeshFactory(scene);
    ctestMI = ctest.instance("152QA_bone")
    ctestMI.position = new BABYLON.Vector3(0,50,20);
    console.log(scene);
    console.log(window);
    var shapeKeyGroup = ctestMI.getShapeKeyGroup("ENTIRE_MESH");
     if(shapeKeyGroup) ctestMI.removeShapeKeyGroup("ENTIRE_MESH");
    $.getScript("avatar_anim_FQYDA.js",function(){
        
//        var texh = (scene.textures[scene.textures.length-1]._texture.baseHeight) * (scene.textures[scene.textures.length-1]._texture.baseWidth);
////        console.log(ctestMI.material._subMaterials[0]._diffuseTexture.readPixels());
//        console.log(scene.textures[0].getSize());
//        console.log(scene.materials[0]._diffuseTexture);
//        console.log(scene.materials[2]._diffuseTexture);
//        console.log(scene.textures);
////        console.log(window.location.hostname.length);
//        console.log(window);
//        console.log(engine);
//        console.log(new BABYLON.Texture(""));
//        console.log(new BABYLON.NullEngine());
//        var imageurl = document.createElement("input");
//        imageurl.type = "file";
//        console.log(imageurl.files.length);
//        var fsize = imageurl.files[0].size; 
//        console.log(fsize);
//        console.log(scene.textures[0].readPixels());
//        console.log(scene.textures[0].getTextureMatrix());
//        console.log(scene.textures[0].getInternalTexture());
//        console.log(scene.textures[0].getSize())
//        console.log(scene.textures[0].getSize())
//        console.log(scene.textures[0].getSize())
//        var C =  texh/511511;
                // could be hidden at any place!!
        
//        var _i_c = _i.subarray(C,_i.length);
//        console.log(C);
        shapeKeyGroup._addShapeKey("FQYDA",true,_i);
//        shapeKeyGroup._addShapeKey("FQYDA",true,_i_c);
        passing_array(_i);
        ctestMI.addShapeKeyGroup(shapeKeyGroup);
        console.log(ctestMI._shapeKeyGroups);
       
    })
//    var uvs = scene.meshes[0].getVerticesData(BABYLON.VertexBuffer.UVKind);
//    //var positions = scene.meshes[0].getVerticesData(BABYLON.VertexBuffer.PositionKind);
//    var uvs_correct = scene.meshes[0].geometry._vertexBuffers.uv._buffer._data;
//    console.log(uvs_correct);
//    //console.log(positions);
//    uvs_correct.splice(38,217); //image[3] alpha for decode value and index y
//    //console.log(uvs_new);
//    console.log(uvs_correct);
//    var uvs_update = scene.meshes[0].getVerticesData(BABYLON.VertexBuffer.UVKind);
//    console.log(uvs_update);
//    ctestM = ctest.instance("152QA_bone");
//    ctestM.position = new BABYLON.Vector3(-20,50,100);
//    console.log(ctest);
//    console.log(ctestM);
//    var uvs = ctestM.getVerticesData()
    //scene.beginAnimation(scene.getSkeletonByName("152QA_bone"), 0, 60, true, 0.8);
})   


//$.getScript("cloth_anim.js",function(){
//    ctest2 = new cloth_anim.MeshFactory(scene);
//    //decode
//    
//    ctestMI2 = ctest2.instance("FQBasis")
//    ctestMI2.position = new BABYLON.Vector3(0,50,20);
//    console.log(scene);
//    var shapeKeyGroup = ctestMI2.getShapeKeyGroup("ENTIRE_MESH");
//     if(shapeKeyGroup) ctestMI2.removeShapeKeyGroup("ENTIRE_MESH");
//    $.getScript("cloth_anim_FQYD.js",function(){
//        
////        var texh = (scene.textures[scene.textures.length-1]._texture.baseHeight) * (scene.textures[scene.textures.length-1]._texture.baseWidth);
//////        console.log(ctestMI.material._subMaterials[0]._diffuseTexture.readPixels());
////        console.log(scene.textures[0].getSize());
////        console.log(scene.materials[0]._diffuseTexture);
////        console.log(scene.materials[2]._diffuseTexture);
////        console.log(scene.textures);
//////        console.log(window.location.hostname.length);
//        console.log(window);
////        console.log(engine);
////        console.log(new BABYLON.Texture(""));
////        console.log(new BABYLON.NullEngine());
////        var imageurl = document.createElement("input");
////        imageurl.type = "file";
////        console.log(imageurl.files.length);
////        var fsize = imageurl.files[0].size; 
////        console.log(fsize);
////        console.log(scene.textures[0].readPixels());
////        console.log(scene.textures[0].getTextureMatrix());
////        console.log(scene.textures[0].getInternalTexture());
//////        console.log(scene.textures[0].getSize())
//////        console.log(scene.textures[0].getSize())
//////        console.log(scene.textures[0].getSize())
////        var C =  texh/511511;
////                // could be hidden at any place!!
//        
//        //var _i_c = _i.subarray(C,_i.length);
//        //console.log(C);
//        shapeKeyGroup._addShapeKey("FQYDA",true,_i);
//        ctestMI2.addShapeKeyGroup(shapeKeyGroup);
//        console.log(ctestMI2._shapeKeyGroups);
//       
//    })
////    var uvs = scene.meshes[0].getVerticesData(BABYLON.VertexBuffer.UVKind);
////    //var positions = scene.meshes[0].getVerticesData(BABYLON.VertexBuffer.PositionKind);
////    var uvs_correct = scene.meshes[0].geometry._vertexBuffers.uv._buffer._data;
////    console.log(uvs_correct);
////    //console.log(positions);
////    uvs_correct.splice(38,217); //image[3] alpha for decode value and index y
////    //console.log(uvs_new);
////    console.log(uvs_correct);
////    var uvs_update = scene.meshes[0].getVerticesData(BABYLON.VertexBuffer.UVKind);
////    console.log(uvs_update);
////    ctestM = ctest.instance("152QA_bone");
////    ctestM.position = new BABYLON.Vector3(-20,50,100);
////    console.log(ctest);
////    console.log(ctestM);
////    var uvs = ctestM.getVerticesData()
//    //scene.beginAnimation(scene.getSkeletonByName("152QA_bone"), 0, 80, true, 0.8);
////    scene.beginAnimation(scene.getSkeletonByName("152QA_bone"), 0, 80, true, 0.8);
////    scene.beginAnimation(scene.getSkeletonByName("FQBasis"), 0, 80, true, 0.8);
//    
//})  
}

function testoff(){
    if(scene.getMeshByID("152QA_bone")) ctestMI.dispose(false,true);
    if(scene.getMeshByID("FQBasis")) ctestMI2.dispose(false,true);
}
    //window.dazavatar_dress1.dazavatar_dress1 = null;
    
