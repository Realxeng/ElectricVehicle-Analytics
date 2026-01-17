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
    //Initialize the models array
    let models = [];
    //Loop through the dataset
    for (const car of data) {
        //Find the manufacturer
        if (car.Manufacturer.toLowerCase() === search.toLowerCase()) {
            //Skip added model
            if (models.find((model) => model === car.Model)) continue;
            //Add model that does not exists in the array
            else models.push(car.Model);
        }
    }
    //Initialize the output string
    let output = "";
    //Loop through the model array
    for (const [index, car] of models.entries()) {
        //Form the output string
        output += `${index + 1}.\t${car}\n`;
    }
    //Return the output string
    return output;
}

//Module Test
/*
import { loadTestData } from "../loadData.js";

const data = await loadTestData();

const answer = q2(data, "Tesla");

console.log(answer);
*/
