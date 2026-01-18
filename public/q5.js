/**
e.	Rank 2025 vehicles by safety rating (top 5 safest)
    For example, 
    Output: 
    i.	Audi	:   e-tron
    ii.	Mahindra:   XUV400
    iii.Skoda	:   Enyaq Coupe
    iv.	Jeep	:   Wrangler 4xe (PHEV)
    v.	BMW	    :   iX1
 */
export function q5b(data) {
    //Initialize the top5 list
    let top5 = [];
    //Iterate through the dataset
    for (const car of data) {
        //Skip models not from 2025 and upcoming models
        if (car.Year !== 2025 || car.Model.includes("upcoming")) continue;
        //Initialize the 5 elements
        if (top5.length < 5) {
            top5.push(car);
            continue;
        }
        //Check the top5 list
        for (const [index, element] of top5.entries()) {
            //Replace the item from top5 list with a car with higher safety rating
            if (car.Safety_Rating > element.Safety_Rating) {
                //Insert the car and remove the current item in the index
                top5.splice(index, 1, car);
                break;
            }
        }
    }
    //Form the final answer
    let answer = "";
    for (const [index, car] of top5.entries()) {
        answer += `${index + 1}. ${car.Manufacturer}: ${car.Model}\n`;
    }
    //Return the answer
    return answer;
}

//Average of all years
/*
export function q5a(data) {
    //Combine all the safety rating data for every model
    let modelSafetyTotal = {};
    for (const car of data) {
        if (car.Safety_Rating === null) continue;
        if (car.Year === 2025) {
            //Initialize the modelSafety object
            if (!modelSafetyTotal[car.Model]) {
                modelSafetyTotal[car.Model] = {
                    brand: car.Manufacturer,
                    rating: 0,
                    count: 0,
                };
            }
            //Add the safety rating
            modelSafetyTotal[car.Model]["rating"] += car.Safety_Rating;
            modelSafetyTotal[car.Model]["count"]++;
        }
    }

    //Calculate the average safety rating for every model
    let modelSafetyAverage = [];
    for (const model in modelSafetyTotal) {
        modelSafetyAverage.push({
            brand: modelSafetyTotal[model].brand,
            model: model,
            averageSafety:
                modelSafetyTotal[model].rating / modelSafetyTotal[model].count,
            dataPoint: modelSafetyTotal[model].count,
        });
    }

    //Insertion Sort the average rating
    let sortedSafetyAverage = [];
    for (const model of modelSafetyAverage) {
        //Initialize the sorted array
        if (sortedSafetyAverage.length === 0) {
            sortedSafetyAverage.push(model);
            continue;
        }
        for (const [index, sortedModel] of sortedSafetyAverage.entries()) {
            //Add record above other record
            if (model.averageSafety > sortedModel.averageSafety) {
                sortedSafetyAverage.splice(index, 0, model);
                break;
            }
            //Interate until the record is above a lower safety record
            if (
                model.averageSafety <= sortedModel.averageSafety &&
                index < sortedSafetyAverage.length - 1
            )
                continue;
            //Insert at the bottom of the array
            sortedSafetyAverage.push(model);
            break;
        }
    }

    //Take only the top 5
    const top5 = sortedSafetyAverage.slice(0, 5);

    //Form the answer string
    let answer = "";
    for (const [index, car] of top5.entries()) {
        answer += `${index + 1}. ${car.brand}: ${car.model}\n`;
    }
    return answer;
}
*/

//How to get the example answer :v
/*
export function q5b(data) {
    let top5 = [];
    for (const car of data) {
        if (car.Year !== 2025 || car.Model.includes("upcoming")) continue;
        if (top5.length < 5) top5.push(car);
        for (const [index, element] of top5.entries()) {
            if (
                car.Safety_Rating > element.Safety_Rating ||
                car.Warranty_Years > element.Warranty_Years
            ) {
                top5.splice(index, 0, car);
                break;
            }
        }
        if (top5.length === 5) break;
    }
    let answer = "";
    for (const [index, car] of top5.entries()) {
        answer += `${index + 1}. ${car.Manufacturer}: ${car.Model}\n`;
    }
    return answer;
}
*/

//Module Test
/*
import { loadTestData } from "../loadData.js";

const data = await loadTestData();

const answer = q5b(data);

console.log(JSON.stringify(answer, null, 2));
*/
