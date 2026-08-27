import { useEffect, useState } from 'react'
import './App.css'
import { courts } from './data/courts'
  
import CourtList from './components/CourtList'
import CourtMapPlaceholder from './components/CourtMapPlaceholder'
import UpdateStatusPanel from './components/UpdateStatusPanel'
import SelectedCourtPanel from './components/SelectedCourtPanel'


import {
  createCourtReport,
  fetchCourtsWithLatestReports,
} from './api/courts'


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
  //const [reportMessage, setReportMessage] = useState('')

  // State variables to keep track of loading and error states
  const [isLoadingCourts, setIsLoadingCourts] = useState(true)
  const [courtsError, setCourtsError] = useState('')

  useEffect(() => {
    async function loadCourts() {
      try {
        const loadedCourts = await fetchCourtsWithLatestReports()
        setCourtList(loadedCourts)
        setCourtsError('')
      } catch (error) {
        console.error(error)
        setCourtsError('Could not load courts.')
      } finally {
        setIsLoadingCourts(false)
      }
    }

    loadCourts()
  }, [])

  // Function to handle the opening of the update panel
  function handleOpenUpdatePanel() {
    if (!selectedCourt) {
      return
    }

    setReportAvailableCourts(selectedCourt.availableCourts)
    setReportWaitingGroups(selectedCourt.waitingGroups)
    //setReportMessage('')
    setIsUpdatePanelOpen(true)
  }

  // Function to handle the submission of the report
  async function handleSubmitReport() {
    if (!selectedCourt) {
      return
    }

    try {
      await createCourtReport({
        courtId: selectedCourt.id,
        availableCourts: reportAvailableCourts,
        waitingGroups: reportWaitingGroups,
      })

      const loadedCourts = await fetchCourtsWithLatestReports()
      setCourtList(loadedCourts)
      setCourtsError('')
      setIsUpdatePanelOpen(false)
    } catch (error) {
      console.error(error)
      setCourtsError('Could not submit update.')
    }
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="app-kicker">Now testing in Barrhaven, Ottawa</p>
        <h1>CourtSignal</h1>
        <p>Live, community-reported tennis court availability.</p>
      </header>

      <CourtMapPlaceholder
        courtList={courtList}
        selectedCourtId={selectedCourtId}
        onSelectCourt={setSelectedCourtId}
      />

      {isLoadingCourts && <p className="app-message">Loading courts...</p>}
      {courtsError && <p className="app-message app-message--error">{courtsError}</p>}

      <SelectedCourtPanel
        selectedCourt={selectedCourt}
        onUpdateStatus={handleOpenUpdatePanel}
      />

      {selectedCourt && isUpdatePanelOpen && (
        <UpdateStatusPanel
          selectedCourt={selectedCourt}
          reportAvailableCourts={reportAvailableCourts}
          reportWaitingGroups={reportWaitingGroups}
          onAvailableCourtsChange={setReportAvailableCourts}
          onWaitingGroupsChange={setReportWaitingGroups}
          onSubmit={handleSubmitReport}
          onCancel={() => setIsUpdatePanelOpen(false)}
        />
      )}

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
