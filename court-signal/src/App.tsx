import './App.css'
import CourtList from './components/CourtList'
import CourtMapPlaceholder from './components/CourtMapPlaceholder'

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="app-kicker">Now testing in Barrhaven, Ottawa</p>
        <h1>CourtSignal</h1>
        <p>Know before you go.</p>
      </header>

      <CourtMapPlaceholder />

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
