import { readFile } from "fs/promises";

//Read the JSON dataset for module testing
export async function loadTestData() {
    const rawDataset = await readFile(
        "electric_vehicles_dataset.json",
        "utf-8"
    );
    const dataset = JSON.parse(rawDataset);
    return dataset;
}
