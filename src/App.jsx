import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BasicExample from './Navbar.jsx'
import TypesExample from './Button.jsx'
import ImgOverlayExample from './Card.jsx'

export default function App() {

  return (
    <>
              <BasicExample/>

    <h1>welcome</h1>
    <img src="public\bl.webp"
     alt="" />
     <TypesExample/> 
     <ImgOverlayExample/>

    </>
  )
}


