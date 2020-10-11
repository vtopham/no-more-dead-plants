export const WATER_PLANT = "WATER_PLANT"

export const waterPlant = (id, wateringDate) => {
    return {
        type: WATER_PLANT,
        payload: {
            plantId: id,
            wateringDate: wateringDate
        }
    }
}