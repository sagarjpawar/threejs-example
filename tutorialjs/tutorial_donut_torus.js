    let scene, camera, renderer;
    let donuts = [];
    let ADD = 0.1;

    let randomInRange = function(from, to){
        let x = Math.random() * (to - from);
        return x + from;
    }
    let createDonut = function(){
        let geometry = new THREE.TorusGeometry(1, 0.5, 5, 30);
        let material = new THREE.MeshBasicMaterial({color: Math.random() * 0xffffff});
        let d = new THREE.Mesh( geometry, material);
        d.position.x = randomInRange(-15, 15);
        d.position.z = randomInRange(-15, 15);
        d.position.y = 15;
        scene.add(d);
        donuts.push(d);
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
        camera.position.y = -10;
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
        let x = Math.random();
        if(x < 0.1)
        createDonut();
        donuts.forEach(d => d.position.y -= ADD);
        // torus.rotation.y += ADD;
        // sphere.rotation.x += ADD;
        // cube.rotation.z += ADD;
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();