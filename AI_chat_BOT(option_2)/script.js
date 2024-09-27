import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
];

const API_KEY = "AIzaSyAmMjOt1FYXaSwRf6BEPUNdt1WFw8Rg2pw";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings });

let chatHistory = [];
// function storeChatHistory() {
//     localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
// }

// function getChatHistory() {
//     return JSON.parse(localStorage.getItem('chatHistory')) || [];
// }
// function clearChatHistory() {
//     localStorage.removeItem('chatHistory');
// }
function deleteChatDiv() {
    const child = document.querySelector("#chat-box");
    child.innerHTML = '';
    chatTitle.value = '';
}
createOpenChatDiv();

function createOpenChatDiv() {
    const container = document.querySelector(".openContainer");
    var histories = getAllChatHistories();
    if (isEmpty(histories) == 0) {

        for (const name in histories) {
            var buttonElement = document.createElement("button");
            buttonElement.innerHTML = '<i class="fa-solid fa-up-right-from-square"></i> ' + name;
            buttonElement.className = name;
            container.appendChild(buttonElement);
            buttonElement.addEventListener("click", () => {
                deleteChatDiv();
                var openHistory = getChatHistoryByName(name);
                chatHistory = [];
                chatTitle.value = name;
                chatHistory = openHistory;
                let index = 0;
                openHistory.forEach(element => {
                    console.log(index);
                    if (index > 1) {
                        if (index == 3) {
                            index = 0;
                        }
                        else {
                            index++;
                        }
                    }
                    else {
                        appendMessage(element.role, element.parts[0].text);
                        index++;
                    }
                    // console.log(element);
                });
            });

        }

    }


    // document.getElementsByTagName("body")[0].appendChild(container);
}

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

function closeOpenChatDiv() {
    const openChatDiv = document.querySelector(".openContainer");
    if (openChatDiv) {
        openChatDiv.innerHTML = '<button id="newBtn" title="Create a new Chat"><i class="fa-regular fa-edit"></i> New Chat</button><button style="position: absolute; bottom: 110px;" id="import-btn" title="Import all the chats from a file"><label for="fileInput"><i class="fa-solid fa-download"></i> Import the Chats<input style="display: none;" type="file" accept=".json" id="fileInput"></label></button><button style="position: absolute; bottom: 60px;" id="export-btn" title="Export all the chats to a file"><i class="fa-solid fa-upload"></i> Export the Chats</button><button style="position: absolute; bottom: 10px;" id="refresh-btn" title="Delete all the chats"><i class="fa-solid fa-trash"></i> Delete  All Chats</button>';
    }
    const refreshButton = document.getElementById("refresh-btn");
    const createBtn = document.getElementById("newBtn");
    createBtn.addEventListener('click', deleteChatDiv);
    refreshButton.addEventListener("click", () => {
        let response = confirm("Do you want to delete all the chats?");
        if (response == true) {
            clearAllChatHistories();
        }
    });
    const exportButton = document.getElementById("export-btn");
    exportButton.addEventListener("click", exportChatHistories);
    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        importChatHistories(file);
    });
}
// Function to store a chat history with a given name in localStorage
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", () => {
    storeChatHistory();
});
const clearBtn = document.getElementById("clear-btn");
const refreshButton = document.getElementById("refresh-btn");
const createBtn = document.getElementById("newBtn");
createBtn.addEventListener('click', () => { 
    chatHistory=[];
    deleteChatDiv() });
