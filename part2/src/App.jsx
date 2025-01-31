import React from 'react'
// import Users from './components/axios/users/Users'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Electronics from './components/electronics/Electronics';
import Jewelery from './components/jewelery/Jewelery';
import Mens from './components/menclothing/Mens';
import Women from './components/womenclothing/Women';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Comp from './Comp';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Users></Users> */}
      <Navbar></Navbar>
      <Comp props="Text"/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/electronics'} element={<Electronics/>}/>
        <Route path={'/jewelery'} element={<Jewelery/>}/>
        <Route path={'/mens'} element={<Mens/>}/>
        <Route path={'/womens'} element={<Women/>}/>
        <Route path={'*'} element = {<PageNotFound/>}/>
      </Routes>
      {/* <Home></Home>
      <Electronics></Electronics>
      <Jewelery></Jewelery>
      <Mens></Mens>
      <Women></Women> */}
    </div>
  )
}

export default App