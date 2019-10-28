import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import '../css/tailwind.css'; 

const TemplateWrapper = ({ children }) => (
  <div className="container mx-auto">
    <Helmet title="Jan Fuxa" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
