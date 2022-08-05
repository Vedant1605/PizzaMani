import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import "../styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
        <div className="leftSide"style={{ backgroundImage: `url(${PizzaLeft})` }}></div>

        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form>
                <label for='name'>Full Name</label>
                <input name='name' placeholder='Enter you name...' type='text'/>

                <label for='email'>Email Id</label>
                <input name='email' placeholder='Enter you email...' type='email'/>

                <label for='message'>Message</label>
                <textarea 
                rows="6"
                placeholder='Enter message...'
                name='message'
                required></textarea>

                <button type='submit'> Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact