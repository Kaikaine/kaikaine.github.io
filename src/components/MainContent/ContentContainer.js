import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Route} from 'react-router-dom';
import './content.css'
import avi from '../../avi.jpg'


const spin = () => {
    if (document.querySelector('.avi').classList.contains('angry-animate')) {
        document.querySelector('.avi').classList.remove('angry-animate')
    }
    else {
        document.querySelector('.avi').classList.add('angry-animate')
    }
}

const ContentContainer = () => {
    return ( <div>
        <img onClick={spin} className='avi' src={avi} alt='Profile pic'/>
        <Route exact path="/" component={About} />
        <Route expact path='/portfolio' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        </div> );
}
 
export default ContentContainer;