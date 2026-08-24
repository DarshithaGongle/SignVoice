export const Q = () => {

  let finalanimations = [];
  let animations2 = [];

  animations2.push(["mixamorigLeftForeArm", "rotation", "y", 0, "+"]);
  animations2.push(["mixamorigRightArm", "rotation", "z", Math.PI/4, "-"]);
  animations2.push(["mixamorigRightForeArm", "rotation", "y", 0, "-"]);
  animations2.push(["mixamorigRightForeArm", "rotation", "z", -3*Math.PI/4, "-"]);
  animations2.push(["mixamorigRightHand", "rotation", "z", 2*Math.PI/3, "+"]);

// Thumb extended (maybe rotated slightly outward)
animations2.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/6, "+"]);

// Curl middle finger
animations2.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI / 2, "+"]);
animations2.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI / 2, "+"]);
animations2.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI / 2, "+"]);

// Curl ring finger
animations2.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI / 2, "+"]);
animations2.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI / 2, "+"]);
animations2.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI / 2, "+"]);

// Curl pinky
animations2.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI / 2, "+"]);
animations2.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI / 2, "+"]);
animations2.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI / 2, "+"]);

finalanimations.push(animations2);

// Reset pose
animations2 = [];

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


  animations2.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
  animations2.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
  animations2.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
  animations2.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
  animations2.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);

  finalanimations.push(animations2);
  return finalanimations;

}