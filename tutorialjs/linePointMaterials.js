let scene, camera, renderer, cylinder, sphere;
    let ADD = 0.02;
    
    let createGeometry = function() {
    // let material = new THREE.LineBasicMaterial({color: 0xffffff, linewidth: 2});
        
    //    let material = new THREE.LineDashedMaterial({color: 0xffffff, linewidth: 1,dashSize: 5, gapSize: 4});
        
        let material = new THREE.PointsMaterial({color: 0xffffff});
        
        let geometry = new THREE.CylinderGeometry(3, 2, 4);
        cylinder = new THREE.Line(geometry, material);
        // cylinder = new THREE.Points(geometry, material);
        cylinder.position.z = -10;
        cylinder.position.x = -5;
        
        // geometry.computeLineDistances();
        
        geometry = new THREE.SphereGeometry(3, 30, 30);
       // sphere = new THREE.Line(geometry, material);
        sphere = new THREE.Line(geometry, material);
        
        sphere.position.z = 0;
        sphere.position.x = 5;
        
        sphere.computeLineDistances();
        
        scene.add(cylinder);
        scene.add(sphere);
    };
    
    
    // set up the environment - 
    // initiallize scene, camera, objects and renderer
    let init = function() {
        // create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        
        // create an locate the camera
        camera = new THREE.PerspectiveCamera(75, 
                        window.innerWidth / window.innerHeight, 
                        1, 1000);
        camera.position.z = 15;
    //     var light = new THREE.AmbientLight(0xffffff, 0.5);
    // scene.add(light);

    // var light2 = new THREE.PointLight(0xffffff, 0.5);
    // scene.add(light2);
        createGeometry();
        
        // create the renderer   
        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);
        
    };
   
    
    // main animation loop - calls 50-60 times per second.
    let mainLoop = function() {
        cylinder.rotation.x += ADD;
        sphere.rotation.x += ADD;
        
        cylinder.rotation.y += ADD;
        sphere.rotation.y += ADD;
        
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();