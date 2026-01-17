/**
d.	Determine average charging time by charging type
    For example, 
    Input: Mobile Charging
    Output: 6.604 hours
 */

export function q4(data, search) {
    let totalChargeTime = 0;
    let entries = 0;
    for (const car of data) {
        if (car.Charging_Type === search) {
            totalChargeTime += car.Charge_Time_hr;
            entries++;
        }
    }
    const average = (totalChargeTime / entries).toFixed(3);
    return `${average} hours`;
}

//Module Test
/*
import { loadData } from "../loadTestData.js";

const data = await loadData();

const answer = q4(data, "Mobile Charging");

console.log(answer);
*/
