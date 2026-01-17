/**
a.  Display the total number of vehicles produced by each manufacturing company.
    For example,
    o	Input: Mini ; output : 72
    o	Input: Mini Electric ; output: 19
 */
export function q1(dataset, search = "") {
    //Initialize count variable
    let count = 0;
    //Loop through the dataset
    for (const car of dataset) {
        //Find the manufacturer
        if (car.Manufacturer.toLowerCase().includes(search.toLowerCase())) {
            //Add the vehicle count
            count++;
        }
    }
    //Return the total number of vehicles
    return count;
}

//Module Test
/*
import { loadTestData } from "../loadData.js";

const data = await loadTestData();

const count = q1(data, "Mini");

console.log(count);
*/
