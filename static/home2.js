import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';
import { A as A_ISL } from 'A_ISL';
import { B as B_ISL } from 'B_ISL';
import { C as C_ISL } from 'C_ISL';
import { D as D_ISL } from 'D_ISL';
import { E as E_ISL } from 'E_ISL';
import { F as F_ISL } from 'F_ISL';
import { G as G_ISL } from 'G_ISL';
import { H as H_ISL } from 'H_ISL';
import { I as I_ISL } from 'I_ISL';
import { J as J_ISL } from 'J_ISL';
import { K as K_ISL } from 'K_ISL';
import { L as L_ISL } from 'L_ISL';
import { M as M_ISL } from 'M_ISL';
import { N as N_ISL } from 'N_ISL';
import { O as O_ISL } from 'O_ISL';
import { P as P_ISL } from 'P_ISL';
import { Q as Q_ISL } from 'Q_ISL';
import { R as R_ISL } from 'R_ISL';
import { S as S_ISL } from 'S_ISL';
import { T as T_ISL } from 'T_ISL';
import { U as U_ISL } from 'U_ISL';
import { V as V_ISL } from 'V_ISL';
import { W as W_ISL } from 'W_ISL';
import { X as X_ISL } from 'X_ISL';
import { Y as Y_ISL } from 'Y_ISL';
import { Z as Z_ISL } from 'Z_ISL';
import { A as A_ASL } from 'A_ASL';
import { B as B_ASL } from 'B_ASL';
import { C as C_ASL } from 'C_ASL';
import { D as D_ASL } from 'D_ASL';
import { E as E_ASL } from 'E_ASL';
import { F as F_ASL } from 'F_ASL';
import { G as G_ASL } from 'G_ASL';
import { H as H_ASL } from 'H_ASL';
import { I as I_ASL } from 'I_ASL';
import { J as J_ASL } from 'J_ASL';
import { K as K_ASL } from 'K_ASL';
import { L as L_ASL } from 'L_ASL';
import { M as M_ASL } from 'M_ASL';
import { N as N_ASL } from 'N_ASL';
import { O as O_ASL } from 'O_ASL';
import { P as P_ASL } from 'P_ASL';
import { Q as Q_ASL } from 'Q_ASL';
import { R as R_ASL } from 'R_ASL';
import { S as S_ASL } from 'S_ASL';
import { T as T_ASL } from 'T_ASL';
import { U as U_ASL } from 'U_ASL';
import { V as V_ASL } from 'V_ASL';
import { W as W_ASL } from 'W_ASL';
import { X as X_ASL } from 'X_ASL';
import { Y as Y_ASL } from 'Y_ASL';
import { Z as Z_ASL } from 'Z_ASL';


export const ISLMap = {
  A: A_ISL(),
  B: B_ISL(),
  C: C_ISL(),
  D: D_ISL(),
  E: E_ISL(),
  F: F_ISL(),
  G: G_ISL(),
  H: H_ISL(),
  I: I_ISL(),
  J: J_ISL(),
  K: K_ISL(),
  L: L_ISL(),
  M: M_ISL(),
  N: N_ISL(),
  O: O_ISL(),
  P: P_ISL(),
  Q: Q_ISL(),
  R: R_ISL(),
  S: S_ISL(),
  T: T_ISL(),
  U: U_ISL(),
  V: V_ISL(),
  W: W_ISL(),
  X: X_ISL(),
  Y: Y_ISL(),
  Z: Z_ISL()
};
export const ASLMap = {
  A: A_ASL(),
  B: B_ASL(),
  C: C_ASL(),
  D: D_ASL(),
  E: E_ASL(),
  F: F_ASL(),
  G: G_ASL(),
  H: H_ASL(),
  I: I_ASL(),
  J: J_ASL(),
  K: K_ASL(),
  L: L_ASL(),
  M: M_ASL(),
  N: N_ASL(),
  O: O_ASL(),
  P: P_ASL(),
  Q: Q_ASL(),
  R: R_ASL(),
  S: S_ASL(),
  T: T_ASL(),
  U: U_ASL(),
  V: V_ASL(),
  W: W_ASL(),
  X: X_ASL(),
  Y: Y_ASL(),
  Z: Z_ASL()
};
let botPath = 'static/Models/Munni.glb';
let speed = 0.1;
let pause = 800;
let animations = [];
let scene, camera, renderer, avatar, flag = false, pending = false;
const canvasDiv = document.getElementById('canvas2');
const textInput = document.getElementById('speakText2');
const speedSlider = document.getElementById('speed-slider');
const pauseSlider = document.getElementById('pause-slider');
const speedVal = document.getElementById('speed-value');
const pauseVal = document.getElementById('pause-value');

