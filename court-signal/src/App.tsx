import { useEffect, useState } from 'react'
import './App.css'
import type { Court } from './types/court'
//import { courts } from './data/courts'
  
import CourtList from './components/CourtList'
import CourtMap from './components/CourtMap'
import UpdateStatusPanel from './components/UpdateStatusPanel'
import SelectedCourtPanel from './components/SelectedCourtPanel'


import {
  createCourtReport,
  fetchCourtsWithLatestReports,
} from './api/courts'



function App() {
  // State variable to keep track of the court list
  const [courtList, setCourtList] = useState<Court[]>([])
  
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
        <h1>
          <span>
            Court<span className="brand-highlight">Signal</span>
          </span>
          <img
            src="/favicon_courtsignal_nobackground.png"
            alt=""
            className="brand-logo"
            aria-hidden="true"
          />
        </h1>
        <p>Live, community-reported tennis court availability.</p>
        <p className="app-notice">
          Note: all 5 listed locations also include pickleball courts.
        </p>
      </header>

    <CourtMap
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

      <section className="about-section">
        <h2>About CourtSignal</h2>
        <p>
          CourtSignal was built by Matéo Tomeho, a 3rd year Computer Engineering student at
          the University of Toronto with a minor in AI and Business certificate. I enjoy building software and hardware 
          projects, and staying active through sports, which is why I wanted to make
          it easier for tennis players in Ottawa to quickly see which public courts
          may be available before leaving home.
        </p>
        <p>
          This is an early version of the project. If you have feedback, corrections,
          or court suggestions, you can reach me at:
        </p>
        <a href="mailto:courtsignalapp@gmail.com">courtsignalapp@gmail.com</a>
        <a href="https://www.linkedin.com/in/mateo-tomeho/">
          Connect with me on LinkedIn
        </a>
      </section>

      <footer className="app-footer">
        <span>CourtSignal</span>
        <span>Built by Matéo Tomeho</span>
        <span>© 2026</span>
      </footer>
    </main>
  )
}

export default App
