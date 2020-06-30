    let scene, camera, renderer, torus;
    let ADD = 0.01;

    let createTorus = function(){
        let geometry = new THREE.TorusGeometry(5,1,30, 30, Math.PI);
        let material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
        torus = new THREE.Mesh( geometry, material);
        scene.add(torus);
    }
    
    // set up the environment - 
    // initiallize scene, camera, objects and renderer
    let init = function() {
        // 1. create the scene
        // ....
        scene= new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        
        // 2. create an locate the camera
        // ....
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 20;
        createTorus();
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
        torus.rotation.y += ADD;
        // sphere.rotation.x += ADD;
        // cube.rotation.z += ADD;
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();