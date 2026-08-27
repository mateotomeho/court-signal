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
          <p>
            Ready to report for <strong>{selectedCourt.name}</strong>.
          </p>
          <button
            type="button"
            className="primary-action"
            onClick={onUpdateStatus}
          >
            Update Status
          </button>
        </>
      ) : (
        <p>Select a court from the map or list.</p>
      )}
    </section>
  )
}

export default SelectedCourtPanel
