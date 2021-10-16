import React, { useState } from 'react';
import Footer from './Footer';

// Here we import a helper function that will check if the email is valid
import validateEmail from '../utils/helpers';

function ContactForm() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [contactState, setContactState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactState;
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        const contactStateCopy = { ...contactState };
        console.log(contactState);

        // Based on the input type, we set the state of either email, name, and message
        if (inputType === 'email') {
            setContactState({ email: inputValue, name: contactStateCopy.name, message: contactState.message });
        } else if (inputType === 'name') {
            setContactState({ name: inputValue, email: contactStateCopy.email, message: contactStateCopy.message });
        } else {
            setContactState({ message: inputValue, email: contactStateCopy.email, name: contactStateCopy.name });
        }
        if (!errorMessage) {
            setContactState({ ...contactState, [target.name]: target.value })
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        };

        // If everything goes according to plan, we want to clear out the input after a successful submission.
        setContactState('');
    };

    return (
        <section className="contact container">
            <div className="row">
            <div className="heading col-6">
                <h1 className="title">let's connect IRL.</h1>
            </div>
            <form className="col-6">
                <div className="form-group">
                    <label for="form-name">name.</label>
                    <input type="text"
                        name="name"
                        className="form-control"
                        id="form-name"
                        value={name}
                        onChange={handleInputChange}
                        placeholder="name.">
                    </input>
                </div>
                <div className="form-group">
                    <label for="form-name">email address.</label>
                    <input type="text"
                        name="email"
                        className="form-control"
                        id="form-email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="email@example.com.">
                    </input>
                </div>
                <div className="form-group">
                    <label for="message">message.</label>
                    <textarea className="form-control"
                        name="message"
                        id="form-message"
                        value={message}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="let's chat.">
                    </textarea>
                </div>
                <button className="button" type="button" onClick={handleFormSubmit}>submit.</button>
            </form >
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            {/* <div>
                <Footer />
                </div> */}
            </div>
        </section >
    );
}

export default ContactForm;