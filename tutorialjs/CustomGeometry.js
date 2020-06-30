    let scene, camera, renderer, shape;
    let ADD = 0.01;

    let createGeometry = function(){
        let geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(3,0,0));
        geometry.vertices.push( new THREE.Vector3(0,5,0));
        geometry.vertices.push( new THREE.Vector3(0,0,2));
        geometry.vertices.push( new THREE.Vector3(1, 2, -2));

        geometry.faces.push(new THREE.Face3(0, 1, 2));
        geometry.faces.push(new THREE.Face3(1, 2, 3));
        geometry.faces.push(new THREE.Face3(0, 2, 3));

        let material = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide});
        shape = new THREE.Mesh( geometry, material);
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
        camera.position.z = 20;
        createGeometry();
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
        shape.rotation.x += ADD;
        shape.rotation.y += ADD;
        // shape.rotation.z += ADD;
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();