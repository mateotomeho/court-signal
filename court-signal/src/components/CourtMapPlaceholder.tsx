// CourtMapPlaceholder is a React component that displays a placeholder for the court map

function CourtMapPlaceholder() {
    return (
        <section className="map-placeholder" aria-labelledby="map-heading">
            <div>
                <p className="section-label">Map</p>
                <h2 id="map-heading">Barrhaven courts</h2>
            </div>

            <div className="map-placeholder__surface" aria-hidden="true">
                <span className="map-marker map-marker--available"></span>
                <span className="map-marker map-marker--almost-full"></span>
                <span className="map-marker map-marker--full"></span>
            </div>
        </section>
    )
}

export default CourtMapPlaceholder