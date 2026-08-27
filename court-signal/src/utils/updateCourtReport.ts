import type { Court } from '../types/court'

// Function to update the court report based on the provided parameters
type UpdateCourtReportParams = {
  courtList: Court[]
  courtId: string
  availableCourts: number
  waitingGroups: number
}

export function updateCourtReport({
  courtList,
  courtId,
  availableCourts,
  waitingGroups,
}: UpdateCourtReportParams) {
  return courtList.map((court) => {
    if (court.id !== courtId) {
      return court
    }

    return {
      ...court,
      availableCourts,
      waitingGroups,
      updatedMinutesAgo: 0,
    }
  })
}