const chatTitle = document.getElementById("chat-name");
refreshButton.addEventListener("click", () => {
    let response = confirm("Do you want to delete all the chats?");
    if (response == true) {
        clearAllChatHistories();
        closeOpenChatDiv();
        createOpenChatDiv();
    }
})
function storeChatHistory() {
    const allChatHistories = getAllChatHistories();
    var name = chatTitle.value;
    console.log(chatHistory);
    if (name == "") {
        alert("Enter a chat title... first");
        chatTitle.focus();
        return;
    }
    else {
        allChatHistories[name] = chatHistory;
        localStorage.setItem('allChatHistories', JSON.stringify(allChatHistories));
    }
    closeOpenChatDiv();
    createOpenChatDiv();
}
function exportChatHistories() {
    const allChatHistories = getAllChatHistories();
    const json = JSON.stringify(allChatHistories);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat_histories.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
const exportButton = document.getElementById("export-btn");
exportButton.addEventListener("click", exportChatHistories);
// exportChatHistories();
// Function to retrieve a specific chat history by name from localStorage

function importChatHistories(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const importedData = JSON.parse(event.target.result);
        localStorage.setItem('allChatHistories', JSON.stringify(importedData));
        closeOpenChatDiv();
        createOpenChatDiv();
        // Optionally, update the UI to reflect the imported chat histories
    };
    reader.readAsText(file);

}


// Import chat histories from file input
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    importChatHistories(file);
});


function getChatHistoryByName(name) {
    const allChatHistories = getAllChatHistories();
    return allChatHistories[name] || [];
}

// Function to retrieve all chat histories from localStorage
function getAllChatHistories() {
    const storedChatHistories = localStorage.getItem('allChatHistories');
    return storedChatHistories ? JSON.parse(storedChatHistories) : {};
}

// Function to clear a specific chat history by name from localStorage
function clearChatHistoryByName(name) {
    const allChatHistories = getAllChatHistories();
    delete allChatHistories[name];
    localStorage.setItem('allChatHistories', JSON.stringify(allChatHistories));
}

// Function to clear all chat histories from localStorage
function clearAllChatHistories() {
    localStorage.removeItem('allChatHistories');
}

// Function to search for chat history by name
function searchChatHistoryByName(name) {
    const allChatHistories = getAllChatHistories();
    const matches = Object.keys(allChatHistories).filter(key => key.includes(name));
    return matches.map(name => ({ name, chatHistory: allChatHistories[name] }));
}

// let chatHistory = getChatHistory();
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
chatHistory.forEach(element => {
    appendMessage(element.role, element.parts[0].text);
});

clearBtn.addEventListener("click", () => {
    if (chatTitle.value) {
        clearChatHistoryByName(chatTitle.value);
        chatHistory = [];
        location.reload();
    }
});
function appendMessage(role, text) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const image = document.createElement("img");
    if (role === "user") {
        image.className = "user-image";
        image.setAttribute("src", "user.png");
        messageDiv.appendChild(image);
    } else {
        image.className = "assistant-image";
        image.setAttribute("src", "robot.png");
        messageDiv.appendChild(image);

    }
    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = marked.parse(text);
    if (role === "user") {
        contentDiv.className = "user-content";
    } else {
        contentDiv.className = "assistant-content";
    }
    messageDiv.appendChild(contentDiv);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}


