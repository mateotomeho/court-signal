import { courts } from '../data/courts'
import CourtCard from './CourtCard'

type CourtListProps = {
    selectedCourtId: string | null
    onSelectCourt: (courtId: string) => void
}


function CourtList({selectedCourtId, onSelectCourt }: CourtListProps) {
    return (
      <section className="court-list" aria-labelledby="court-list-heading">
        <p className="section-label">Courts near you</p>
        <h2 id="court-list-heading">Barrhaven courts</h2>

        <div className="court-list__items">
          {courts.map((court) => (
            <CourtCard 
                key={court.id} 
                court={court} 
                isSelected={court.id === selectedCourtId}
                onSelect={onSelectCourt}
            />
          ))}
        </div>
      </section>
    )
}

export default CourtList