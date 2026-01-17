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
export function q5(data) {
    //Combine all the safety rating data for every model
    let modelSafety = {};
    for (const car of data) {
        //Initialize the modelSafety object
        if (!modelSafety[car.Model]) {
            modelSafety[car.Model] = {
                brand: car.Manufacturer,
                rating: 0,
                count: 0,
            };
        }
        //Add the safety rating
        modelSafety[car.Model]["rating"] += car.Safety_Rating;
        modelSafety[car.Model]["count"]++;
    }

    //Calculate the average safety rating for every model
    let modelAverageSafety = [];
    for (const model in modelSafety) {
        modelAverageSafety.push({
            brand: modelSafety[model].brand,
            model: model,
            averageSafety: modelSafety[model].rating / modelSafety[model].count,
            dataPoint: modelSafety[model].count,
        });
    }

    //Insertion Sort the average rating
    let sortedAverageSafety = [];
    for (const model of modelAverageSafety) {
        //Initialize the sorted array
        if (sortedAverageSafety.length === 0) {
            sortedAverageSafety.push(model);
            continue;
        }
        for (const [index, sortedModel] of sortedAverageSafety.entries()) {
            //Add record above other record
            if (model.averageSafety > sortedModel.averageSafety) {
                sortedAverageSafety.splice(index, 0, model);
                break;
            }
            //Interate until the record is above a lower safety record
            if (
                model.averageSafety <= sortedModel.averageSafety &&
                index < sortedAverageSafety.length - 1
            )
                continue;
            //Insert at the bottom of the array
            sortedAverageSafety.push(model);
            break;
        }
    }

    //Take only the top 5
    const top5 = sortedAverageSafety.slice(0, 5);

    //Form the answer string
    let answer = "";
    for (const [index, car] of top5.entries()) {
        answer += `${index + 1}. ${car.brand}: ${car.model}\n`;
    }
    return answer;
}

/*
// export function q5a(data) {
//     let top5 = [];
//     for (const car of data) {
//         if (top5.length < 5) top5.push(car);
//         if (car.Safety_Rating === 5.0) {
//             top5.shift();
//             top5.push(car);
//             continue;
//         }
//     }
//     let answer = "";
//     for (const [index, car] of top5.entries()) {
//         answer += `${index + 1}. ${car.Manufacturer}: ${car.Model}\n`;
//     }
//     console.log(JSON.stringify(top5, null, 2));
//     return answer;
// }
*/

//Module Test
/*
import { loadTestData } from "../loadData.js";

const data = await loadTestData();

const answer = q5(data);

console.log(JSON.stringify(answer, null, 2));
*/
