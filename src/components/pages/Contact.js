import React, { useState} from "react";
// import { validateEmail } from '../../utils/helpers';
import emailjs from 'emailjs-com';


export default function Contact() {
    // create state variables for the fields in the form
    // we are alson setting theri initial values to an empty string
    // const [email, setEmail] = useState('');
    // const [userName, setUserName] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');

    // const handleInputChange = (e) => {
    //     // getting the value and name of the input which triggered the change
    //     const { target } = e;
    //     const inputType = target.name;
    //     const inputValue = target.value;
        
    //     // based on the input type, we set the state of either email or userName
    //     if (inputType === 'email') {
    //         setEmail(inputValue);
    //     } else {
    //         setUserName(inputValue)
    //     }
    // };

    const sendEmail = (e) => {
        // preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        emailjs.sendForm('service_jamlfxa', 'template_375el6l', e.target, 'user_t79LJx3aRhia7Q4R7pupG') 
        .then(res =>{
            console.log(res)
        }).catch(err => console.log(err));
        e.target.reset();
    }

        // We check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    //     if (!validateEmail(email) || !userName) {
    //         setErrorMessage('Email or userName is invalid');

    //         // we want to exit out of this code block if something is wrong so that the user can correct it
    //         return;

    //     }

    //     // clear out the input after a successful registration
    //     setUserName('');
    //     setEmail('');
    
    // }
    return (
        <div className='container border'
        style={{marginTop: '0px',
        width:'100%',
        backgroundImage:`url('https://images.pexels.com/photos/2088170/pexels-photo-2088170.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-2088170.jpg&fm=jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
        }}
        >
            <h1 style={{marginTop:'25px', color: 'black'}}>Contact Me</h1>
            <form className="row" style={{ margin: '25px 50px 75px 100px' }}
            onSubmit={sendEmail} >
                <label style={{color: 'black'}}>Username</label>
                <input
                type='text' name='name' 
                
                className="form-control"/>
 
                <label style={{color: 'black'}}>Email</label>
                <input 
                type='email' name='email' 
                
                className="form-control"/>

                <label  style={{color: 'black'}}>Message</label>
                <textarea name='message' rows='5' className="form-control"/>
                <input type='submit' value='Send' className="form-control btn btn-primary"
                style={{marginTop:'30px'}}/>
            </form>
            {/* {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )} */}
        </div>
    )
}

