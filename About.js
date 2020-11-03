import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>This is my first about page with javascript. I'm loving this</p>
        </div>
    )
}
export default Rainbow(About)