function init()
{
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);
  const light = new THREE.SpotLight(0xffffff, 20);
  light.position.set(0, 3, 3);
  scene.add(light);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  document.getElementById("SignToSpeechContent").style.display = "none";
  document.getElementById("SpeechToSignContent").style.display = "block";
  camera = new THREE.PerspectiveCamera(30, (document.getElementById("speechToSignAnimation").clientWidth*0.5) / (window.innerHeight - 50), 0.1, 1000);
  renderer.setSize(document.getElementById("speechToSignAnimation").clientWidth*0.5, window.innerHeight - 50);
  document.getElementById("SpeechToSignContent").style.display = "none";
  document.getElementById("SignToSpeechContent").style.display = "block";
  canvasDiv.innerHTML = '';
  canvasDiv.appendChild(renderer.domElement);
  camera.position.z = 2;
  camera.position.y = 1.3;
  loadAvatar(botPath);
}
function loadAvatar(path)
{
  const loader = new GLTFLoader();
  loader.load(path, (gltf) => {
    if (avatar) scene.remove(avatar);
    gltf.scene.traverse((child) =>
    {
      if (child.isSkinnedMesh) child.frustumCulled = false;
    });
    avatar = gltf.scene;
    scene.add(avatar);
    animations = [[["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"],
    ["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"],
    ["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"],
    ["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]
  ]];
    animate();
  });
}
function animate()
{
  if (!animations.length)
  {
    pending = false;
    return;
  }
  requestAnimationFrame(animate);
  if (animations[0].length)
  {
    if (!flag)
    {
      for (let i = 0; i < animations[0].length;)
      {
        let [boneName, action, axis, limit, sign] = animations[0][i];
        if (sign === '+' && avatar.getObjectByName(boneName)[action][axis] < limit)
        {
          avatar.getObjectByName(boneName)[action][axis] += speed;
          avatar.getObjectByName(boneName)[action][axis] = Math.min(avatar.getObjectByName(boneName)[action][axis], limit);
          i++;
        }
        else if (sign === '-' && avatar.getObjectByName(boneName)[action][axis] > limit)
        {
          avatar.getObjectByName(boneName)[action][axis] -= speed;
          avatar.getObjectByName(boneName)[action][axis] = Math.max(avatar.getObjectByName(boneName)[action][axis], limit);
          i++;
        }
        else
        {
          animations[0].splice(i, 1);
        }
      }
    }
  }
  else
  {
    flag = true;
    setTimeout(() => { flag = false }, pause);
    animations.shift();
  }
  renderer.render(scene, camera);
}
function signText()
{
  const str = textInput.value.toUpperCase().replace(/[^a-zA-Z\s]/g, '');
  const words = str.split(' ');
  for (let word of words)
  {
    for (const [i, ch] of [...word].entries())
    {
      var temp;
      if(window.sessionStorage.getItem("SpeechDataset")==='1')
      {
        temp = JSON.parse(JSON.stringify(ASLMap[ch]));;
      }
      else if(window.sessionStorage.getItem("SpeechDataset")==='2')
      {
        temp = JSON.parse(JSON.stringify(ISLMap[ch]));;
      }
      animations.push(...temp);
      if(pending === false)
      {
        pending = true;
        animate();
      }
    }
  }
  if (!pending)
  {
    pending = true;
    animate();
  }
}
document.getElementById('start-btn').addEventListener('click', signText);
speedSlider.addEventListener('input', (e) => {
  speed = parseFloat(e.target.value);
  speedVal.textContent = speed.toFixed(2);
});
pauseSlider.addEventListener('input', (e) => {
  pause = parseInt(e.target.value);
  pauseVal.textContent = pause;
});
init();