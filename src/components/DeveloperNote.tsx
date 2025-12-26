import { useEffect, useState } from "react";

const DeveloperNote = () => {
  const [showNote, setShowNote] = useState(false);

  // Show the popup on every page refresh
  useEffect(() => {
    setShowNote(true);
  }, []);

  const handleClose = () => {
    setShowNote(false);
  };

  if (!showNote) {
    return null;
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)'
      }}
    >
      <div 
        style={{ 
          backgroundColor: '#166534',
          color: 'white',
          maxWidth: '600px',
          width: '100%',
          margin: '0 16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          borderRadius: '8px',
          padding: '32px',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}
      >
        <h3 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '24px',
          margin: '0 0 24px 0'
        }}>
          🌟 Assalam Alaikum! Welcome to WasanGroup 🌟
        </h3>
        
        <p style={{
          fontSize: '18px',
          textAlign: 'center',
          marginBottom: '24px',
          lineHeight: '1.6'
        }}>
          I have added some exciting new features similar to Alibaba! You can now explore our 
          <strong> "Discover your next business opportunity"</strong> section with real product listings, 
          pricing, and direct supplier connections.
        </p>
        
        <div style={{
          backgroundColor: '#15803d',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px'
        }}>
          <p style={{ fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>✨ New Features Added:</p>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
            <li style={{ marginBottom: '8px' }}>🛍️ Product discovery with real images and pricing</li>
            <li style={{ marginBottom: '8px' }}>🏭 Direct factory sourcing connections</li>
            <li style={{ marginBottom: '8px' }}>📱 Mobile-optimized browsing experience</li>
            <li style={{ marginBottom: '8px' }}>🔍 Enhanced search and category filtering</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ marginBottom: '12px' }}>For any feedback or support:</p>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px', 
            alignItems: 'center'
          }}>
            <span>📞 +91 80086 91258</span>
            <a
              href="https://wa.me/918008691258"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#86efac', textDecoration: 'underline' }}
            >
              💬 WhatsApp Chat
            </a>
            <a
              href="https://www.nexverse.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#93c5fd', textDecoration: 'underline' }}
            >
              🌐 Nexverse
            </a>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <button
            onClick={handleClose}
            style={{ 
              backgroundColor: 'white',
              color: '#166534',
              fontWeight: 'bold',
              padding: '12px 32px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}
            onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#f3f4f6'}
            onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'white'}
          >
            Explore Now! 🚀
          </button>
        </div>
        
        <p style={{ 
          fontSize: '12px', 
          textAlign: 'center', 
          color: '#bbf7d0',
          margin: 0
        }}>
          This message will appear every time you refresh the page.
        </p>
      </div>
    </div>
  );
};

export default DeveloperNote;
