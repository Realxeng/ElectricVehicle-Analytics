/**
f.	Identify the best-selling electronic vehicles in 2024
    For example, 
    Output: BYD : Seagull
 */

export function q6(data) {
    let bestSelling = { Units_Sold_2024: 0 };
    for (const car of data) {
        if (car.Units_Sold_2024 > bestSelling.Units_Sold_2024) {
            bestSelling = car;
        }
    }
    return `${bestSelling.Manufacturer}: ${bestSelling.Model}`;
}

//Module Test
/*
import { loadData } from "../loadTestData.js";

const data = await loadData();

const answer = q6(data);

console.log(JSON.stringify(answer, null, 2));
*/
