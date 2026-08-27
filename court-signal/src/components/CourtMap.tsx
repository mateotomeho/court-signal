import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import type { Court } from '../types/court'

type CourtMapProps = {
  courtList: Court[]
  selectedCourtId: string | null
  onSelectCourt: (courtId: string) => void
}

const barrhavenCenter: [number, number] = [45.279, -75.764]

function CourtMap({ courtList, onSelectCourt }: CourtMapProps) {
  return (
    <section className="court-map" aria-labelledby="map-heading">
      <div>
        <p className="section-label">Court map</p>
        <h2 id="map-heading">Where can I play right now?</h2>
      </div>

      <MapContainer
        center={barrhavenCenter}
        zoom={12}
        scrollWheelZoom={false}
        className="court-map__surface"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {courtList.map((court) => (
          <Marker
            key={court.id}
            position={[court.latitude, court.longitude]}
            eventHandlers={{
              click: () => onSelectCourt(court.id),
            }}
          />
        ))}
      </MapContainer>
    </section>
  )
}

export default CourtMap