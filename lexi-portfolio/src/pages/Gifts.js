import React from 'react'; 
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import Footer from '../Footer';

// 3D Shape Renderer
const Shape = ({ type }) => {
  switch (type) {
    case 'box': return <mesh><boxGeometry args={[2, 2, 2]} /><meshStandardMaterial color="#56d375ff" /></mesh>;
    case 'sphere': return <mesh><sphereGeometry args={[1.2, 32, 32]} /><meshStandardMaterial color="#56d375ff" /></mesh>;
    case 'torus': return <mesh><torusGeometry args={[1, 0.4, 16, 100]} /><meshStandardMaterial color="#56d375ff" /></mesh>;
    case 'cone': return <mesh><coneGeometry args={[1, 2, 32]} /><meshStandardMaterial color="#56d375ff" /></mesh>;
    case 'icosahedron': return <mesh><icosahedronGeometry args={[1.2, 0]} /><meshStandardMaterial color="#56d375ff" /></mesh>;
    default: return null;
  }
};

function ModernLandingPage() {
  const headerPosts = [
    { 
      title: 'Artificial Intelligence Toolkit', 
      desc: "AI is really hot right now. Dive into the tools changing day-to-day operations.", 
      link: '/ai', 
      img: 'give.png' 
    },
    { 
      title: 'Learning Videos Link', 
      desc: "Follow along for tech-specific learnings that you can apply to your daily life. In video form.", 
      link: 'https://www.youtube.com/@lexicyber', 
      img: 'shop-bag.png' 
    }
  ];

  const cardPosts = [
    { title: 'About', desc: 'The person behind this website.', link: '/about', shape: 'box' },
    { title: 'TheraText', desc: 'An efficient and fun way for therapists to take on notetaking.', link: 'https://www.theratext.site/', shape: 'sphere' },
    { title: 'More', desc: 'Other things I’m working on right now.', link: '/more', shape: 'cone' },
  ];

  const container = {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Inter, system-ui, sans-serif',
    position: 'relative',
  };

  const background = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(120deg, #f8fafc 0%, #c8f3da 50%, #e8fff0 100%)',
    zIndex: -1,
  };

  const headerGrid = {
    display: 'grid',
    gridTemplateColumns: '1.3fr 1fr',
    gap: '40px',
    alignItems: 'flex-start',
    marginBottom: '80px'
  };

  const cardContent = { padding: '20px' };

  const profileCard = {
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  };

  const card = {
    backgroundColor: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const cardGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginTop: '40px',
    marginBottom: '60px'
  };

  const imgStyle = {
    width: '100%',
    height: '380px',
    objectFit: 'contain',
    backgroundColor: '#f8fafc',
  };

  const headerCardsColumn = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px',
    width: '100%',
    maxWidth: '550px',
  };

  if (window.innerWidth > 900) {
    headerCardsColumn.gridTemplateRows = 'auto auto';
    headerCardsColumn.gridTemplateColumns = '1fr 1fr';
    headerCardsColumn.gridAutoFlow = 'row dense';
  }

  const profileImg = {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    border: '4px solid #56d375ff',
    objectFit: 'cover'
  };

  const sectionHeader = (text) => (
    <div style={{ margin: '80px 0 40px 0' }}>
      <h2
        style={{
          fontSize: '2.3rem',
          fontWeight: 800,
          color: '#111827',
          fontFamily: 'Georgia, "Times New Roman", serif',
          letterSpacing: '-0.02em',
          marginBottom: '10px',
          lineHeight: 1.2,
        }}
      >
        {text}
      </h2>
      <div
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#e5e7eb',
          marginTop: '10px',
        }}
      />
    </div>
  );

  return (
    <div style={container}>
      <div style={background} />

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
            lineHeight: '1.3'
          }}>
            Prove you're getting smarter
          </h1>
          <Link 
            to="/learninglog" 
            style={{
              display: 'inline-block',
              padding: 'clamp(10px, 2vw, 14px) clamp(20px, 4vw, 32px)',
              backgroundColor: '#fff',
              color: '#56d375ff',
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

      {/* Section 1 */}
      {/* {sectionHeader("Most Recent Developments")} */}
      <div style={headerGrid}>
        <div style={headerCardsColumn}>
          {headerPosts.map((post, i) => (
            <Link to={post.link} key={i} style={card}>
              <img src={post.img} alt={post.title} style={imgStyle} />
              <div style={cardContent}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '8px' }}>{post.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#555' }}>{post.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Profile Card */}
        <div style={profileCard}>
          <img src="lug.png" alt="Profile" style={profileImg} />
          <h2 style={{ fontSize: '1.8rem', color: '#56d375ff', marginTop: '16px' }}>Hi!</h2>
          <p style={{ fontSize: '0.95rem', color: '#333', marginTop: '12px', lineHeight: '1.6' }}>
            I'm Lexi. I like to learn and make things.  
            If you like to learn and make things, you should join this nerdy website fam we've built by signing up for the mailing list (free and no spam). 
          </p>
          <Link to="/signup" style={{ color: '#56d375ff', fontWeight: 'bold', marginTop: '12px', display: 'inline-block' }}>
            Join the club →
          </Link>
          <br/>
          <Link to="/about" style={{ color: '#56d375ff', fontWeight: 'bold', marginTop: '12px', display: 'inline-block' }}>
            Read more →
          </Link>
        </div>
      </div>

      {/* Section 2 */}
      {sectionHeader("The Things")}
      <div style={cardGrid}>
        {cardPosts.map((post, index) => {
          const isExternal = post.link.startsWith("http");
          const CardContent = () => (
            <div style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#56d375ff' }}>{post.title}</h2>
              <p style={{ fontSize: '0.9rem', color: '#444', marginBottom: '12px' }}>{post.desc}</p>
              <Canvas style={{ height: '180px', marginBottom: '12px' }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 2, 5]} />
                <Float floatIntensity={0.4} rotationIntensity={0.2}>
                  <Shape type={post.shape} />
                </Float>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate />
              </Canvas>
              <span style={{ color: '#56d375ff', fontWeight: 'bold' }}>Read More →</span>
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

      <Footer />
    </div>
  );
}

export default ModernLandingPage;
