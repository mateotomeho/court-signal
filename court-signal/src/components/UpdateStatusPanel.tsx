import type { Court } from '../types/court'

type UpdateStatusPanelProps = {
  selectedCourt: Court
  reportAvailableCourts: number
  reportWaitingGroups: number
  onAvailableCourtsChange: (count: number) => void
  onWaitingGroupsChange: (count: number) => void
  onSubmit: () => void
  onCancel: () => void
}

function UpdateStatusPanel({
  selectedCourt,
  reportAvailableCourts,
  reportWaitingGroups,
  onAvailableCourtsChange,
  onWaitingGroupsChange,
  onSubmit,
  onCancel,
}: UpdateStatusPanelProps) {
  return (
    <section className="update-panel">
      <p className="section-label">Update status</p>
      <h2>{selectedCourt.name}</h2>

      <div className="report-field">
        <p>Available courts</p>

        <div className="segmented-control">
          {Array.from(
            { length: selectedCourt.totalCourts + 1 },
            (_, count) => count,
          ).map((count) => (
            <button
              key={count}
              type="button"
              className={
                reportAvailableCourts === count
                  ? 'segment-button segment-button--selected'
                  : 'segment-button'
              }
              onClick={() => onAvailableCourtsChange(count)}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      <div className="report-field">
        <p>Waiting groups</p>

        <div className="segmented-control">
          {[0, 1, 2, 3].map((count) => (
            <button
              key={count}
              type="button"
              className={
                reportWaitingGroups === count
                  ? 'segment-button segment-button--selected'
                  : 'segment-button'
              }
              onClick={() => onWaitingGroupsChange(count)}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      <button type="button" className="primary-action" onClick={onSubmit}>
        Submit Update
      </button>

      <button type="button" className="secondary-action" onClick={onCancel}>
        Cancel
      </button>
    </section>
  )
}

export default UpdateStatusPanel