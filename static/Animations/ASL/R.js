export const R = () => {

  let finalanimations = [];
    let animations2 = [];

    animations2.push(["mixamorigLeftForeArm", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigRightArm", "rotation", "z", Math.PI/4, "-"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "y", 0, "-"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "z", -3*Math.PI/4, "-"]);
    animations2.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);

    // Index finger (extended)
    animations2.push(["mixamorigRightHandIndex1", "rotation", "y", -Math.PI/12, "-"]);

    // Middle finger (extended)
    animations2.push(["mixamorigRightHandMiddle1", "rotation", "y", +Math.PI/12, "+"]);

    // Ring finger (curled)
    animations2.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI / 2, "+"]);
    animations2.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI / 2, "+"]);
    animations2.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI / 2, "+"]);

    // Pinky finger (curled)
    animations2.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI / 2, "+"]);
    animations2.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI / 2, "+"]);
    animations2.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI / 2, "+"]);

    // Thumb (touching middle finger base)
    animations2.push(["mixamorigRightHandThumb1", "rotation", "y", - Math.PI/6, "-"]);
    animations2.push(["mixamorigRightHandThumb2", "rotation", "y", - Math.PI/6, "-"]);

    finalanimations.push(animations2);

    // Reset pose
    animations2 = [];

    animations2.push(["mixamorigRightHandIndex1", "rotation", "y", 0, "+"]);

    animations2.push(["mixamorigRightHandMiddle1", "rotation", "y", 0, "-"]);

    animations2.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);

    animations2.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);

    animations2.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);

    animations2.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    animations2.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    animations2.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);

    finalanimations.push(animations2);
    return finalanimations;
}
