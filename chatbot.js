let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatBox = document.getElementById("chatContainer");

let inputEl = document.getElementById("userInput");
let sendBtn = document.getElementById("sendMsgBtn");

sendBtn.onclick = function() {
    let userInput = inputEl.value;
    let msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-to-chatbot-container");
    chatBox.appendChild(msgContainer);

    let userEl = document.createElement("span");
    userEl.textContent = userInput;
    userEl.classList.add("msg-to-chatbot");
    msgContainer.appendChild(userEl);
    inputEl.value = "";
    msgFromBot();

}

function msgFromBot() {
    let chatbotLength = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * chatbotLength) - 1];

    let msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-from-chatbot-container");
    chatBox.appendChild(msgContainer);

    let botmsg = document.createElement("span");
    botmsg.textContent = chatbotMsg;
    botmsg.classList.add("msg-from-chatbot");
    msgContainer.appendChild(botmsg);


}