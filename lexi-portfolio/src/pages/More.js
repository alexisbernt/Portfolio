import '../css/More.css';

function More() {
  return (
    <div className="more-container">
      <div className="more-grid">
        <div className="more-box">
          <h3>Professional Connections</h3>
          <p>
            <a 
              href="https://www.linkedin.com/in/alexis-bernthal" 
              target="_blank" 
              rel="noopener noreferrer"
            >
             Connect with me!
            </a>
          </p>
        </div>
        <div className="more-box">
          <h3>Social Connections</h3>
          <p>
            <a 
              href="https://www.instagram.com/alexis.wink/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              A REELy cool world.
            </a>
          </p>
        </div>
        <div className="more-box">
          <h3>Learnings in video form</h3>
          <p>
            <a 
              href="https://www.youtube.com/@lexicyber" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              One of the videos seems to be popular...
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default More;

