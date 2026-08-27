import type { Court } from '../types/court'

type SelectedCourtPanelProps = {
  selectedCourt: Court | undefined
  onUpdateStatus: () => void
}

function SelectedCourtPanel({
  selectedCourt,
  onUpdateStatus,
}: SelectedCourtPanelProps) {
  return (
    <section className="selected-court">
      <p className="section-label">Selected court</p>

      {selectedCourt ? (
        <>
          <p>{selectedCourt.name}</p>
          <button
            type="button"
            className="primary-action"
            onClick={onUpdateStatus}
          >
            Update Status
          </button>
        </>
      ) : (
        <p>No court selected yet</p>
      )}
    </section>
  )
}

export default SelectedCourtPanel