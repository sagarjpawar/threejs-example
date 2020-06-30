let scene, camera, renderer, text;
    let ADD = 0.1, theta = 0;
    
    let createGeometry = function() {
        

    var loader = new THREE.FontLoader();
    loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
        let textGeometry = new THREE.TextGeometry("hello World", {font: font, size: 5, height: 2});
        var textMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, specular: 0xffffff });
        var text = new THREE.Mesh(textGeometry, textMaterial);
        text.position.x = -15;
        scene.add(text);
        // main animation loop - calls 50-60 times per second.
        let mainLoop = function() {
            text && (text.rotation.x += ADD);
            renderer.render(scene, camera);
            requestAnimationFrame(mainLoop);
        };
        mainLoop();
    });

    };
    
    
    // set up the environment - 
    // initiallize scene, camera, objects and renderer
    let init = function() {
        // create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        
        // create an locate the camera
        camera = new THREE.PerspectiveCamera(70, 
                    window.innerWidth / window.innerHeight, 
                    1, 1000);
        
        camera.position.set(0, 5, 40);
        
        createGeometry();
        
        // create the renderer   
        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);
        
    };
    ///////////////////////////////////////////////
    init();
    
    