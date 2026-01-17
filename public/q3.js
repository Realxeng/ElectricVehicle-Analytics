/**
c.	Identify the model with the longest driving range for each manufacturer.
    For example, 
    Input: Mini
    Output: 594km
 */
export function q3(data, search) {
    //Intialize variable to hold the longest range
    let longest = { Range_km: 0 };
    //Loop through the dataset
    for (const car of data) {
        //Find the manufacturer
        if (car.Manufacturer === search) {
            //Compare the range of the car with the stored longest range
            if (car.Range_km > longest.Range_km) {
                //Replace the stored car with the one with longer range
                longest = car;
            }
        }
    }
    //Return the formatted string
    return `${longest.Range_km}km`;
}

//Module Test
/*
import { loadTestData } from "../loadData.js";

const data = await loadTestData();

const answer = q3(data, "Tesla");

console.log(JSON.stringify(answer, null, 2));
*/
