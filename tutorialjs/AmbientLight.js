let scene, camera, renderer, cube, cone, plane, light;
    let ADD = 0.02;
    
    let createGeometry = function() {
        let geometry = new THREE.BoxGeometry(5, 5, 5);
        let material = new THREE.MeshPhongMaterial({color: 0X0f1d89,  side: THREE.DoubleSide});
        
        cube = new THREE.Mesh(geometry, material);
        cube.position.z = -6;
        cube.position.y = -5;
        cube.position.x = -6;
        
        geometry = new THREE.ConeGeometry(3, 4, 20, 1, true);
        cone = new THREE.Mesh(geometry, material);
        cone.position.x = 7;
        cone.position.y = -5;
        
        geometry = new THREE.PlaneGeometry(1000, 1000, 50, 50);
        material = new THREE.MeshPhongMaterial({color: 0X693421, side: THREE.DoubleSide});
        plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = Math.PI / 2;
        plane.position.y = -100;
        
        scene.add(cube);
        scene.add(cone);
        scene.add(plane);
    };
    
    
    // set up the environment - 
    // initiallize scene, camera, objects and renderer
    let init = function() {
        // create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xababab);
        
        // create an locate the camera
        camera = new THREE.PerspectiveCamera(75, 
                        window.innerWidth / window.innerHeight, 
                        1, 1000);
        camera.position.z = 20;
    
        light = new THREE.AmbientLight(0xffffff);
        scene.add(light);
            
        createGeometry();
        
        // create the renderer   
        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);
        
    };
   
    
    // main animation loop - calls 50-60 times per second.
    let mainLoop = function() {
        light.intensity += ADD;
        if(light.intensity >= 8 || light.intensity <= 1)
            ADD *= -1;
        
       
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();
    