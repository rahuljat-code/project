
import React from 'react';

function QRCodeGenerator(props) {
  // Just copy the link to clipboard, no fancy share
  function handleShare() {
    navigator.clipboard.writeText(props.url);
    alert('Link copied!');
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: 20, borderRadius: 10, background: '#fff', maxWidth: 300, margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 10 }}>Share Heritage Site</h3>
      <div style={{ textAlign: 'center', fontSize: 40, marginBottom: 10 }}>🏛️</div>
      <p style={{ textAlign: 'center', fontSize: 14, marginBottom: 10 }}>
        Share {props.siteName} info with friends
      </p>
      <button onClick={handleShare} style={{ display: 'block', margin: '0 auto', padding: '8px 16px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer' }}>
        Copy Link
      </button>
    </div>
  );
}

export default QRCodeGenerator;