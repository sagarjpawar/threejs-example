    let scene, camera, renderer;
    let rings = [];
    let ADD = 0.1;
    let ROTATION = 0.01;
    let sub = true;

    
    let createRing = function(){
        let geometry = new THREE.TorusGeometry(11, 1, 2, 50);
        let material = new THREE.MeshBasicMaterial({color: 0xFFC266});
        let ring = new THREE.Mesh( geometry, material);
        scene.add(ring); 
        rings.push(ring);
        ring.rotation.y = -.7;
        ring.rotation.x = -1.5;

        let geometry1 = new THREE.TorusGeometry(8, 1, 2, 50);
        let material1 = new THREE.MeshBasicMaterial({color: 0xFFB84D});
        let ring1 = new THREE.Mesh( geometry1, material1);
        scene.add(ring1);
        rings.push(ring1);
        ring1.rotation.y = -.7;
        ring1.rotation.x = -1.5;

        let geometry2 = new THREE.TorusGeometry(5, 1, 2, 50);
        let material2 = new THREE.MeshBasicMaterial({color: 0xFFD699});
        let ring2 = new THREE.Mesh( geometry2, material2);
        scene.add(ring2);
        rings.push(ring2);
        ring2.rotation.y = -.7;
        ring2.rotation.x = -1.5;

        let sphereGeometry = new THREE.SphereGeometry(4,30,30);
        let sphereMaterial = new THREE.MeshBasicMaterial({color: 0x804000});
        let sphere = new THREE.Mesh( sphereGeometry, sphereMaterial);
        scene.add(sphere);
        rings.push(sphere);
        sphere.rotation.y = -.7;
        sphere.rotation.x = -1.5;
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
        let axes = new THREE.AxesHelper(5);
        scene.add(axes);
        createRing();

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
        // torus.rotation.y += ADD;
        // sphere.rotation.x += ADD;
        // cube.rotation.z += ADD;
        
        rings.forEach( d => {
            if(d.position.y < -2){
                sub = true;
            }else if(d.position.y > 5){
                sub = false;
            }
            if(sub){
                d.position.y += ROTATION;
            }else{
                d.position.y -= ROTATION;
            }
            });
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();