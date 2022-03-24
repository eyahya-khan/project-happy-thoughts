import React, { useState } from 'react'
import './Happyform.css'
import Emoji from 'a11y-react-emoji'

const Happyform = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onMessageChange(newMessage);
    setNewMessage("")
  };

  return (
    <section className="happy-form-container"> 
      <form className="happy-form"> 
        <h3 className="happy-form-heading">
          What is making you happy right now?
        </h3>
        <textarea
          placeholder="Type your happy thought..."
          tabIndex="0"
          rows="3"
          value={newMessage}
          onChange={event => setNewMessage(event.target.value)} 
          className={
            newMessage.length > 140
            ? "happy-form-text-too-long" 
            : "happy-form-text"
          }
        >
        </textarea>
        <div className="form-footer"> 
          <button
            type="submit"
            onClick={handleSubmit} 
            disabled={
              newMessage.length < 6 || newMessage.length > 140 
              ? true 
              : false
            } 
            className={ 
              newMessage.length < 6 || newMessage.length > 140 
              ? "happy-form-input-button-disabled" 
              : "happy-form-input-button"
            }
            value="Add Message"
          >
              <Emoji symbol="❤️" label="love" />
                    Send Happy Thought!
              <Emoji symbol="❤️" label="love" />
          {/* <span>❤️ Send Happy Thought! ❤️</span> */}
          </button>
          <p>{newMessage.length} / 140</p>
        </div>
      </form>
    </section>
  );
};
export default Happyform;