document.write("<script type='text/javascript' src='three.min.js'></script>");
function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    
    var vertices = [
	[-1, 1,-1],
	[-1,-1,-1],
	[ 1,-1,-1],
	[ 1, 1,-1],
	[ 1, 1, 1],
	[ 1,-1, 1],
	[-1, 1, 1],
	[-1,-1, 1]
    ];
    var faces = [
	[0,1,7],
	[0,7,6],
	[1,2,5],
	[7,1,5],
	[5,2,3],
	[5,3,4],
	[4,3,6],
	[6,3,0], 
	[6,7,5],
	[6,5,4],
	[2,1,0],
	[3,2,0]
    ];

    var v0 = new THREE.Vector3().fromArray( vertices[0] );
    var v1 = new THREE.Vector3().fromArray( vertices[1] );
    var v2 = new THREE.Vector3().fromArray( vertices[2] );
    var v3 = new THREE.Vector3().fromArray( vertices[3] );
    var v4 = new THREE.Vector3().fromArray( vertices[4] );
    var v5 = new THREE.Vector3().fromArray( vertices[5] );
    var v6 = new THREE.Vector3().fromArray( vertices[6] );
    var v7 = new THREE.Vector3().fromArray( vertices[7] );
    
	var geometry = new THREE.Geometry();
   
    geometry.vertices.push( v0 );
    geometry.vertices.push( v1 );
    geometry.vertices.push( v2 );
    geometry.vertices.push( v3 );
    geometry.vertices.push( v4 );
    geometry.vertices.push( v5 );
    geometry.vertices.push( v6 );
    geometry.vertices.push( v7 );

    var material = new THREE.MeshBasicMaterial();
    var num=0;

    for(num=0;num<12;num++){
	var id = faces[num];
	var f0 = new THREE.Face3( id[0] , id[1] , id[2] );
        geometry.faces.push( f0 );  

    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.FaceColors;
	geometry.faces[num].color = new THREE.Color( (0.33*num)%1, (0.08*num+0.5)%1, (0.48*num)%1 );

    }
        var cube = new THREE.Mesh( geometry, material );

        scene.add( cube );   

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
}
