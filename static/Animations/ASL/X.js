export const X = () => {

  let finalanimations = [];
    let animations2 = [];

    animations2.push(["mixamorigLeftForeArm", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigRightArm", "rotation", "z", Math.PI/4, "-"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "y", 0, "-"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "z", -3*Math.PI/4, "-"]);
    animations2.push(["mixamorigRightHand", "rotation", "x", -Math.PI/4, "-"]);

    // Curl middle, ring, pinky

    animations2.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "+"]);
    animations2.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI / 3, "+"]);
    animations2.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI / 3, "+"]);

    animations2.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI / 2, "+"]);
    animations2.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI / 2, "+"]);
    animations2.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI / 2, "+"]);

    animations2.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI / 2, "+"]);
    animations2.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI / 2, "+"]);
    animations2.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI / 2, "+"]);

    animations2.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI / 2, "+"]);
    animations2.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI / 2, "+"]);
    animations2.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI / 2, "+"]);

    animations2.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI / 6, "+"]);  // Lift thumb base
    animations2.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]); // Rotate across palm
    animations2.push(["mixamorigRightHandThumb2", "rotation", "x", Math.PI / 10, "+"]); // Subtle bend
    animations2.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI / 3, "-"]);
    animations2.push(["mixamorigRightHandThumb3", "rotation", "x", Math.PI / 12, "+"]); // Tip of thumb curves in

    finalanimations.push(animations2);

    // Reset pose
    animations2 = [];

    animations2.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);

    animations2.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);

    animations2.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);

    animations2.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    
    animations2.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations2.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigRightHandThumb2", "rotation", "x", 0, "-"]);
    animations2.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigRightHandThumb3", "rotation", "x", 0, "-"]);

    animations2.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    animations2.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    animations2.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);

    finalanimations.push(animations2);
    return finalanimations;
}
