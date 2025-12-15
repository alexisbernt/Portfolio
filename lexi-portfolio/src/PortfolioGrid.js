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
  const headerPosts = [
    {
    title: 'Artificial Intelligence Toolkit',
    desc: "Check out some of the tools you can use for changing your day to day operations (for the better).",
    link: '/ai',
    image: '/ai-dev.png', 
    },
  ];

  const cardPosts = [
    {
      title: 'Learning Videos Link',
      desc: "Follow along for tech-specific learnings that you can apply to your daily life. In video form.",
      link: 'https://www.youtube.com/@lexicyber',
      shape: 'icosahedron', 
    },
    { title: 'TheraText', desc: "The fun way for therapist's notetaking.", link: 'https://www.theratext.site/', shape: 'torus' },
    {
      title: 'eBay Collectible Coins Store',
      desc: "Collectable coins and information on how I am building my eBay shop.",
      link: '/coins',
      shape: 'icosahedron', 
    },
    { title: 'About', desc: 'The person behind this website.', link: '/about', shape: 'torus' },
    { title: 'More', desc: 'Other things I’m working on right now.', link: '/more', shape: 'torus' },
  ];

  const container = {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Inter, system-ui, sans-serif',
    position: 'relative',
  };

  const headerGrid = {
    display: 'grid',
    gridTemplateColumns: '1.3fr 1fr',
    gap: '40px',
    alignItems: 'flex-start',
    marginBottom: '80px',
  };

  const cardGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginTop: '40px',
    marginBottom: '60px',
  };

  const card = {
    backgroundColor: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 6px 16px rgba(255, 255, 255, 1)',
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const cardContent = { padding: '20px' };

  const profileCard = {
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 4px 12px rgba(255, 255, 255, 1)',
  };

  const profileImg = {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    border: '4px solid #ffffffff',
    objectFit: 'cover',
  };

  const sectionHeader = (text) => (
    <div style={{ margin: '80px 0 40px 0' }}>
      <h2 style={{
        fontSize: '2.3rem',
        fontWeight: 800,
        color: '#ffffffff',
        fontFamily: 'Georgia, "Times New Roman", serif',
        letterSpacing: '-0.02em',
        marginBottom: '10px',
        lineHeight: 1.2,
      }}>
        {text}
      </h2>
      <div style={{ width: '100%', height: '1px', backgroundColor: '#e5e7eb', marginTop: '10px' }} />
    </div>
  );

  return (
    <div className="news-container fade-in" style={container}>

      {/* Promo Banner */}
      <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', marginBottom: '60px', boxShadow: '0 6px 20px rgba(0,0,0,0.15)' }}>
        <iframe
          src="https://www.youtube.com/embed/VaqfK5nw-uc?autoplay=1&mute=1&loop=1&playlist=VaqfK5nw-uc&controls=0&showinfo=0&modestbranding=1&rel=0"
          title="Promo Video"
          allow="autoplay; fullscreen"
          frameBorder="0"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            pointerEvents: 'none',
            filter: 'brightness(0.6)',
          }}
        ></iframe>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'relative',
            zIndex: 1,
            color: '#fff',
            textAlign: 'center',
            padding: '70px 20px',
            borderRadius: '16px',
            background: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            fontWeight: '700',
            marginBottom: '20px',
            fontFamily: 'Montserrat, sans-serif',
            lineHeight: '1.3',
          }}>
            where learning meets doing
          </h1>
          <Link
            to="/learninglog"
            style={{
              display: 'inline-block',
              padding: 'clamp(10px, 2vw, 14px) clamp(20px, 4vw, 32px)',
              backgroundColor: '#fff',
              color: '#090c13ff',
              borderRadius: '10px',
              fontWeight: '600',
              textDecoration: 'none',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            }}
          >
            Go to Learning Log →
          </Link>
        </motion.div>
      </div>

      {/* Section 1: Most Recent Developments */}
      {sectionHeader("The Community For Learners")}
      <div style={headerGrid}>
        {/* Left column: one side-by-side cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
          {[headerPosts[0]].map((post, i) => {
            const isExternal = post.link.startsWith('http');
            const content = (
              <>
                {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    backgroundColor: '#f8fafc',
                  }}
                />
              ) : (
                <Canvas style={{ height: '300px', backgroundColor: '#f8fafc' }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[0, 2, 5]} />
                  <Float floatIntensity={0.6} rotationIntensity={0.3}>
                    <Shape type={post.shape} />
                  </Float>
                  <OrbitControls enableZoom={false} enablePan={false} autoRotate />
                </Canvas>
              )}
                <div style={cardContent}>
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      color: '#000000',
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#555' }}>{post.desc}</p>
                </div>
              </>
            );

            return isExternal ? (
              <a key={i} href={post.link} target="_blank" rel="noopener noreferrer" style={card}>{content}</a>
            ) : (
              <Link key={i} to={post.link} style={card}>{content}</Link>
            );
          })}
        </div>

        {/* Right column: Bio card */}
        <div style={profileCard}>
          <img src="bernthal_alexis.png" alt="Profile" style={profileImg} />
          <h2 style={{ fontSize: '1.8rem', color: '#000000ff', marginTop: '16px' }}>Hi!</h2>
          <p style={{ fontSize: '0.95rem', color: '#333', marginTop: '12px', lineHeight: '1.6' }}>
            I'm Lexi. I want to grow my brain.
            If you want to grow your brain, you should join this nerdy learning community we've built (on this website!) by signing up for the mailing list (free and no spam).
          </p>
          <Link to="/sign-up" style={{ color: '#000000ff', fontWeight: 'bold', marginTop: '12px', display: 'inline-block' }}>Join the club →</Link>
          <br />
          <Link to="/about" style={{ color: '#000000ff', fontWeight: 'bold', marginTop: '12px', display: 'inline-block' }}>Read more →</Link>
        </div>
      </div>

      {/* Section: Featured Videos */}
      {sectionHeader("Featured Videos")}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        marginBottom: '80px',
      }}>
        {[
          {
            title: "Things I've Learned in 2025",
            src: "https://www.youtube.com/embed/VaqfK5nw-uc",
          },
          {
            title: "Building Smarter AI Prompts",
            src: "https://www.youtube.com/embed/ClEBQ588Z8Y",
          },
          {
            title: "Something I Learned This Month",
            src: "https://www.youtube.com/embed/nYbB-uTSsTw?si=CzV-Hhccl1NBCaT5",
          },
        ].map((video, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                src={`${video.src}?controls=1&modestbranding=1&rel=0`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '16px 16px 0 0',
                }}
              ></iframe>
            </div>
            <div style={{ padding: '16px', textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#1e3a8a',
                margin: '8px 0 4px 0',
              }}>
                {video.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>


      {/* Section 2: The Things */}
      {sectionHeader("The Things")}
      <div style={cardGrid}>
        {cardPosts.map((post, index) => {
          const isExternal = post.link.startsWith('http');
          const CardContent = () => (
            <div style={{ padding: '20px' }}>
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
                <a href={post.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <CardContent />
                </a>
              ) : (
                <Link to={post.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <CardContent />
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default ModernLandingPage;
