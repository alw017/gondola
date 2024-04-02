import * as THREE from 'three';
import { Resizer } from './Resizer.js'

class Unified {

    constructor(container) {
    

    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
        this.render();
    };


    animate();
    }

    animate() {
        requestAnimationFrame( animate );

        //cube.rotation.x += 0.01;
        //cube.rotation.y += 0.01;
        uniforms.u_time.value = clock.getElapsedTime();

        if(resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        renderer.render( scene, camera );
    }
}

export { Unified };

