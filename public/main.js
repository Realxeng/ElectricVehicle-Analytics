import { q1 } from "./q1.js";
import { q2 } from "./q2.js";
import { q3 } from "./q3.js";
import { q4 } from "./q4.js";
import { q5 } from "./q5.js";
import { q6 } from "./q6.js";

const loadingScreen = document.getElementById("loadingScreen");

async function loadData() {
    try {
        loadingScreen.style.display = "flex";
        const res = await fetch("/data");
        data = await res.json();
        console.log(`Loaded ${data.length} records`);
    } catch (err) {
        console.error("Failed to fetch dataset:", err);
    } finally {
        loadingScreen.style.display = "none";
    }
}

function question1() {
    const input = document.getElementById("q1input").value;
    document.getElementById("q1Output").textContent = q1(data, input);
}

function question2() {
    const input = document.getElementById("q2input").value;
    document.getElementById("q2Output").textContent = q2(data, input);
}

function question3() {
    const input = document.getElementById("q3input").value;
    document.getElementById("q3Output").textContent = q3(data, input);
}

function question4() {
    const input = document.getElementById("q4input").value;
    document.getElementById("q4Output").textContent = q4(data, input);
}

function question5() {
    document.getElementById("q5Output").textContent = q5(data, 2025);
}

function question6() {
    document.getElementById("q6Output").textContent = q6(data);
}

let data = [];
loadData();

document.getElementById("question1").addEventListener("click", question1);
document.getElementById("question2").addEventListener("click", question2);
document.getElementById("question3").addEventListener("click", question3);
document.getElementById("question4").addEventListener("click", question4);
document.getElementById("question5").addEventListener("click", question5);
document.getElementById("question6").addEventListener("click", question6);
