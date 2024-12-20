import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseManagement from './pages/admin/CourseManagement'
import UserManagement from './pages/admin/UserManangement'
import CourseStatusChart from './components/CourseStatusChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <CourseManagement/> */}
     <UserManagement/>
     {/* <CourseStatusChart/> */}
    </>
  )
}

export default App
