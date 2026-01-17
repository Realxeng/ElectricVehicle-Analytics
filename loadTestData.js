import { readFile } from "fs/promises";

export async function loadData() {
    const rawDataset = await readFile(
        "electric_vehicles_dataset.json",
        "utf-8"
    );
    const dataset = JSON.parse(rawDataset);
    return dataset;
}
