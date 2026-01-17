/**
d.	Determine average charging time by charging type
    For example, 
    Input: Mobile Charging
    Output: 6.604 hours
 */
export function q4(data, search) {
    //Initialize variables
    let totalChargeTime = 0;
    let entries = 0;
    //Loop through the dataset
    for (const car of data) {
        //Find the charging type
        if (car.Charging_Type === search) {
            //Add all the charging time for the charge type
            totalChargeTime += car.Charge_Time_hr;
            entries++;
        }
    }
    //Find the average time for that charge type
    const average = (totalChargeTime / entries).toFixed(3);
    return `${average} hours`;
}

//Module Test
/*
import { loadTestData } from "../loadData.js";

const data = await loadTestData();

const answer = q4(data, "Mobile Charging");

console.log(answer);
*/
