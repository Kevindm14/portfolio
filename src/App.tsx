import { Suspense } from "react"
import { Navigation } from "./components"
import { BrowserRouter } from "react-router-dom"
import { Loading } from "./components/Loading/Loading"

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </Suspense>
  )
}

export default App
