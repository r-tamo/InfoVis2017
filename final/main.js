function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    
    var smin = volume.min_value;
    var smax = volume.max_value;
    
    screen.init( volume, {
        width: window.innerWidth*0.8,
        targetDom: document.getElementById('display'),
	
        enableAutoResize: false
    });
    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var c_value = 0;
    var surfaces = Isosurfaces( volume, isovalue,c_value );
    screen.scene.add( surfaces );

    
	
    document.getElementById('value').addEventListener('mousemove', function() {
                var value = +document.getElementById('value').value;
        value = Math.round(KVS.Mix( smin, smax, value ));
        document.getElementById('label').innerText = value ;
	
    });

    document.getElementById('change-isovalue-button').addEventListener('click', function() {
	screen.scene.remove( surfaces );
        var value = +document.getElementById('value').value;
        c_value = Math.round(KVS.Mix( smin, smax, value ));
	var surfaces = Isosurfaces( volume, isovalue,c_value );
	screen.scene.add( surfaces );
    });
    

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });

    screen.loop();
}
