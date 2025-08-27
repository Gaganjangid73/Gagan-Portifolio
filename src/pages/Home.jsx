import React from 'react'
import Software from "./softwareenf"
import Project from "./projects"
import Experience from './experience'
import Skills from './Skills'

const Home = () => {
  return (
    <div className=' mb-15'>
        <Software/>
        <Project/>
        <Experience/>
        <Skills/>
    </div>
  )
}

export default Home
