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

// Create a type for a court object that includes the latest report data
export type CourtWithLatestReportRow = {
  id: string
  slug: string
  name: string
  address: string | null
  latitude: number
  longitude: number
  total_courts: number
  neighbourhood: string
  map_x_percent: number
  map_y_percent: number
  available_courts: number | null
  waiting_groups: number | null
  last_reported_at: string | null
}