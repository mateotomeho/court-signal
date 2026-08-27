import type { Court, CourtWithLatestReportRow } from '../types/court'

function getMinutesAgo(timestamp: string | null) {
  if (!timestamp) {
    return 999
  }

  const timestampMs = new Date(timestamp).getTime()
  const nowMs = Date.now()
  const diffMs = nowMs - timestampMs

  return Math.max(0, Math.floor(diffMs / 60000))
}

export function mapCourtRow(row: CourtWithLatestReportRow): Court {
  return {
    id: row.id,
    name: row.name,
    totalCourts: row.total_courts,
    availableCourts: row.available_courts ?? 0,
    waitingGroups: row.waiting_groups ?? 0,
    updatedMinutesAgo: getMinutesAgo(row.last_reported_at),
    latitude: row.latitude,
    longitude: row.longitude,
    mapXPercent: row.map_x_percent,
    mapYPercent: row.map_y_percent,
  }
}