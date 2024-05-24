import React, { useState } from 'react';
import axios from 'axios';
import './components_css/UrlRequester.css';  // Import the CSS file

function DisplayURL({ shortUrl, setShortUrl }) {
  if (!shortUrl) {
    return;
  }

  const handleDelete = async (e) => {
    e.preventDefault;
    try {
      await axios.delete(`${shortUrl}/delete`)
        .then(() => {
          console.log('deleted');
        })
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
  };

  return (
    <div className='display'>
      <div className='shortened-url'>
        {shortUrl}
      </div>
      <div className='button'>
        <button className='display-button' onClick={handleDelete}>Delete</button>
        <button className='copy-to-clipboard' onClick={handleCopy}>Copy to clipboard</button>
      </div>
    </div>
  )
}

const UrlRequester = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (e) => {
    setUrl('')
    e.preventDefault();
    try {
      const response = await axios.post('https://sfy.vercel.app/shorten', {
        "original_url": { url }
      });
      setShortUrl(response.data.shorten_url);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='url-form'>
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="Enter URL"
          className="url-input"
        />
        <button className="url-button">Shorten URL</button>
      </form>
      <DisplayURL shortUrl={shortUrl} setShortUrl={setShortUrl} />
    </div>
  );
};

export default UrlRequester;
