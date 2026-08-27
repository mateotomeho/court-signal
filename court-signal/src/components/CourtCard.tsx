import type { Court } from '../types/court'
import { getCourtStatus } from '../utils/getCourtStatus'

// CourtCardProps defines the props (inputs) for the CourtCard component
type CourtCardProps = {
  court: Court
  isSelected: boolean
  onSelect: (courtId: string) => void
}

//OLD CODE
// type CourtCardProps = {
//     name: string
//     totalCourts: number
//     availableCourts: number
//     updatedMinutesAgo: number
// }

// Function getFreshnessText returns a string indicating how recently the court's availability was updated
function getFreshnessText(updatedMinutesAgo: number) {
    if (updatedMinutesAgo === 0) {
        return 'Updated just now'
    }

    if (updatedMinutesAgo === 1) {
        return 'Updated 1 minute ago'
    }

    if (updatedMinutesAgo === 60) {
        return 'Updated an hour ago'
    }

    if (updatedMinutesAgo > 60) {
        return 'Updated over an hour ago'
    }

    return `Updated ${updatedMinutesAgo} minutes ago`
}

// Function to get the waiting time based on the number of waiting groups 
function getWaitText(waitingGroups: number) {
    if (waitingGroups === 0) {
        return 'No wait'
    }

    if (waitingGroups === 1) {
        return '1 group waiting'
    }

    return `${waitingGroups} groups waiting`
}

// CourtCard is a React component that displays information about a court
function CourtCard({ court, isSelected, onSelect }: CourtCardProps) {
    // Status & icon variables to determine the availability status of the court
    const status = getCourtStatus(court.availableCourts)

    // Freshness text variable to determine how recently the court's availability was updated
    const freshnessText = getFreshnessText(court.updatedMinutesAgo)

    // Wait text variable to determine how many groups are waiting for the court
    const waitText = getWaitText(court.waitingGroups)

    return (
        <button
            type="button"
            className={isSelected ? 'court-card court-card--selected' : 'court-card'}
            onClick={() => onSelect(court.id)}
        >
            <div className="court-card__header">
                <h3>{court.name}</h3>
                <p className="court-card__status">
                    <span aria-hidden="true">{status.icon}</span> {status.label}
                </p>
            </div>

            <p className="court-card__availability">
                {court.availableCourts} of {court.totalCourts} courts available
            </p>

            <p className="court-card__meta">
                {waitText} · {freshnessText}
            </p>
        </button>
    )
}

//OLD CODE
// function CourtCard(props: CourtCardProps) {
//     return (
//         <article>
//             <h3>{props.name}</h3>
//             <p>
//                 {props.availableCourts} of {props.totalCourts} courts available
//             </p>
//             <p>Updated {props.updatedMinutesAgo} minutes ago</p>
//         </article>
//     )
// }

export default CourtCard
