export const Z = () => {

  let finalanimations = [];

    let animations2 = []

    animations2.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/3, "+"]);
    animations2.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/3, "+"]);
    animations2.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/3, "+"]);
    animations2.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/3, "+"]);

    animations2.push(["mixamorigRightHand", "rotation", "z", -Math.PI/10, "-"]);
    animations2.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

    animations2.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/7, "+"]); //7
    animations2.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
    
    animations2.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]);
    animations2.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.7, "+"]);
    
    animations2.push(["mixamorigLeftHandThumb1", "rotation", "x", -Math.PI/3, "-"]);

    animations2.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"]);
    animations2.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/9, "-"]);

    animations2.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations2.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"]);

    animations2.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/5, "-"]);
    animations2.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.7, "-"]);

    finalanimations.push(animations2);


    animations2 = []

    animations2.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);

    animations2.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    animations2.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);

    animations2.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]); //7
    animations2.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    
    animations2.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations2.push(["mixamorigRightArm", "rotation", "z", 1.0471975511965976, "-"]);
    
    animations2.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "+"]);

    animations2.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);

    animations2.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    animations2.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);

    animations2.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    animations2.push(["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"]);

    finalanimations.push(animations2);

    return finalanimations;
}