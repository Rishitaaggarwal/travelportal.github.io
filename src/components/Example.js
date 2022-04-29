import React, { useState } from 'react'
function Example() {
    const [name, setName] = useState('riya');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="topping">
                    <input
                        type="checkbox"
                        id="topping"
                        name="topping"
                        value="Paneer tikka"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    Paneer
                </div>
                <div>
                    <label htmlFisCheckedor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
            <h1>Display Data </h1>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Message: {message}</p>
            <p>checked : { }</p>

        </div>
    );
}
export default Example
