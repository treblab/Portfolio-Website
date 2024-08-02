import * as THREE from 'three';

class PathAnimation {
    constructor(object, points, pathLoop = true, duration = 2000, speed = 200, rotateOnPath = true, initialDelay = 0) {
        this.helperObject = new THREE.Object3D(); // Invisible helper object - useful when object is a component of another
        this.targetObject = object; // The actual object to animate
        this.loop = pathLoop;
        this.curve = new THREE.CatmullRomCurve3(points, pathLoop);
        this.duration = duration;
        this.clock = new THREE.Clock(false);
        this.speed = speed;
        this.rotateOnPath = rotateOnPath;
        this.initialDelay = initialDelay;
    }

    start() {
        setTimeout(() => {
            this.clock.start();
        }, this.initialDelay);
    }

    update() {
        const elapsed = this.clock.getElapsedTime();
        const t = ((elapsed * this.speed) % this.duration) / this.duration;
        const position = this.curve.getPointAt(t);
        this.helperObject.position.copy(position);

        if (this.rotateOnPath) {
            const tangent = this.curve.getTangentAt(t).normalize();
            this.helperObject.lookAt(position.clone().add(tangent));
        }

        // Apply helper object's transformation to the target object
        this.targetObject.position.copy(this.helperObject.position);
        this.targetObject.rotation.copy(this.helperObject.rotation);
    }

    stop() {
        this.clock.stop();
    }
}
export default PathAnimation;
