    let scene, camera, renderer, shape;
    let ADD = 0.08;

    let createGeometry = function(){
        let geometry = new THREE.Geometry();

        // geometry.vertices.push( new THREE.Vector3(0, 0, 0));
        // geometry.vertices.push( new THREE.Vector3(5, 0, 0));
        // geometry.vertices.push( new THREE.Vector3(2, 4, 3));
        // geometry.vertices.push( new THREE.Vector3(2, 4, -3));
        
        geometry.vertices.push( new THREE.Vector3(0,0,0));
        geometry.vertices.push( new THREE.Vector3(3,0,0));
        geometry.vertices.push( new THREE.Vector3(0,5,2));

        geometry.vertices.push( new THREE.Vector3(1,5,-2));
        // geometry.vertices.push( new THREE.Vector3(0,0,2));
        // geometry.vertices.push( new THREE.Vector3(1, 2, -2));

        geometry.faces.push(new THREE.Face3(0, 1, 2));
        geometry.faces.push(new THREE.Face3(0, 1, 3));

        let material = new THREE.MeshBasicMaterial({color: 0xff4606, side: THREE.DoubleSide});
        shape = new THREE.Mesh( geometry, material);
        shape.rotation.z = 0.7;
        shape.rotation.x = 0.6;
        scene.add(shape);
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
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 40;
        createGeometry();
        let axes = new THREE.AxesHelper(10);
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
        
        shape.geometry.vertices[2].y += ADD;
        shape.geometry.vertices[3].y += ADD;
        shape.geometry.verticesNeedUpdate = true;

        if(shape.geometry.vertices[2].y < -5 ||
           shape.geometry.vertices[2].y > 5)
            ADD *= -1;
        
        renderer.render(scene, camera);
        // shape.position.y += ADD;
        // shape.rotation.z += ADD;
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();