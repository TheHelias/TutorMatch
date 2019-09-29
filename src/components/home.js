import React from 'react';
import  { Link }   from 'react-router-dom'
import Tutors from './tutors';

const Homepage = () => <div>
    <div className='header'>
        <div className='header_logo'>
            <img src={process.env.PUBLIC_URL + '/tutormatch-logo.png'} alt="tutor"/>
        </div>
        <div className='header_links'>
            <Link className='child'>Become a Tutor</Link>
            <Link className='child sign_in'>Sign In</Link>
        </div>
    </div>

    <div className='body'>
        <div className="body_1">
            <h1>The place where Tutors and Students meet</h1>
            <p>Find out who can help take your education to the next level</p>
            <Link to='/' className='link'>Get started now</Link>
        </div>
        <div className="body_2">
            <h2>Our Tutors</h2>
            <p>We have more than 100 tutors from various disciplines ready to match with you</p>
        </div>
        <Tutors/>
        <div className='footer'>
            <Link to='/' className='link'>See all Tutors</Link>
        </div>
    </div>
</div> 

export default Homepage;