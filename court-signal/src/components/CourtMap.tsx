import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import type { Court } from '../types/court'
import { getCourtStatus } from '../utils/getCourtStatus'

type CourtMapProps = {
  courtList: Court[]
  selectedCourtId: string | null
  onSelectCourt: (courtId: string) => void
}

const barrhavenCenter: [number, number] = [45.262, -75.717]

// Function to create a custom Leaflet icon for the court markers based on the number of available courts
function getCourtMarkerIcon(availableCourts: number) {
  const status = getCourtStatus(availableCourts)
  const statusClassName = status.label.toLowerCase().replaceAll(' ', '-')

  return L.divIcon({
    className: 'court-map-marker',
    html: `<span class="court-map-marker__pin court-map-marker__pin--${statusClassName}"></span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
  })
}

// Function to render the court map with markers for each court
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

        {courtList.map((court) => {
          const status = getCourtStatus(court.availableCourts)

          return (
            <Marker
              key={court.id}
              position={[court.latitude, court.longitude]}
              icon={getCourtMarkerIcon(court.availableCourts)}
              eventHandlers={{
                click: () => onSelectCourt(court.id),
              }}
            >
              <Popup>
                <strong>{court.name}</strong>
                <br />
                <span>
                  {status.icon} {status.label}
                </span>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </section>
  )
}

export default CourtMap
