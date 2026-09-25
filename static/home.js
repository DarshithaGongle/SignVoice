document.documentElement.style.setProperty('--menuColor', '#493971');
window.sessionStorage.setItem("SpeechDataset", "1");
const navItems = document.querySelectorAll(".nav-item");
var bringPredictions;
var globalStream;
var video;
var canvas = document.querySelector("#canvas");
var adaptiveCanvas = document.querySelector("#adaptiveCanvas");
var interval=400;
var dataset = 1;
var microphoneClickedBool = false;
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition(), heardOutput = document.querySelector('#speakText2');
var characterCount = {};

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
    if(navItem.querySelector(".nav-text").innerHTML === "Sign to Speech")
    {
        document.documentElement.style.setProperty('--menuColor', '#493971');
        document.getElementById("SignToSpeechContent").style.display = "block";
        document.getElementById("SpeechToSignContent").style.display = "none";
        document.getElementById("DictionaryContent").style.display = "none";
        document.getElementById("GamesContent").style.display = "none";
        document.getElementById("TeamContent").style.display = "none";
    }
    else if(navItem.querySelector(".nav-text").innerHTML === "Speech to Sign")
    {
        document.documentElement.style.setProperty('--menuColor', '#f54888');
        document.getElementById("SignToSpeechContent").style.display = "none";
        document.getElementById("SpeechToSignContent").style.display = "block";
        document.getElementById("DictionaryContent").style.display = "none";
        document.getElementById("GamesContent").style.display = "none";
        document.getElementById("TeamContent").style.display = "none";
    }
    else if(navItem.querySelector(".nav-text").innerHTML === "Dictionary")
    {
        document.documentElement.style.setProperty('--menuColor', '#4343f5');
        document.getElementById("SignToSpeechContent").style.display = "none";
        document.getElementById("SpeechToSignContent").style.display = "none";
        document.getElementById("DictionaryContent").style.display = "block";
        document.getElementById("GamesContent").style.display = "none";
        document.getElementById("TeamContent").style.display = "none";
    }
    else if(navItem.querySelector(".nav-text").innerHTML === "Games")
    {
        document.documentElement.style.setProperty('--menuColor', '#e0b115');
        document.getElementById("SignToSpeechContent").style.display = "none";
        document.getElementById("SpeechToSignContent").style.display = "none";
        document.getElementById("DictionaryContent").style.display = "none";
        document.getElementById("GamesContent").style.display = "block";
        document.getElementById("TeamContent").style.display = "none";
    }
    else if(navItem.querySelector(".nav-text").innerHTML === "Team")
    {
        document.documentElement.style.setProperty('--menuColor', '#ff8c00');
        document.getElementById("SignToSpeechContent").style.display = "none";
        document.getElementById("SpeechToSignContent").style.display = "none";
        document.getElementById("DictionaryContent").style.display = "none";
        document.getElementById("GamesContent").style.display = "none";
        document.getElementById("TeamContent").style.display = "block";
    }
  });
});
function changeLanguage()
{
    var checkbox = document.getElementsByClassName("checkbox")[0];
    if(checkbox.checked==true)
    {
        dataset = 2;
    }
    else
    {
        dataset = 1;
    }
}
function handleRecognitionResponse(character)
{
    $("#predictionPanelCharacter").text(character);
    if (!character) return;
    characterCount[character] = (characterCount[character] || 0) + 1;
    if (characterCount[character] === 10)
    {
        const targetElement = document.getElementById("predictionPanelSentence");
        if (targetElement)
        {
            if(targetElement.textContent=="-")
            {
                targetElement.textContent = "";
            }
            targetElement.textContent += character;
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/suggest_words/",
                data: JSON.stringify({sentence: targetElement.textContent}),
                success: function(data)
                {
                    populateSuggestions([data['word1'], data['word2'], data['word3'], data['word4']]);
                },
                dataType: "json"
            });
        }
        for (let key in characterCount)
        {
            delete characterCount[key];
        }
    }
}
$("#startCameraButton").on("click", function(){
    if(!document.getElementById("liveVideo"))
    {
        video = document.createElement('video');
        video.setAttribute('playsinline', '');
        video.setAttribute('autoplay', '');
        video.setAttribute('muted', '');
        video.setAttribute('id', 'liveVideo');
        video.style.display="none";
        video.style.width = '640px';
        video.style.height = '480px';
        var facingMode = "user";
        var constraints = {audio: false,video: {facingMode: facingMode}};
        navigator.mediaDevices.getUserMedia(constraints).then(function success(stream){
            video.srcObject = stream;
            globalStream = stream;
        });
        $(".camera-container").css("display", "none");
        var mainContentData = document.getElementsByClassName("main-content-data")[0];
        mainContentData.appendChild(video);
        $("#startCameraButton").text("Stop recognition and reset the Prediction Panel");
        $("#startCameraButton").addClass('active');
        $("#adaptiveCanvas").css("display", "block");

        bringPredictions = setInterval(function(){
            canvas.getContext('2d').drawImage(video, 0, 0, 640, 480);
            var image_data_url = canvas.toDataURL('image/jpeg');
            adaptiveCanvas.src = image_data_url;
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/recognise/",
                data: JSON.stringify({imageData: image_data_url, dataset:dataset}),
                success: function(data)
                {
                    handleRecognitionResponse(data["prediction"]);
                },
                dataType: "json"
            });
        }, interval);
    }
    else
    {
        globalStream.getTracks().forEach(function(track){
            if (track.readyState == 'live'){
                track.stop();
            }
        });
        $("#adaptiveCanvas").css("display", "none");
        document.getElementById("liveVideo").parentNode.removeChild(document.getElementById("liveVideo"));
        clearInterval(bringPredictions);
        $(".camera-container").css("display", "block");
        $("#startCameraButton").removeClass('active');
        $("#startCameraButton").text("Start Camera and Recognise the Sign Language");
        $("#predictionPanelCharacter").text("-");
        $("#predictionPanelSentence").text("-");
    }
});
$("#moveSentenceButton").on("click", function(){
    var sentenceToMove = $("#predictionPanelSentence").text();
    if(sentenceToMove!="-")
    {
        globalStream.getTracks().forEach(function(track){
            if (track.readyState == 'live'){
                track.stop();
            }
        });
        $("#adaptiveCanvas").css("display", "none");
        document.getElementById("liveVideo").parentNode.removeChild(document.getElementById("liveVideo"));
        clearInterval(bringPredictions);
        $(".camera-container").css("display", "block");
        $("#startCameraButton").removeClass('active');
        $("#startCameraButton").text("Start Camera and Recognise the Sign Language");
        $("#predictionPanelCharacter").text("-");
        $("#predictionPanelSentence").text("-");
        $("#speakText").val(sentenceToMove);
    }
});
if (!window.speechSynthesis)
{
    $("#warning").css("display", "block");
    $("#speak").css("display", "none");
}
$("#languageOptions").change(function(){
    var language = $("#languageOptions :selected").val();
    if(language=='en')
    {
        $("#voiceOptions").html("<option data-lang='en-IN' data-name='Microsoft Heera - English (India)'>Microsoft Heera - English (India)</option><option data-lang='en-IN' data-name='Microsoft Ravi - English (India)'>Microsoft Ravi - English (India)</option>");
        $("#speakText").val(window.speakText);
    }
    else
    {
        $("#voiceOptions").html("<option data-lang='hi-IN' data-name='Google हिन्दी'>Google हिन्दी</option>");
        window.speakText = $("#speakText").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/translate/",
            data: JSON.stringify({text: $("#speakText").val(), to: "hi", from: "en"}),
            success: function(response)
            {
                $("#speakText").val(response['trans']);
            },
            dataType: "json"
        });
    }
});
$("#speak").on("submit",function(event) {
    event.preventDefault();
    var voiceSelect = document.getElementById("voiceOptions");
    var utterThis=new SpeechSynthesisUtterance($("#speakText").val());
    var selectedOption=voiceSelect.selectedOptions[0].getAttribute('data-name');
    var voices = window.speechSynthesis.getVoices();
    for(i=0;i<voices.length;i++)
    {
        if(voices[i].name===selectedOption)
        {
            utterThis.voice=voices[i];
        }
    }
    window.speechSynthesis.speak(utterThis);
});

