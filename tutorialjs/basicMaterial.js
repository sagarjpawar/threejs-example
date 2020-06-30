    let scene, camera, renderer, cube1, cube2, plane;
    let ADD = 0.02;
    
    let createGeometry = function() {
        let geometry = new THREE.BoxGeometry(5, 5, 5);
        let material = new THREE.MeshBasicMaterial({color: 0Xc9b92b});
        
        cube1 = new THREE.Mesh(geometry, material);
        cube1.position.z = -6;
        cube1.position.y = -5;
        
        geometry = new THREE.BoxGeometry(5, 5, 5);
        material = new THREE.MeshBasicMaterial(
                                    {color: 0Xff0040, transparent: true,
                                    opacity: 0.8});
        cube2 = new THREE.Mesh(geometry, material);
        cube2.position.z = 6;
        cube2.position.y = -5;
        
        geometry = new THREE.PlaneGeometry(1000, 1000, 50, 50);
        material = new THREE.MeshBasicMaterial({color: 0Xa6f995, wireframe: true});
        plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = Math.PI / 2;
        plane.position.y = -100;
        
        scene.add(cube1);
        scene.add(cube2);
        scene.add(plane);
    };
    
    
    // set up the environment - 
    // initiallize scene, camera, objects and renderer
    let init = function() {
        // create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        
        // create an locate the camera
        camera = new THREE.PerspectiveCamera(75, 
                        window.innerWidth / window.innerHeight, 
                        1, 1000);
        camera.position.z = 20;
        
        createGeometry();
        
        // create the renderer   
        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);
        
    };
   
    
    // main animation loop - calls 50-60 times per second.
    let mainLoop = function() {
        cube1.position.x += ADD;
        cube2.position.x -= ADD;
        if(cube1.position.x > 6 || cube1.position.x < -6)
            ADD *= -1;
        
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();