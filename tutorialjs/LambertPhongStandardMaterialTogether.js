let scene, camera, renderer;
let shapes = [];
let ADD = 0.02;

let createGeometry = function () {
    let materials = [
        new THREE.MeshLambertMaterial({
            side: THREE.DoubleSide,
            color: 0x7fc5f9,
            emissive: 0x25673d,
            emissiveIntensity: 0.5
        }),
        new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: 0x7fc5f9,
            emissive: 0x25673d,
            emissiveIntensity: 0.5,
            shininess: 100,
            specular: 0x9d0a00
        }),
        new THREE.MeshStandardMaterial({
            side: THREE.DoubleSide,
            color: 0x7fc5f9,
            emissive: 0x25673d,
            emissiveIntensity: 0.4,
            metalness: 0,
            roughness: 0.5
        })
    ];

    let geometryBox = new THREE.BoxGeometry(3, 3, 3);
    let geometrySphere = new THREE.SphereGeometry(3, 30, 30);
    let geometryCone = new THREE.ConeGeometry(3, 4, 20, 1, true);

    for (let i = 0; i < 3; i++) {
        let currIndex = i * 3;
        shapes.push(new THREE.Mesh(geometryBox, materials[i]));
        shapes.push(new THREE.Mesh(geometrySphere, materials[i]));
        shapes.push(new THREE.Mesh(geometryCone, materials[i]));
        shapes[currIndex].position.x = -7;
        shapes[currIndex + 2].position.x = 7;
        for (let j = currIndex; j < currIndex + 3; j++)
            shapes[j].position.y = 7 - 7 * i;
    }



    shapes.forEach(shape => scene.add(shape));
};


// set up the environment - 
// initiallize scene, camera, objects and renderer
let init = function () {
    // create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // create an locate the camera
    camera = new THREE.PerspectiveCamera(75,
        window.innerWidth / window.innerHeight,
        1, 1000);
    camera.position.z = 20;

    // let light = new THREE.AmbientLight({color: 0xaa0000});
    // scene.add(light);
    let directionalLightUp = new THREE.DirectionalLight(0xffffff);
    scene.add(directionalLightUp);

    //  let directionalLightDown = new THREE.DirectionalLight( 0xabcdef);
    // directionalLightDown.position.y = -1;
    // scene.add(directionalLightDown);
    //scene.add(directionalLightUp);
    createGeometry();

    // create the renderer   
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

};


// main animation loop - calls 50-60 times per second.
let mainLoop = function () {
    shapes.forEach(shape => {
        shape.rotation.x += ADD;
        shape.rotation.y += ADD;
    });

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();
mainLoop();