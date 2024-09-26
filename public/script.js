const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat_container");
const freeTry_element = document.getElementById("freeTry");
const remove_element = document.getElementById("form_input_data");

let loadInterval;

function loader(element) {
  element.textContent = "";

  loadInterval = setInterval(() => {
    // Update the text content of the loading indicator
    element.textContent += ".";

    // If the loading indicator has reached three dots, reset it
    if (element.textContent === "....") {
      element.textContent = "";
    }
  }, 300);
}

function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

function chatStripe(isAi, value, uniqueId) {
  return `
        <div class="wrapper ${isAi && "ai"}">
            <div class="chat">
              <div class="profile">
                      <img 
                        src=${isAi ? "bot.svg" : "user.svg"} 
                        alt="${isAi ? "bot" : "user"}" 
                      />
                  </div>
                <div class="message" id=${uniqueId}>${value}</div>
            </div>
        </div>
    `;
}

export const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const userPrompt = data.get("prompt").trim();

  // Check if the user provided input
  if (!userPrompt) {
    alert("Please enter a prompt");
    return;
  }

  // User's chatstripe
  chatContainer.innerHTML += chatStripe(false, userPrompt);
  form.reset(); // Clear the textarea input

  // Bot's chatstripe
  const uniqueId = generateUniqueId();
  chatContainer.innerHTML += chatStripe(true, " ", uniqueId);
  chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom

  const messageDiv = document.getElementById(uniqueId);
  loader(messageDiv); // Show loader

  try {
    const response = await fetch("http://localhost:4000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: userPrompt,
      }),
    });

    clearInterval(loadInterval);
    messageDiv.innerHTML = " ";

    if (response.ok) {
      const data = await response.json();
      const parsedData = data.bot.trim(); // Parse the response

      typeText(messageDiv, parsedData); // Show response typing effect

      // Handle free trial tracking logic (unchanged)
      const freeTrail = localStorage.getItem("freeTrail");
      const FREE_TRAIL = JSON.parse(freeTrail);

      if (FREE_TRAIL == 1) {
        localStorage.setItem("freeTrail", JSON.stringify(2));
        freeTry_element.innerHTML = 2;
      } else if (FREE_TRAIL == 2) {
        localStorage.setItem("freeTrail", JSON.stringify(3));
        freeTry_element.innerHTML = 3;
      } else if (FREE_TRAIL == 3) {
        localStorage.setItem("freeTrail", JSON.stringify(4));
        freeTry_element.innerHTML = 4;
      } else if (FREE_TRAIL == 4) {
        localStorage.setItem("freeTrail", JSON.stringify(5));
        freeTry_element.innerHTML = 5;
        remove_element.remove();
      } else if (FREE_TRAIL == "Pro Member") {
        console.log("Pro Member");
      } else {
        localStorage.setItem("freeTrail", JSON.stringify(1));
        freeTry_element.innerHTML = 1;
      }
    } else {
      const err = await response.text();
      messageDiv.innerHTML = "Something went wrong";
      console.error(err);
    }
  } catch (error) {
    clearInterval(loadInterval);
    messageDiv.innerHTML = "Failed to fetch response from server.";
    console.error("Fetch error:", error);
  }
};

form.addEventListener("submit", handleSubmit);
form.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    handleSubmit(e);
  }
});
