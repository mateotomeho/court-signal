import './App.css'
import CourtList from './components/CourtList'

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="app-kicker">Now testing in Barrhaven, Ottawa</p>
        <h1>CourtSignal</h1>
        <p>Know before you go.</p>
      </header>

      <section className="status-preview" aria-labelledby="availability-heading">
        <div>
          <p className="section-label">Today</p>
          <h2 id="availability-heading">Where can I play tennis right now?</h2>
        </div>
        <p className="status-preview__body">
          Live, community-reported court availability will appear here as we
          build the MVP.
        </p>
      </section>

      <section className="next-step" aria-labelledby="next-step-heading">
        <p className="section-label">Next step</p>
        <h2 id="next-step-heading">Add our first React components</h2>
        <p>
          We will keep the app simple: a map area, a list of court cards, and a
          fast reporting flow.
        </p>
      </section>

      <CourtList />

      <footer className="app-footer">
        <span>CourtSignal</span>
        <span>Built by Matéo Tomeho</span>
        <span>© 2026</span>
      </footer>
    </main>
  )
}

export default App
