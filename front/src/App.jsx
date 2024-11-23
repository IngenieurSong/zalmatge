import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import StartPage from './pages/Start'
import InputPage from './pages/Input'
import ReportPage from './pages/Report'
import SplashPage from './pages/Splash'
import InputPersonPage from './pages/InputPerson'
import SharePage from './pages/Share'


// '/start' 커버 페이지
// '/input' 생년월일, 시간 등 정보 입력 페이지
// '/report' 사주 상세 페이지
// '/splash' 로딩 페이지
function App() {

  return (
    <Routes>
      <Route path='/start' element={<StartPage/>}/>
      <Route path='/input' element={<InputPage/>}/>
      <Route path='/input/person' element={<InputPersonPage/>}/>
      <Route path='/report/:report_id/:page_id' element={<ReportPage/>}/>
      <Route path='/splash' element={<SplashPage/>}/>
      <Route path='/report/:report_id/:page_id/share' element={<SharePage/>}/>
    </Routes>
  )
}

export default App