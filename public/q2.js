/**
b.	Search and display the list of models available from a specific manufacturing company.
    For example, 
    Input: Mini
    Output: 
    1.	Mini Aceman
    2.	Mini Cooper SE
    3.	Mini Electric
 */

export function q2(data, search) {
    let models = [];
    for (const car of data) {
        if (car.Manufacturer.toLowerCase() === search.toLowerCase()) {
            if (models.find((model) => model === car.Model)) continue;
            else models.push(car.Model);
        }
    }

    let output = "";
    for (const [index, car] of models.entries()) {
        output += `${index + 1}.\t${car}\n`;
    }
    return output;
}

//Module Test
/*
import { loadTestData } from "../loadData.js";

const data = await loadTestData();

const answer = q2(data, "Tesla");

console.log(answer);
*/
