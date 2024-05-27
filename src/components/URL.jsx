import React, { useState } from 'react';
import axios from 'axios';
// import 'dotenv/config'
import './components_css/UrlRequester.css';

function DisplayURL({ shortUrl, setShortUrl }) {
  if (!shortUrl) {
    return;
  }

  const handleDelete = async e => {
    e.preventDefault;
    try {
      await axios.delete(`${shortUrl}/delete`)
        .then(() => {
          setShortUrl('');
          alert('deleted!')
          console.log('deleted');
        })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='display'>
      <div className='shortened-url'>
        {shortUrl}
      </div>
      <div className='button'>
        <button className='display-button' onClick={handleDelete}>Delete</button>
        <button className='copy-to-clipboard' onClick={() => navigator.clipboard.writeText(shortUrl)}>Copy to clipboard</button>
      </div>
    </div>
  )
}

const UrlRequester = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const checkURL = URL_String => {
    try {
      new URL(URL_String)
      return true;
    } catch (err) {
      return false;
    }
  }

  const handleSubmit = async e => {
    if (checkURL(url)) {
      e.preventDefault();
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/shorten`, {
          "original_url": { url }
        });
        setShortUrl(response.data.shorten_url);
        setUrl('')
      } catch (error) {
        console.error('Error shortening URL:', error);
      }
    } else {
      alert('Enter valid URL!')
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='url-form'>
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
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
