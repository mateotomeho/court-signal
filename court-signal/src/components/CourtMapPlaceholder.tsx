// CourtMapPlaceholder is a React component that displays a placeholder for the court map
import type { Court } from '../types/court'
import { getCourtStatus } from '../utils/getCourtStatus'

type CourtMapPlaceholderProps = {
    courtList: Court[]
    selectedCourtId: string | null
    onSelectCourt: (courtId: string) => void
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
        {courtList.map((court) => {
            const status = getCourtStatus(court.availableCourts)
            const markerClassName = `map-marker ${status.markerClassName}`

            return (
                <button
                    key={court.id}
                    type="button"
                    className={
                        court.id === selectedCourtId
                        ? `${markerClassName} map-marker--selected`
                        : markerClassName
                    }
                    style={{
                        left: `${court.mapXPercent}%`,
                        top: `${court.mapYPercent}%`,
                    }}
                    onClick={() => onSelectCourt(court.id)}
                    aria-label={`Select ${court.name}`}
                ></button>
        )
        })}
      </div>
    </section>
  )
}

export default CourtMapPlaceholder