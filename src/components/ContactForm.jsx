import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Dynamically load the web3forms.js script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/src/assets/web3forms.js'; // Path to your script
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    const formData = new FormData();
    formData.append('access_key', '31f83a92-0444-43d2-a555-c3dbc38f732a');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('botcheck', ''); // For Honeypot Spam Protection

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatusMessage('Your message has been sent successfully!');
      } else {
        setStatusMessage('Oops! Something went wrong.');
      }
    } catch (error) {
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="contact-form"
      className="form w-full"
      onSubmit={handleSubmit}
    >
      {/* access key hidden input */}
      <input
        type="hidden"
        name="access_key"
        value="31f83a92-0444-43d2-a555-c3dbc38f732a"
      />

      {/* Honeypot Spam Protection */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
      />

      <div className="mb-6 w-full">
        <input
          type="text"
          required
          className="form-control w-full border-b-2 border-b-neutral-200"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <input
          className="form-control w-full border-b-2 border-b-neutral-200"
          type="email"
          name="email"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <input
          className="form-control w-full border-b-2 border-b-neutral-200"
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <textarea
          name="message"
          className="form-control w-full border-b-2 border-b-neutral-200"
          id="textArea"
          cols="30"
          rows="6"
          placeholder="Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <div className="row">
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="bg-blue-500 px-5 py-2.5 text-white w-full cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>

      {statusMessage && (
        <div className="mt-3" id="form-status">
          <p>{statusMessage}</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
