import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

const Shape = ({ type }) => {
  switch (type) {
    case 'box': return <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color='#2563eb' />
      </mesh>;
    case 'sphere': return <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color='#2563eb' />
      </mesh>;
    case 'torus': return <mesh>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial color='#2563eb' />
      </mesh>;
    case 'cone': return <mesh>
        <coneGeometry args={[1, 2, 32]} />
        <meshStandardMaterial color='#2563eb' />
      </mesh>;
    case 'icosahedron': return <mesh>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color='#2563eb' />
      </mesh>;
    default: return null;
  }
};

function ModernLandingPage() {
  const posts = [
    { title: 'About', desc: 'A glimpse into my journey and passions.', link: '/about', shape: 'box' },
    { title: 'TheraText', desc: 'An AI-powered writing companion for mental clarity.', link: '/theratext', shape: 'sphere' },
    { title: "Lexi's Cyber Club", desc: 'A hub for tech lovers and security enthusiasts.', link: '/cyberclub', shape: 'torus' },
    { title: 'More', desc: 'Other cool things I’m working on right now.', link: '/more', shape: 'cone' },
    { title: 'Learning Log', desc: 'Tracking my progress & growth along the way.', link: '/learninglog', shape: 'icosahedron' }
  ];

  const containerStyle = {
    minHeight: '100vh',
    fontFamily: 'Playfair Display, serif',
    backgroundColor: '#fefefe',
    margin: 0,
    padding: 0
  };

  const heroStyle = {
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: 'black',
    width: '100vw',
    overflow: 'hidden'
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1
  };

  const heroTextStyle = {
    color: 'white',
    fontSize: '2.5rem',
    fontWeight: '700',
    textAlign: 'center',
    zIndex: 1
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
    maxWidth: '1100px',
    margin: '50px auto',
    padding: '0 20px'
  };

  const cardStyle = {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
    textDecoration: 'none',
    color: '#1e3a8a',
    border: '2px solid rgba(0,0,0,0.15)'
  };

  const cardHoverStyle = {
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
    border: '2px solid rgba(0,0,0,0.35)'
  };

  const linkStyle = {
    marginTop: '16px',
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: 600
  };

  return (
    <div style={containerStyle}>
      <div style={heroStyle}>
        <video style={videoStyle} autoPlay loop muted playsInline>
          <source src='/banner.mp4' type='video/mp4' />
        </video>
        <div style={heroTextStyle}>Welcome to My Portfolio</div>
      </div>
      <div style={gridStyle}>
        {posts.map((post, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            style={cardStyle}
            onMouseEnter={e => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: 'translateY(0)', boxShadow: '0 6px 16px rgba(0,0,0,0.08)', border: '2px solid rgba(0,0,0,0.15)' })}
          >
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <Canvas style={{ height: '180px' }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 2, 5]} />
              <Float floatIntensity={0.4} rotationIntensity={0.2}>
                <Shape type={post.shape} />
              </Float>
              <OrbitControls enableZoom={false} enablePan={false} autoRotate />
            </Canvas>
            <Link to={post.link} style={linkStyle}>Read More →</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ModernLandingPage;



    {/* Framed Main Content */}
    {/* <div className="main-container">
      <PortfolioGrid />
    </div> */}

      {/* Intro Area */}
      {/* Hey! What's UP? 
... Aside from the headache that comes with funding and living the life that you want for you and your family ...
        NOT MUCH
The constant race of working to find a job that pays better, allows for a better work-life balance, let's you work from home, is exhausting.
Kind In Business supports you and your needs when it comes to navigating your job in business.  */}
      {/* "Hi , I'm Lexi and this is my real take on starting a job in corporate America in 2025.
This site is full of incredible resources and ideas that can help you as you navigate your career path." */}

