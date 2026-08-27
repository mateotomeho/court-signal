import { supabase } from '../lib/supabase'
import type { CourtWithLatestReportRow } from '../types/court'
import { mapCourtRow } from '../utils/mapCourtRow'

export async function fetchCourtsWithLatestReports() {
  const { data, error } = await supabase
    .from('courts_with_latest_report')
    .select('*')
    .order('name')
    .returns<CourtWithLatestReportRow[]>()

  if (error) {
    throw error
  }

  return data.map(mapCourtRow)
}

// Define the parameters for creating a court report
type CreateCourtReportParams = {
  courtId: string
  availableCourts: number
  waitingGroups: number
}

// Function to create a new court report in the database
export async function createCourtReport({
  courtId,
  availableCourts,
  waitingGroups,
}: CreateCourtReportParams) {
  const { error } = await supabase.from('reports').insert({
    court_id: courtId,
    available_courts: availableCourts,
    waiting_groups: waitingGroups,
  })

  if (error) {
    throw error
  }
}