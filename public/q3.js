/**
c.	Identify the model with the longest driving range for each manufacturer.
    For example, 
    Input: Mini
    Output: 594km
 */

export function q3(data, search) {
    let longest = { Range_km: 0 };
    for (const car of data) {
        if (car.Manufacturer === search) {
            if (car.Range_km > longest.Range_km) {
                longest = car;
            }
        }
    }
    return `${longest.Range_km}km`;
}

//Module Test
/*
import { loadTestData } from "../loadData.js";

const data = await loadTestData();

const answer = q3(data, "Tesla");

console.log(JSON.stringify(answer, null, 2));
*/
