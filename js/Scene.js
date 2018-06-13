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
        light1_front.intensity = 0.7;        
        };
        engine.runRenderLoop(function () {
                    scene.render();
            })
        }else{
        alert("WebGL not supported in this browser.");
        }








function teston(){
$.getScript("https://willlinifm.github.io/Playground_bjs/obj/Armour/Armour.js",function(){
    ctest = new Armour.MeshFactory(scene);
    ctestM = ctest.instance("armour");
    
})
    
}

function testoff(){
    if(scene.getMeshByID("armour")) ctestM.dispose(false,true);
    //window.dazavatar_dress1.dazavatar_dress1 = null;
   
    ctest = null;
    ctestM = null;
    window.Armour = null;
    console.log(window);
//    ctestM.state=null;
//            ctestM.metadata=null;
//            ctestM.doNotSerialize=null;
//            ctestM._isDisposed=null;
//            ctestM.animations=null;
//            ctestM._ranges=null;
//            ctestM._isEnabled=null;
//            ctestM._isReady=null;
//            ctestM._currentRenderId=null;
//            ctestM._parentRenderId=null;
//            ctestM._childRenderId=null;
//            ctestM._animationPropertiesOverride=null;
//            ctestM.onDisposeObservable=null;
//            ctestM._behaviors=null;
//            ctestM.name=null;
//            ctestM.id=null;
//            ctestM._scene=null;
//            ctestM.uniqueId=null;
//            ctestM._cache=null;
//            ctestM._forward=null;
//            ctestM._forwardInverted=null;
//            ctestM._up=null;
//            ctestM._right=null;
//            ctestM._rightInverted=null;
//            ctestM._rotation=null;
//            ctestM._scaling=null;
//            ctestM._isDirty=null;
//            ctestM.billboardMode=null;
//            ctestM.scalingDeterminant=null;
//            ctestM.infiniteDistance=null;
//            ctestM.position=null;
//            ctestM._localWorld=null;
//            ctestM._worldMatrix=null;
//            ctestM._worldMatrixDeterminant=null;
//            ctestM._absolutePosition=null;
//            ctestM._pivotMatrix=null;
//            ctestM._postMultiplyPivotMatrix=null;
//            ctestM._isWorldMatrixFrozen=null;
//            ctestM.onAfterWorldMatrixUpdateObservable=null;
//            ctestM._nonUniformScaling=null;
//            ctestM._facetNb=null;
//            ctestM._partitioningSubdivisions=null;
//            ctestM._partitioningBBoxRatio=null;
//            ctestM._facetDataEnabled=null;
//            ctestM._facetParameters=null;
//            ctestM._bbSize=null;
//            ctestM._subDiv=null;
//            ctestM._facetDepthSort=null;
//            ctestM._facetDepthSortEnabled=null;
//            ctestM.onCollideObservable=null;
//            ctestM.onCollisionPositionChangeObservable=null;
//            ctestM.onMaterialChangedObservable=null;
//            ctestM.definedFacingForward=null;
//            ctestM.occlusionQueryAlgorithmType=null;
//            ctestM.occlusionType=null;
//            ctestM.occlusionRetryCount=null;
//            ctestM._occlusionInternalRetryCounter=null;
//            ctestM._isOccluded=null;
//            ctestM._isOcclusionQueryInProgress=null;
//            ctestM._visibility=null;
//            ctestM.alphaIndex=null;
//            ctestM.isVisible=null;
//            ctestM.isPickable=null;
//            ctestM.showBoundingBox=null;
//            ctestM.showSubMeshesBoundingBox=null;
//            ctestM.isBlocker=null;
//            ctestM.enablePointerMoveEvents=null;
//            ctestM.renderingGroupId=null;
//            ctestM._receiveShadows=null;
//            ctestM.renderOutline=null;
//            ctestM.outlineColor=null;
//            ctestM.outlineWidth=null;
//            ctestM.renderOverlay=null;
//            ctestM.overlayColor=null;
//            ctestM.overlayAlpha=null;
//            ctestM._hasVertexAlpha=null;
//            ctestM._useVertexColors=null;
//            ctestM._computeBonesUsingShaders=null;
//            ctestM._numBoneInfluencers=null;
//            ctestM._applyFog=null;
//            ctestM.useOctreeForRenderingSelection=null;
//            ctestM.useOctreeForPicking=null;
//            ctestM.useOctreeForCollisions=null;
//            ctestM._layerMask=null;
//            ctestM.alwaysSelectAsActiveMesh=null;
//            ctestM.actionManager=null;
//            ctestM.physicsImpostor=null;
//            ctestM._checkCollisions=null;
//            ctestM._collisionMask=null;
//            ctestM._collisionGroup=null;
//            ctestM.ellipsoid=null;
//            ctestM.ellipsoidOffset=null;
//            ctestM._oldPositionForCollisions=null;
//            ctestM._diffPositionForCollisions=null;
//            ctestM.edgesWidth=null;
//            ctestM.edgesColor=null;
//            ctestM._collisionsTransformMatrix=null;
//            ctestM._collisionsScalingMatrix=null;
//            ctestM._renderId=null;
//            ctestM._intersectionsInProgress=null;
//            ctestM._unIndexed=null;
//            ctestM._lightSources=null;
//            ctestM._onCollisionPositionChange=null;
//            ctestM.onBeforeRenderObservable=null;
//            ctestM.onAfterRenderObservable=null;
//            ctestM.onBeforeDrawObservable=null;
//            ctestM.delayLoadState=null;
//            ctestM.instances=null;
//            ctestM._LODLevels=null;
//            ctestM._visibleInstances=null;
//            ctestM._renderIdForInstances=null;
//            ctestM._batchCache=null;
//            ctestM._instancesBufferSize=null;
//            ctestM._originalBuilderSideOrientation=null;
//            ctestM.overrideMaterialSideOrientation=null;
//            ctestM._areNormalsFrozen=null;
//            ctestM._source=null;
//            ctestM.debug=null;
//            ctestM._shapeKeyGroups=null;
//            ctestM._clockStart=null;
//            ctestM._renderCPU=null;
//            ctestM._totalDeformations=null;
//            ctestM._totalFrames=null;
//            ctestM._lastFrameID=null;
//            ctestM._instancePaused=null;
//            ctestM._povProcessor=null;
//            ctestM._registeredFN=null;
//            ctestM.castShadows=null;
//            ctestM.initComplete=null;
//            ctestM._geometry=null;
//            ctestM._boundingInfo=null;
//            ctestM.subMeshes=null;
//            ctestM._poseMatrix=null;
//            ctestM._sourcePositions=null;
//            ctestM._positions32F=null;
//            ctestM._originalPositions=null;
//            ctestM._futurePositions=null;
//            ctestM._futureNormals=null;
//            ctestM._sourceNormals=null;
//            ctestM._normals32F=null;
//            ctestM._material=null;
//            ctestM._effectiveMaterial=null;
//            ctestM._preActivateId=null;
////    
//            
//            ctest.MeshFactory= null ;
//            ctest._scene= null ;
//            ctest.defineCameras= null ;
//            ctest.defineMaterials= null ;
//            ctest.freshenShadowRenderLists= null ;
//            ctest.getStats= null ;
//            ctest.initScene= null ;
//            ctest.matReadAhead= null ;
//            ctest.onTexturesLoaded = null;
//            ctest.CONTIG = null;
//            ctest.REPEAT = null;
//            ctest.getViable = null;
//            ctest.clean = null;
//            ctest.makeVisible = null;
//            ctest.shirt = null;
//            ctest.freshenShadowRenderLists = null;
//    
}
    
