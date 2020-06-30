let scene, camera, renderer, cube, sphere;
    let ADD = 0.02;
    let geometry = new THREE.BoxGeometry(3, 2, 4);
    let createGeometry = function() {
        let material = new THREE.MeshDepthMaterial({uniforms: {
    color1: {
      value: new THREE.Color("red")
    },
    color2: {
      value: new THREE.Color("purple")
    }
  }
  });
        material.vertexColors = true;
        
        cube = new THREE.Mesh(geometry, material);
        cube.position.z = -10;
        cube.position.x = -5;
        
        geometry = new THREE.SphereGeometry(3, 30, 30);
        sphere = new THREE.Mesh(geometry, material);
        sphere.position.z = 0;
        sphere.position.x = 5;

        scene.add(cube);
        scene.add(sphere);
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
        camera.position.z = 15;
        
        createGeometry();
        
        // create the renderer   
        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);
        
    };
   
    
    // main animation loop - calls 50-60 times per second.
    let mainLoop = function() {
        cube.position.z += ADD;
        sphere.position.z -= ADD;
        
        if(cube.position.z >= 6 || cube.position.z <= -16)
            ADD *= -1;
        
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();