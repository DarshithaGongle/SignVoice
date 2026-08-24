// Import animation maps and dependencies
import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';
import { ASLMap, ISLMap } from './home2.js';

let currentQuestionIndex = 0;
let quizData = [];
let score = 0;

// DOM Elements
const animationContainer = document.getElementById('animationContainer');
const optionsContainer = document.getElementById('optionsContainer');

// Animation setup
let botPath = 'static/Models/Munni.glb';
let scene, camera, renderer, avatar;
let animations = [];
let flag = false;
let pending = false;

function initQuizScene(onAvatarReady) {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    const light = new THREE.SpotLight(0xffffff, 20);
    light.position.set(0, 3, 3);
    scene.add(light);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    animationContainer.innerHTML = '';
    animationContainer.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(
        30,
        animationContainer.clientWidth / animationContainer.clientHeight,
        0.1,
        1000
    );
    camera.position.set(0, 1.3, 2);

    handleResize();
    window.addEventListener('resize', handleResize);

    loadAvatar(botPath, onAvatarReady); // ✅ Pass callback
}


function handleResize() {
    const width = animationContainer.clientWidth;
    const height = animationContainer.clientHeight || window.innerHeight - 200;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}


// Load GLTF avatar
function loadAvatar(path, onLoaded) {
    const loader = new GLTFLoader();
    loader.load(path, (gltf) => {
        if (avatar) scene.remove(avatar);
        gltf.scene.traverse((child) => {
            if (child.isSkinnedMesh) child.frustumCulled = false;
        });
        avatar = gltf.scene;
        scene.add(avatar);

        animations = [[
            ["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"],
            ["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"],
            ["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"],
            ["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]
        ]];

        animate();

        // ✅ Avatar is ready — call the callback (e.g., start quiz)
        if (onLoaded) onLoaded();
    });
}


// Animate avatar joints based on pre-defined sequences
function animate() {
    if (!animations.length) {
        pending = false;
        return;
    }
    requestAnimationFrame(animate);

    if (animations[0].length) {
        if (!flag) {
            for (let i = 0; i < animations[0].length;) {
                let [boneName, action, axis, limit, sign] = animations[0][i];
                let bone = avatar.getObjectByName(boneName);
                if (!bone) {
                    i++;
                    continue;
                }

                if (sign === '+' && bone[action][axis] < limit) {
                    bone[action][axis] += 0.1;
                    bone[action][axis] = Math.min(bone[action][axis], limit);
                    i++;
                } else if (sign === '-' && bone[action][axis] > limit) {
                    bone[action][axis] -= 0.1;
                    bone[action][axis] = Math.max(bone[action][axis], limit);
                    i++;
                } else {
                    animations[0].splice(i, 1);
                }
            }
        }
    } else {
        flag = true;
        setTimeout(() => { flag = false }, 800);
        animations.shift();
    }

    renderer.render(scene, camera);
}

// Show animation for the quiz question letter
function playAnimation(letter, language) {
    const animationMap = language === "ASL" ? ASLMap : ISLMap;
    const animationData = animationMap[letter];

    if (animationData) {
        animations.push(...JSON.parse(JSON.stringify(animationData))); // Deep copy
        if (!pending) {
            pending = true;
            animate();
        }
    }
}

// Quiz initialization
function initQuiz(language) {
    quizData = generateQuizData(language);
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

// Called when changing language
function loadQuizQuestions(language) {
    initQuizScene(() => {
        initQuiz(language); // ✅ Called only after avatar is loaded
    });
}


// Create 10 random letter questions
function generateQuizData(language) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const quizQuestions = [];

    for (let i = 0; i < 10; i++) {
        const correctLetter = letters[Math.floor(Math.random() * letters.length)];
        const options = [correctLetter];

        while (options.length < 4) {
            const randomLetter = letters[Math.floor(Math.random() * letters.length)];
            if (!options.includes(randomLetter)) {
                options.push(randomLetter);
            }
        }

        options.sort(() => Math.random() - 0.5);

        quizQuestions.push({
            question: correctLetter,
            options: options,
            correct: correctLetter,
            language: language
        });
    }

    return quizQuestions;
}

// Display current question and answer buttons
function showQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        endQuiz();
        return;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    playAnimation(currentQuestion.question, currentQuestion.language);

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-button';
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

// Evaluate user selection
function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
        score++;
        alert('Correct!');
    } else {
        alert(`Wrong! The correct answer was ${currentQuestion.correct}`);
    }
    currentQuestionIndex++;
    showQuestion();
}

// End-of-quiz display
function endQuiz() {
    optionsContainer.innerHTML = `<h2 id="quizCompletion">Quiz Completed!</h2><p id="score">Your Score: ${score}/${quizData.length}</p>`;
    animationContainer.innerHTML = '';
}

// Language switch event
document.querySelector('.checkbox4').addEventListener('change', (event) => {
    const language = event.target.checked ? "ISL" : "ASL";
    loadQuizQuestions(language);
});