function createLoadAnimation() {
    const messageDiv = document.createElement("div");
    messageDiv.className = "load-container";
    const contentDiv = document.createElement("div");
    const image = document.createElement("img");
    image.className = "assistant-image";
    image.setAttribute("src", "robot.png");
    messageDiv.appendChild(image);
    contentDiv.className = "assistant-content";
    var loaderDiv = document.createElement('div');
    loaderDiv.classList.add('chatbot-loader');
    for (var i = 0; i < 3; i++) {
        var dotDiv = document.createElement('div');
        dotDiv.classList.add('dot');
        loaderDiv.appendChild(dotDiv);
    }
    contentDiv.appendChild(loaderDiv);
    messageDiv.appendChild(contentDiv);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
function createImageChatDiv(source, userMessage) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message-container";
    const contentDiv = document.createElement("div");
    const image = document.createElement("img");
    image.className = "user-image";
    image.setAttribute("src", "user.png");
    messageDiv.appendChild(image);
    contentDiv.className = "user-content";
    const sentImage = document.createElement("img");
    sentImage.className = "sent-image";
    sentImage.src = source;
    contentDiv.appendChild(sentImage);
    if (userMessage != "") {
        const para = document.createElement("p");
        para.textContent = userMessage;
        para.className = "para-text";
        contentDiv.appendChild(para);
    }

    messageDiv.appendChild(contentDiv);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function deleteLoadAnimation() {
    const messageDiv = document.querySelector(".load-container");
    if (messageDiv) {
        messageDiv.remove();
    }
}
const imageInput = document.getElementById("image-input");

let imagechatHistory = [];


async function sendMessage() {
    let userMessage = userInput.value.trim();
    const imageFile = imageInput.files[0];

    if (userMessage !== "" || imageFile) {

        const image_model = genAI.getGenerativeModel({ model: "gemini-pro-vision" }); // Use gemini-pro-vision for text and image inputs

        if (imageFile) {

            const reader = new FileReader();
            reader.onload = async function (event) {
                const imageBase64 = event.target.result.split(',')[1];
                const imagePart = { inlineData: { data: imageBase64, mimeType: imageFile.type } };
                createImageChatDiv(event.target.result, userMessage);
                if (userMessage == "") {
                    userMessage = "Describe this image.";
                }
                try {
                    createLoadAnimation();

                    const chat = image_model.startChat({ history: imagechatHistory, generationConfig: { maxOutputTokens: 100 } });
                    const result = await image_model.generateContent([userMessage, imagePart]);
                    const response = await result.response;
                    const text = response.text();
                    deleteLoadAnimation();
                    appendMessage("model", text);

                    // Update chat history
                    // chatHistory.push({ role: "user", parts: [{ text: "🏞️User Sent an Image: " + userMessage }] });
                    // chatHistory.push({ role: "model", parts: [{ text }] });

                } catch (error) {
                    appendMessage("model", error.toString());
                }
            };
            reader.readAsDataURL(imageFile);
        }
        else {
            const userMessage = userInput.value.trim();
            if (userMessage != "") {
                appendMessage("user", userMessage);
            }
            createLoadAnimation();
            const chat = model.startChat({ history: chatHistory, generationConfig: { maxOutputTokens: 100000 } });
            try {
                const result = await chat.sendMessageStream(userMessage);
                let text = '';
                deleteLoadAnimation();
                appendMessage("model", "Gemini...");
                let assContent = document.getElementsByClassName("assistant-content");

                for await (const chunk of result.stream) {
                    const chunkText = chunk.text();
                    console.log(chunkText);
                    text += chunkText;
                    assContent[assContent.length - 1].innerHTML = marked.parse(text);
                }
                // const result = await chat.sendMessage(userMessage);
                // const response = await result.response;
                // const text = response.text();

                chatHistory.push({ role: "user", parts: [{ text: userMessage }] });
                chatHistory.push({ role: "model", parts: [{ text: text }] });

            } catch (error) {
                deleteLoadAnimation();
                appendMessage("model", error.toString());
            }
        }

    }

    userInput.value = "";
    imageInput.value = "";
}


sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
const startBtn = document.getElementsByClassName('speech-btn')[0];

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'en-US'; // Language
    recognition.interimResults = true;


    startBtn.addEventListener('click', function () {
        if (recognition && recognition.readyState !== 'listening') {
            recognition.start();
            startBtn.innerHTML = '<i class="fa-solid fa-ear-listen"></i>'
        }
    });
    recognition.onstart = function () {
        console.log('Speech recognition started');
        startBtn.classList.add("speech-btn-active");
    };

    recognition.onend = function () {
        console.log('Speech recognition ended');
        startBtn.innerHTML = '<i class="fa-solid fa-microphone"></i>';
        startBtn.classList.remove("speech-btn-active");
    };
    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        userInput.value = transcript;
    };
} else {
    console.error('Speech recognition not supported in this browser');
    startBtn.disabled = true;
}
//sidebar

document.getElementById("sidebarCollapse").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle('active');
});
