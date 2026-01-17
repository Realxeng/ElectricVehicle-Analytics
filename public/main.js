//Import functions for all questions
import { q1 } from "./q1.js";
import { q2 } from "./q2.js";
import { q3 } from "./q3.js";
import { q4 } from "./q4.js";
import { q5 } from "./q5.js";
import { q6 } from "./q6.js";

//Get the loading screen element
const loadingScreen = document.getElementById("loadingScreen");

//Function to load and process the dataset
async function loadData() {
    try {
        loadingScreen.style.display = "flex";
        console.log(loadingText.textContent);
        const res = await fetch("/data");
        data = await res.json();
        console.log(`Loaded ${data.length} records`);
        for (const model of data) {
            const brandExists = manufacturers.includes(model.Manufacturer);
            const chargeExists = chargingTypes.includes(model.Charging_Type);
            if (brandExists && chargeExists) {
                continue;
            } else {
                if (!brandExists) manufacturers.push(model.Manufacturer);
                if (!chargeExists) chargingTypes.push(model.Charging_Type);
            }
        }
        populateManufacturers("q1input");
        populateManufacturers("q2input");
        populateManufacturers("q3input");
        populateChargingTypes("q4input");
        console.log(`Loaded ${manufacturers.length} Manufacturers`);
        console.log(`Loaded ${chargingTypes.length} Charge Types`);
    } catch (err) {
        console.error("Failed to fetch dataset:", err);
    } finally {
        loadingScreen.style.display = "none";
    }
}

//Function to fill the manufacturers drop-down menu
function populateManufacturers(input) {
    const select = document.getElementById(input);

    for (const brand of manufacturers) {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;

        select.appendChild(option);
    }
}

//Function to fill the charging types drop-down menu
function populateChargingTypes(input) {
    const select = document.getElementById(input);

    for (const type of chargingTypes) {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;

        select.appendChild(option);
    }
}

//Question 1 event handler
function question1() {
    const input = document.getElementById("q1input").value;
    document.getElementById("q1Output").textContent = q1(data, input);
}

//Question 2 event handler
function question2() {
    const input = document.getElementById("q2input").value;
    document.getElementById("q2Output").textContent = q2(data, input);
}

//Question 3 event handler
function question3() {
    const input = document.getElementById("q3input").value;
    document.getElementById("q3Output").textContent = q3(data, input);
}

//Question 4 event handler
function question4() {
    const input = document.getElementById("q4input").value;
    document.getElementById("q4Output").textContent = q4(data, input);
}

//Question 5 event handler
function question5() {
    document.getElementById("q5Output").textContent = q5(data);
}

//Question 6 event handler
function question6() {
    document.getElementById("q6Output").textContent = q6(data);
}

//Initialize all cache
let data = [];
let manufacturers = [];
let chargingTypes = [];
//Load and cache the data
await loadData();

//Initialize event listener
document.getElementById("question1").addEventListener("click", question1);
document.getElementById("question2").addEventListener("click", question2);
document.getElementById("question3").addEventListener("click", question3);
document.getElementById("question4").addEventListener("click", question4);
document.getElementById("question5").addEventListener("click", question5);
document.getElementById("question6").addEventListener("click", question6);
