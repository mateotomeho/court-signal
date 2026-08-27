import { courts } from '../data/courts'
import CourtCard from './CourtCard'

function CourtList() {
    return (
      <section className="court-list" aria-labelledby="court-list-heading">
        <p className="section-label">Courts near you</p>
        <h2 id="court-list-heading">Barrhaven courts</h2>

        <div className="court-list__items">
          {courts.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
      </section>
    )
}

export default CourtList