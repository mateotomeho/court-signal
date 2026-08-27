import type { Court } from '../types/court'
import CourtCard from './CourtCard'

type CourtListProps = {
    courtList: Court[]
    selectedCourtId: string | null
    onSelectCourt: (courtId: string) => void
}


function CourtList({courtList, selectedCourtId, onSelectCourt }: CourtListProps) {
    return (
      <section className="court-list" aria-labelledby="court-list-heading">
        <p className="section-label">Courts near you</p>
        <div className="court-list__header">
          <h2 id="court-list-heading">Barrhaven courts</h2>
          <p>{courtList.length} courts</p>
        </div>

        <div className="court-list__items">
          {courtList.map((court) => (
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
