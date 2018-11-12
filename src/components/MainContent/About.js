import React from 'react'
import avi from '../../avi.jpg'

const About = () => {
    return ( <div>
        
        <img src={avi} alt='Profile pic'/>

        <div>
            <p>
                Hello! My name is Kairi and I'm a Chicago-based front-end developer. I am mostly self-taught with some non-traditonal schooling here and there. My skills are: Javascript(ES5/ES6), CSS3, React, Redux, Nodejs, and SQL.
            </p>

            <p>
                I am looking for a junior role in a company that provides its junior developers with enough mentorship to learn and grow within the company. If this sounds like you, please feel free to reach out to me. I am also open for freelancing and contract work.
            </p>
        </div>
        
        </div> );
}
 
export default About;