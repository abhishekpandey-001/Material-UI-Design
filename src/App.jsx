import Stack from '@mui/material/Stack'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Navbar />
      <Stack>
        <Sidebar />
      </Stack>
    </>
  )
}

export default App
