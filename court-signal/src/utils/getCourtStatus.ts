// Function to get the court status based on the number of available courts

export function getCourtStatus(availableCourts: number) {
  if (availableCourts === 0) {
    return {
      label: 'Full',
      icon: '🔴',
    }
  }

  if (availableCourts === 1) {
    return {
      label: 'Almost full',
      icon: '🟡',
    }
  }

  return {
    label: 'Available',
    icon: '🟢',
  }
}
