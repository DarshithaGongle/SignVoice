export const F = () => {

    let finalanimations = [];
    let animations2 = [];

    animations2.push(["mixamorigLeftForeArm", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigRightArm", "rotation", "z", Math.PI/4, "-"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "y", 0, "-"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "z", -3*Math.PI/4, "-"]);
    animations2.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);

    // F - Index curled to form circle with thumb, others straight
    animations2.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI / 1.8, "+"]);
    animations2.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI / 1.8, "+"]);
    animations2.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI / 1.8, "+"]);

    // Thumb curves toward index finger (but not too much)
    animations2.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI / 10, "+"]);
    animations2.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI / 4, "-"]);
    animations2.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI / 10, "-"]);

    finalanimations.push(animations2);

    // Reset pose
    animations2 = [];

    animations2.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    animations2.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);

    animations2.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations2.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    animations2.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

    animations2.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    animations2.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    animations2.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    animations2.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);

    finalanimations.push(animations2);
    return finalanimations;

}