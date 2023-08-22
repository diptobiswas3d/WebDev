const promptInput = document.getElementById("prompt");
const generateBtn = document.getElementById("generate");

const API_KEY = "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";

const url = "https://api.openai.com/v1/images/generations";

const options = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt: `Psyduck Pokemon`,
    n: 2,
    size: "1024x1024",
  }),
};

fetch(url, options).then((res) => console.log(res.json));
