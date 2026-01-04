import Stack from '@mui/material/Stack'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'

function App() {

  return (
    <>
      <Navbar />
      <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </Stack>
    </>
  )
}

export default App
