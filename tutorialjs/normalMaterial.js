import { FaceNormalsHelper } from './../lib/helpers/FaceNormalsHelper.js';
let scene, camera, renderer, cube, normals, sphere, torus;
    let ADD = 0.02;
    
    let createGeometry = function() {
        //let geometry = new THREE.BoxGeometry(5, 5, 5);
        //let geometry = new THREE.SphereGeometry(5, 30, 30);
        let geometry = new THREE.TorusGeometry(5, 2, 10, 12);
                 
        let material = new THREE.MeshNormalMaterial();
        // let material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
        
      //  cube = new THREE.Mesh(geometry, material);
       // sphere = new THREE.Mesh(geometry, material);
       torus = new THREE.Mesh(geometry, material);
      
        //normals = new THREE.FaceNormalsHelper(cube, 5);
        //normals = new THREE.FaceNormalsHelper(sphere, 5);
        normals = new FaceNormalsHelper(torus, 2);
        
        //scene.add(cube);
      //  scene.add(sphere);
        scene.add(torus);
       scene.add(normals);
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
        torus.rotation.x += ADD;
        torus.rotation.y += ADD;
       normals.update();
        
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();
    
    
    
    
    
    
    
    
    
    //let geometry = new THREE.SphereGeometry(5, 30, 30);
       // let geometry = new THREE.TorusGeometry(5, 2, 10, 12);
// let material = new THREE.MeshNormalMaterial();
    
    //normals = new THREE.FaceNormalsHelper(cube, 5);
        //normals = new THREE.FaceNormalsHelper(sphere, 5);
    //sphere = new THREE.Mesh(geometry, material);