function populateSuggestions(words) {
    const suggestionPanel = document.getElementById("suggestionPanelCharacter");
    suggestionPanel.innerHTML = ""; // Clear any existing suggestions

    words.forEach(word => {
        const wordElement = document.createElement("span");
        wordElement.textContent = word;
        wordElement.style.cursor = "pointer";
        wordElement.style.margin = "0 5px";
        wordElement.style.color = "#007bff"; // Make it look clickable
        wordElement.style.textDecoration = "underline";

        // Add click event to replace the last letter of the sentence with the clicked word
        wordElement.addEventListener("click", () => {
            const sentencePanel = document.getElementById("predictionPanelSentence");
            if (sentencePanel.textContent === "-") {
                sentencePanel.textContent = ""; // Clear the default "-"
            }

            // Remove the last word of the sentence
            const currentSentence = sentencePanel.textContent.trim();
            const lastSpaceIndex = currentSentence.lastIndexOf(" ");
            const updatedSentence = lastSpaceIndex === -1 ? "" : currentSentence.slice(0, lastSpaceIndex);

            // Add the clicked word to the sentence
            sentencePanel.textContent = updatedSentence + (updatedSentence ? " " : "") + word + " ";
        });

        suggestionPanel.appendChild(wordElement);
    });
}



function getScrollHeight(elm)
{
    var savedValue = elm.value
    elm.value = ''
    elm._baseScrollHeight = elm.scrollHeight
    elm.value = savedValue
}
document.addEventListener('input', function({target:elm}){
    if(!elm.classList.contains('autoExpand')||!elm.nodeName=='TEXTAREA')
    {
        return;
    }
    var minRows = elm.getAttribute('data-min-rows')|0, rows;
    !elm._baseScrollHeight && getScrollHeight(elm);
    elm.rows = minRows;
    rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16);
    elm.rows = minRows + rows;
});

