export const V = () => {

  let finalanimations = [];

    let animations2 = []

    animations2.push(["mixamorigRightHandIndex1", "rotation", "y", Math.PI/16, "+"]);
    animations2.push(["mixamorigRightHandMiddle1", "rotation", "y", -Math.PI/16, "-"]);
    animations2.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations2.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations2.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
    animations2.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations2.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations2.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations2.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/3, "-"]);
    animations2.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/3, "-"]);

    animations2.push(["mixamorigRightHand", "rotation", "z", -Math.PI/2.3, "-"]);
    animations2.push(["mixamorigRightHand", "rotation", "y", -Math.PI/5, "-"]);

    animations2.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/2.65, "+"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/30, "+"]);

    animations2.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);

    finalanimations.push(animations2);

    animations2 = []

    animations2.push(["mixamorigRightHandIndex1", "rotation", "y", 0, "-"]);
    animations2.push(["mixamorigRightHandMiddle1", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

    animations2.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    animations2.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);

    animations2.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);

    animations2.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

    finalanimations.push(animations2);

    return finalanimations;
    
}