    let scene, camera, renderer, cube;
    let ADD = 0.01;

    let createCube = function(){
        let geometry = new THREE.BoxGeometry(1,1,1);
        let material = new THREE.MeshBasicMaterial({color: 0x00a1cb});
        cube = new THREE.Mesh( geometry, material);
        scene.add(cube);
    }
    
    // set up the environment - 
    // initiallize scene, camera, objects and renderer
    let init = function() {
        // 1. create the scene
        // ....
        scene= new THREE.Scene();
        scene.background = new THREE.Color(0xababab);
        
        // 2. create an locate the camera
        // ....
        camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 5;
        createCube();
        
        let axes = new THREE.AxesHelper(5);
        scene.add(axes);

        // 3. create and locate the objects on the scene
        // ...
        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        // 4. create the renderer   
        // ...
        document.body.appendChild(renderer.domElement);
    };

    // main animation loop - calls every 50-60 ms.
    let mainLoop = function() {
        renderer.render(scene, camera);
        // cube.rotation.x += ADD;
        cube.rotation.y += ADD;
        // cube.rotation.z += ADD;
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();