function changeLanguage2()
{
    var checkbox = document.getElementsByClassName("checkbox2")[0];
    if(checkbox.checked==true)
    {
        window.sessionStorage.setItem("SpeechDataset", "2");
    }
    else
    {
        window.sessionStorage.setItem("SpeechDataset", "1");
    }
}
function recognitionStarter()
{
    recognition.start();
}
function microphoneClicked()
{
    microphoneClickedBool = !microphoneClickedBool;
    if(microphoneClickedBool)
    {
        recognition.start();
        recognition.addEventListener('end',recognitionStarter);
    }
    else
    {
        recognition.stop();
        recognition.removeEventListener('end', recognitionStarter);
    }
}
recognition.addEventListener('result', e => {
    const transcript = e.results[0][0].transcript;
    heardOutput.value = heardOutput.value + transcript+" ";
});

function changeLanguage3()
{
    var checkbox = document.getElementsByClassName("checkbox3")[0];
    if(checkbox.checked==true)
    {
        document.getElementById("ASLDictionary").style.display = "none";
        document.getElementById("ISLDictionary").style.display = "grid";
    }
    else
    {
        document.getElementById("ASLDictionary").style.display = "grid";
        document.getElementById("ISLDictionary").style.display = "none";
    }
}

function changeLanguage4() {
    const checkbox = document.getElementsByClassName("checkbox4")[0];
    const quizContainer = document.getElementById("quizContainer");

    if (checkbox.checked === true) {
        // ISL Quiz
        quizContainer.setAttribute("data-quiz-type", "ISL");
        loadQuizQuestions("ISL");
    } else {
        // ASL Quiz
        quizContainer.setAttribute("data-quiz-type", "ASL");
        loadQuizQuestions("ASL");
    }
}