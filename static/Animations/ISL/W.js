export const W = () => {

  let finalanimations = [];

    let animations2 = []
    animations2.push(["mixamorigRightHandIndex1", "rotation", "y", Math.PI/16, "+"]);
    animations2.push(["mixamorigRightHandRing1", "rotation", "y", -Math.PI/12, "-"]);
    animations2.push(["mixamorigRightHandPinky1", "rotation", "y", -Math.PI/8, "-"]);
    animations2.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/5, "+"]);
    animations2.push(["mixamorigRightHandThumb2", "rotation", "z", -Math.PI/6, "-"]);
    animations2.push(["mixamorigRightHandThumb3", "rotation", "y", Math.PI/6, "+"]);

    animations2.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);

    animations2.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);

    animations2.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.4, "+"]);

    animations2.push(["mixamorigLeftHandIndex1", "rotation", "y", -Math.PI/16, "-"]);
    animations2.push(["mixamorigLeftHandRing1", "rotation", "y", Math.PI/8, "+"]);
    animations2.push(["mixamorigLeftHandPinky1", "rotation", "y", Math.PI/8, "+"]);
    animations2.push(["mixamorigLeftHandThumb1", "rotation", "y", -Math.PI/5, "-"]);
    animations2.push(["mixamorigLeftHandThumb2", "rotation", "z", Math.PI/6, "+"]);
    animations2.push(["mixamorigLeftHandThumb3", "rotation", "y", -Math.PI/6, "-"]);

    animations2.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/24, "-"]);
    animations2.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/6, "-"]);

    animations2.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);

    animations2.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.4, "-"]);

    finalanimations.push(animations2);


    animations2 = []
    animations2.push(["mixamorigRightHandIndex1", "rotation", "y", 0, "-"]);
    animations2.push(["mixamorigRightHandRing1", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigRightHandPinky1", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
    animations2.push(["mixamorigRightHandThumb2", "rotation", "z", 0, "+"]);
    animations2.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "-"]);

    animations2.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);

    animations2.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);

    animations2.push(["mixamorigRightArm", "rotation", "z", 1.0471975511965976, "-"]);

    animations2.push(["mixamorigLeftHandIndex1", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigLeftHandRing1", "rotation", "y", 0, "-"]);
    animations2.push(["mixamorigLeftHandPinky1", "rotation", "y", 0, "-"]);
    animations2.push(["mixamorigLeftHandThumb1", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigLeftHandThumb2", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigLeftHandThumb3", "rotation", "y", 0, "+"]);

    animations2.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);

    animations2.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);

    animations2.push(["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"]);

    finalanimations.push(animations2);

    return finalanimations;
}
