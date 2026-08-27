// Function to get the court status based on the number of available courts

export function getCourtStatus(availableCourts: number) {
  if (availableCourts === 0) {
    return {
      label: 'Full',
      icon: '🔴',
      markerClassName: 'map-marker--full',
    }
  }

  if (availableCourts === 1) {
    return {
      label: 'Almost full',
      icon: '🟡',
      markerClassName: 'map-marker--almost-full',
    }
  }

  return {
    label: 'Available',
    icon: '🟢',
    markerClassName: 'map-marker--available',
  }
}