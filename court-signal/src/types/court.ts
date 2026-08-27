//Create a type for a court object
export type Court = {
    id: string
    name: string
    totalCourts: number
    availableCourts: number
    waitingGroups: number
    updatedMinutesAgo: number
    latitude: number
    longitude: number   
    mapXPercent: number
    mapYPercent: number
}