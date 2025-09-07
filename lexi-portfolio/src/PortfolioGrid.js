import React from 'react'; 
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import Footer from './Footer';

// 3D Shape Renderer
const Shape = ({ type }) => {
  switch (type) {
    case 'box': return <mesh><boxGeometry args={[2, 2, 2]} /><meshStandardMaterial color="#2563eb" /></mesh>;
    case 'sphere': return <mesh><sphereGeometry args={[1.2, 32, 32]} /><meshStandardMaterial color="#2563eb" /></mesh>;
    case 'torus': return <mesh><torusGeometry args={[1, 0.4, 16, 100]} /><meshStandardMaterial color="#2563eb" /></mesh>;
    case 'cone': return <mesh><coneGeometry args={[1, 2, 32]} /><meshStandardMaterial color="#2563eb" /></mesh>;
    case 'icosahedron': return <mesh><icosahedronGeometry args={[1.2, 0]} /><meshStandardMaterial color="#2563eb" /></mesh>;
    default: return null;
  }
};

function ModernLandingPage() {
  // Split posts into two groups
  const headerPosts = [
    { title: "Hey! What's UP? Start here.", desc: "Hi , I'm Lexi and this is my real take on starting a job in corporate America in 2025.", link: '/about', img: 'sky.png' },
    { title: 'Artificial Intelligence Toolkit', desc: "What do all of these zeros and ones represent? How to they relate to AI. Whether you know or don't learn come learn more here.", link: '/ai', img: '0101.png' }
  ];

  const cardPosts = [
    { title: 'About', desc: 'A glimpse into my journey and passions.', link: '/about', shape: 'box' },
    { title: 'TheraText', desc: 'A efficient and fun way for therapists to take on notetaking.', link: 'https://www.theratext.site/', shape: 'sphere' },
    { title: 'More', desc: 'Other cool things I’m working on right now.', link: '/more', shape: 'cone' },
    { title: 'Learning Log', desc: 'Tracking my progress & growth along the way.', link: '/learninglog', shape: 'icosahedron' }
  ];

  // ===== Styles =====
  const container = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Georgia, serif',
  };

  const headerGrid = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '40px',
    alignItems: 'flex-start',
    marginBottom: '60px'
  };

  const cardGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  };

  const card = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
  };

  const imgStyle = {
    width: '100%',
    height: '160px',
    objectFit: 'cover'
  };

  const cardContent = {
    padding: '16px'
  };

  const profileCard = {
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  };

  const profileImg = {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    border: '4px solid #3b82f6',
    objectFit: 'cover'
  };

  // ===== Return =====
  return (
    <div style={container}>
      {/* Section Header */}
      <h2 style={{
        fontSize: '1.8rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        color: '#1e293b',
        borderBottom: '2px solid #e5e7eb',
        paddingBottom: '0.5rem'
      }}>
        Most Recent Developments
      </h2>

      {/* HEADER SECTION */}
      <div style={headerGrid}>
        
        {/* Left: Image cards */}
        <div style={cardGrid}>
          {headerPosts.map((post, i) => (
            <Link to={post.link} key={i} style={card}>
              <img src={post.img} alt={post.title} style={imgStyle} />
              <div style={cardContent}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '8px' }}>{post.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>{post.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Right: Bio card */}
        <div style={profileCard}>
          <img 
            src="profile.png" 
            alt="Profile" 
            style={profileImg}
          />
          <h2 style={{ fontSize: '1.8rem', color: '#1e40af', marginTop: '16px' }}>Hi!</h2>
          <p style={{ fontSize: '0.95rem', color: '#333', marginTop: '12px', lineHeight: '1.6' }}>
            I'm Lexi, and I like to learn and make things.  
            If you like to learn and make things too you should follow along. 
          </p>
          <Link to="/about" style={{ color: '#2563eb', fontWeight: 'bold', marginTop: '12px', display: 'inline-block' }}>
            Read more →
          </Link>
        </div>
      </div>

      {/* Section Header */}
      <h2 style={{
        fontSize: '1.8rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        color: '#1e293b',
        borderBottom: '2px solid #e5e7eb',
        paddingBottom: '0.5rem'
      }}>
        My Business Tools
      </h2>

      {/* 3D CARDS SECTION */}
      <div style={cardGrid}>
        {cardPosts.map((post, index) => {
          const isExternal = post.link.startsWith("http");

          const CardContent = () => (
            <div style={{ padding: '16px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#1e3a8a' }}>{post.title}</h2>
              <p style={{ fontSize: '0.9rem', color: '#444', marginBottom: '12px' }}>{post.desc}</p>
              <Canvas style={{ height: '180px', marginBottom: '12px' }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 2, 5]} />
                <Float floatIntensity={0.4} rotationIntensity={0.2}>
                  <Shape type={post.shape} />
                </Float>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate />
              </Canvas>
              <span style={{ color: '#2563eb', fontWeight: 'bold' }}>Read More →</span>
            </div>
          );

          return (
            <motion.div key={index} whileHover={{ scale: 1.05 }} style={card}>
              {isExternal ? (
                <a href={post.link} target="_blank" rel="noopener noreferrer" 
                   style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <CardContent />
                </a>
              ) : (
                <Link to={post.link} 
                      style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <CardContent />
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default ModernLandingPage;


    {/* Framed Main Content */}
    {/* <div className="main-container">
      <PortfolioGrid />
    </div> */}

      {/* Intro Area */}
      {/* Hey! What's UP? Start here.
... Aside from the headache that comes with funding and living the life that you want for you and your family ...
        NOT MUCH
The constant race of working to find a job that pays better, allows for a better work-life balance, let's you work from home, is exhausting.
Kind In Business supports you and your needs when it comes to navigating your job in business.  */}
      {/* "Hi , I'm Lexi and this is my real take on starting a job in corporate America in 2025.
This site is full of incredible resources and ideas that can help you as you navigate your career path." */}

// The word of tech

