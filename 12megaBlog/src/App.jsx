import conf from './conf/conf'
import './App.css'

function App() {
  
  // console.log(import.meta.env.VITE_APPWRITE_URL)
  // rather than doing this, create a prod grade conf/conf.js which makes sure a string value is returned cause its required that env value is a string so that app dont crash
  
  console.log(conf.appwriteURL)
  return (
    <>
      <h1>A blog with Appwrite</h1>
    </>
  )
}

export default App
