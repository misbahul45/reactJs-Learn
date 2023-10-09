import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default App
