import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailPage from './DetailPage'
import HomePage from './Homepage'
const App=()=> {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<HomePage/>} />
      <Route path='/details/:id' element= {<DetailPage/>}/>
    </Routes>
    
    
    </BrowserRouter>
    </>
  )
}
export default App



