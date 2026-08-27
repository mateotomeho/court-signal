// CourtMapPlaceholder is a React component that displays a placeholder for the court map
import type { Court } from '../types/court'

type CourtMapPlaceholderProps = {
    courtList: Court[]
    selectedCourtId: string | null
    onSelectCourt: (courtId: string) => void
}

function getMarkerClassName(court: Court) {
  if (court.availableCourts === 0) {
    return 'map-marker map-marker--full'
  }

  if (court.availableCourts === 1) {
    return 'map-marker map-marker--almost-full'
  }

  return 'map-marker map-marker--available'
}

function CourtMapPlaceholder({
    courtList,
    selectedCourtId,
    onSelectCourt,
}: CourtMapPlaceholderProps) {
  return (
    <section className="map-placeholder" aria-labelledby="map-heading">
      <div>
        <p className="section-label">Map</p>
        <h2 id="map-heading">Barrhaven courts</h2>
      </div>

      <div className="map-placeholder__surface">
        {courtList.map((court) => (
        <button
            key={court.id}
            type="button"
            className={
                court.id === selectedCourtId
                ? `${getMarkerClassName(court)} map-marker--selected`
                : getMarkerClassName(court)
            }
            style={{
                left: `${court.mapXPercent}%`,
                top: `${court.mapYPercent}%`,
            }}
            onClick={() => onSelectCourt(court.id)}
            aria-label={`Select ${court.name}`}
        ></button>
        ))}
      </div>
    </section>
  )
}

export default CourtMapPlaceholder