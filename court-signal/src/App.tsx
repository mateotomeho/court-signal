import { useState } from 'react'
import './App.css'
import CourtList from './components/CourtList'
import CourtMapPlaceholder from './components/CourtMapPlaceholder'
import { courts } from './data/courts'


function App() {
  // State variable to keep track of the court list
  const [courtList, setCourtList] = useState(courts)

  // State variable to keep track of the selected court ID
  const [selectedCourtId, setSelectedCourtId] = useState<string | null>(null)
  const selectedCourt = courtList.find((court) => court.id === selectedCourtId)

  // State variable to keep track of whether the update panel is open or closed
  const [isUpdatePanelOpen, setIsUpdatePanelOpen] = useState(false)

  // State variables to keep track of the report data
  const [reportAvailableCourts, setReportAvailableCourts] = useState(0)
  const [reportWaitingGroups, setReportWaitingGroups] = useState(0)
  const [reportMessage, setReportMessage] = useState('')

  // Function to handle the opening of the update panel
  function handleOpenUpdatePanel() {
    if (!selectedCourt) {
      return
    }

    setReportAvailableCourts(selectedCourt.availableCourts)
    setReportWaitingGroups(selectedCourt.waitingGroups)
    setReportMessage('')
    setIsUpdatePanelOpen(true)
  }

  // Function to handle the submission of the report
  function handleSubmitReport() {
    if (!selectedCourt) {
      return
    }

    setCourtList((currentCourts) => 
      currentCourts.map((court) => {
        if (court.id !== selectedCourt.id) {
          return court 
        }

        return {
          ...court,
          availableCourts: reportAvailableCourts,
          waitingGroups: reportWaitingGroups,
          updatedMinutesAgo: 0,
        }
      }),
    )

    setReportMessage(
      `Update saved locally: ${reportAvailableCourts} courts available, ${reportWaitingGroups} groups waiting.`,
    )

    setIsUpdatePanelOpen(false)
  }



  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="app-kicker">Now testing in Barrhaven, Ottawa</p>
        <h1>CourtSignal</h1>
        <p>Know before you go.</p>
      </header>

      <CourtMapPlaceholder />

      <section className="selected-court">
        <p className="section-label">Selected court</p>

        {selectedCourt ? (
          <>
            <p>{selectedCourt.name}</p>
            <button
              type="button"
              className="primary-action"
              onClick={handleOpenUpdatePanel}
            >
              Update Status
            </button>
          </>
        ) : (
          <p>No court selected yet</p>
        )}
      </section>

      {selectedCourt && isUpdatePanelOpen && (
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
                  onClick={() => setReportAvailableCourts(count)}
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
                  onClick={() => setReportWaitingGroups(count)}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="primary-action"
            onClick={handleSubmitReport}
          >
            Submit Update
          </button>
          {reportMessage && <p className="report-message">{reportMessage}</p>}

          <button
            type="button"
            className="secondary-action"
            onClick={() => setIsUpdatePanelOpen(false)}
          >
            Cancel
          </button>
        </section>
      )}

      <section className="next-step" aria-labelledby="next-step-heading">
        <p className="section-label">Next step</p>
        <h2 id="next-step-heading">Add our first React components</h2>
        <p>
          We will keep the app simple: a map area, a list of court cards, and a
          fast reporting flow.
        </p>
      </section>

      <CourtList 
        courtList={courtList}
        selectedCourtId={selectedCourtId}
        onSelectCourt={setSelectedCourtId}
      />

      <footer className="app-footer">
        <span>CourtSignal</span>
        <span>Built by Matéo Tomeho</span>
        <span>© 2026</span>
      </footer>
    </main>
  )
}

export default App
