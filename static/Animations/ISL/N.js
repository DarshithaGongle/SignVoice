export const N = () => {

  let finalanimations = [];

    let animations2 = []

    animations2.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.8, "+"]);
    animations2.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.8, "+"]);
    animations2.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.8, "+"]);
    animations2.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations2.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations2.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations2.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/2.3, "+"]);
    animations2.push(["mixamorigRightHandThumb1", "rotation", "y", -Math.PI/25, "-"]);
    animations2.push(["mixamorigRightHandThumb2", "rotation", "z", Math.PI/2, "+"]);
    animations2.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/10, "-"]);
  
    animations2.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
  
    animations2.push(["mixamorigRightArm", "rotation", "x", -Math.PI/60, "-"]);

    animations2.push(["mixamorigLeftHandThumb1", "rotation", "z", Math.PI/12, "+"]);
    animations2.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/1.5, "-"]);
    animations2.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"]);
  
    animations2.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations2.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
  
    animations2.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/30, "-"]);
    animations2.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.6, "-"]);
  
    finalanimations.push(animations2);

    animations2 = []

    animations2.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations2.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigRightHandThumb2", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);
  
    animations2.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
  
    animations2.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

    animations2.push(["mixamorigLeftHandThumb1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    animations2.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
  
    animations2.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    animations2.push(["mixamorigLeftForeArm", "rotation", "y", -2.0943951023931953, "+"]);
  
    animations2.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    animations2.push(["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"]);
  
    finalanimations.push(animations2);
  
    return finalanimations;
}