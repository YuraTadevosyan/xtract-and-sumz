import Hero from './components/Hero.jsx'
import DataArea from './components/DataArea.jsx'

const App = () => {
  return (
    <main>
      <div className="main-background">
        <div className="gradient"></div>
      </div>

      <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
        <Hero />
        <DataArea />
      </div>
    </main>
  )
}

export default App
