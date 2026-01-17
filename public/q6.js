/**
f.	Identify the best-selling electronic vehicles in 2024
    For example, 
    Output: BYD : Seagull
 */
export function q6(data) {
    //Initialize the variable to hold the best selling vehicle
    let bestSelling = { Units_Sold_2024: 0 };
    //Loop through the dataset
    for (const car of data) {
        //Replace the stored best selling if found a higher selling vehicle
        if (car.Units_Sold_2024 > bestSelling.Units_Sold_2024) {
            bestSelling = car;
        }
    }
    //Form the answer string
    return `${bestSelling.Manufacturer}: ${bestSelling.Model}`;
}

//Module Test
/*
import { loadTestData } from "../loadData.js";

const data = await loadTestData();

const answer = q6(data);

console.log(JSON.stringify(answer, null, 2));
*/
