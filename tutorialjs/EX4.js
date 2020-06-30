let scene, camera, renderer, shape;
let ADD = 0.08;

let createGeometry = function(){
    let geometry = new THREE.Geometry();

    // geometry.vertices.push( new THREE.Vector3(0, 0, 0));
    // geometry.vertices.push( new THREE.Vector3(5, 0, 0));
    // geometry.vertices.push( new THREE.Vector3(2, 4, 3));
    // geometry.vertices.push( new THREE.Vector3(2, 4, -3));
    
    geometry.vertices.push( new THREE.Vector3(4,0,-2));
    geometry.vertices.push( new THREE.Vector3(6,2,-2));
    geometry.vertices.push( new THREE.Vector3(4,2,-2));

    geometry.vertices.push( new THREE.Vector3(2,2,-2));

    geometry.vertices.push( new THREE.Vector3(4,4,-2));
    


    // geometry.vertices.push( new THREE.Vector3(0,0,2));
    // geometry.vertices.push( new THREE.Vector3(1, 2, -2));

    const face1 = new THREE.Face3(0, 1, 2);
    // face1.color= 0xB2A8A6;
    face1.color= new THREE.Color(0xB2A8A6);

    const face2 = new THREE.Face3(2, 3, 0);
    face2.color = new THREE.Color(0xB2A8A6);

    const face3 = new THREE.Face3(4, 3, 2);
    face3.color = new THREE.Color(0xEBE4E3);

    const face4 = new THREE.Face3(4, 2, 1);
    face4.color = new THREE.Color(0xEBE4E3);

    geometry.faces.push(face1);
    geometry.faces.push(face2);
    geometry.faces.push(face3);
    geometry.faces.push(face4);

    let material = new THREE.MeshBasicMaterial({color: 0xffffff,vertexColors: true,side: THREE.FrontSide});
    shape = new THREE.Mesh( geometry, material);
    
    scene.add(shape);
}

// set up the environment - 
// initiallize scene, camera, objects and renderer
let init = function() {
    // 1. create the scene
    // ....
    scene= new THREE.Scene();
    // scene.background = new THREE.Color(0xababab);
    scene.background = new THREE.Color(0x000000);
    
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
    
    renderer.render(scene, camera);
    // shape.position.y += ADD;
    // shape.rotation.z += ADD;
    requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();
mainLoop();