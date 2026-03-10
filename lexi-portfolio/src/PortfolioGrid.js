import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import Footer from './Footer';
import { MessageSquareText } from 'lucide-react';

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
    title: "THE ISSUES WITH NEWS AND JOURNALISM TODAY",
    desc: "Too many people have lost trust or interest in world news. Recent studies show Millennials, Gen Zers, and people from Gen Alpha don't keep up with what is going on in the world. Let's change that data. 'News In A Wink' brings quick recaps of what's going on in the world to the platforms young adults and teens are on the most. Moreover, at News In A Wink we fact check against the primary source to reduce bias and misinformation. We're constantly checking out sources across the spectrum to bring you the most accurate information possible.",
    link: '/',
    image: '/bannerC.png', 
    },
  ];

  const cardPosts = [
    {
      title: 'News In A Wink',
      desc: "5 News Facts In 50 Seconds.",
      link: '/',
      shape: 'icosahedron', 
    },
    { title: 'TheraText', desc: "The fun way for therapist's notetaking.", link: 'https://www.theratext.site/', shape: 'torus' },
    { title: 'Artificial Intelligence Tool', desc: 'Check out some of the tools you can use for changing your day to day operations (for the better).', link: '/ai', shape: 'icosahedron'},
    { title: 'About', desc: 'The person behind this website.', link: '/about', shape: 'torus' },
    {
      title: 'eBay Collectible Coins Store',
      desc: "Collectable coins and information on how I am building my eBay shop.",
      link: '/coins',
      shape: 'icosahedron', 
    },
    { title: 'Learning Log', desc: 'Where learning meets doing.', link: '/learninglog', shape: 'torus' },
  ];

  const container = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "clamp(16px, 4vw, 32px)",
  fontFamily: "Inter, system-ui, sans-serif",
};

  const section = {
    marginTop: "clamp(40px, 6vw, 80px)",
  };

  const headerGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "clamp(16px, 3vw, 24px)",
    alignItems: "stretch",
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
    width: "100%",
    maxWidth: "420px",
    margin: "0 auto",
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
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "40%",
          minHeight: "240px",
        }}  >
        <iframe
          src="https://www.youtube.com/embed/uI13dmzfg_E?autoplay=1&mute=1&loop=1&playlist=uI13dmzfg_E&controls=0&modestbranding=1&rel=0"
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
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: '700',
            marginBottom: '20px',
            fontFamily: 'Montserrat, sans-serif',
            lineHeight: '1.3',
          }}>
           “The Week Ahead, Made Clear.”
          </h1>
          <Link
            to="/news-signup"
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
            Get The News Forecast →
          </Link>
        </motion.div>
      </div>

      {/* Condensed Action Strip Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(16px, 3vw, 24px)",
          borderRadius: '18px',
          overflow: 'hidden',
          marginBottom: '70px',
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(245,247,255,0.9))',
          backdropFilter: 'blur(14px)',
          boxShadow:
            '0 20px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
        }}
      >
        {[
          {
            title: 'What Is News In A Wink?',
            desc: 'A Journalism Project to get more people talking about world news.',
            icon: '🎯',
          },
          {
            title: 'What to Expect:',
            desc: 'Monday: Weekly news rundown. Thursday: Interview with a journalist or public figure.',
            icon: '➕',
          },
          {
            title: 'The Mission:',
            desc: 'The goal is to help people: (1) Stay informed. (2) Feel motivated to get involved in their communities.',
            icon: '🧠',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              padding: '26px 28px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              background: 'rgba(255,255,255,0.75)',
              cursor: 'default',
            }}
          >
            {/* Icon Pill */}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                background:
                  'linear-gradient(135deg, #2563eb, #1e40af)',
                color: '#fff',
                boxShadow: '0 8px 18px rgba(37,99,235,0.35)',
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  margin: 0,
                  color: '#0f172a',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  marginTop: '6px',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  color: '#475569',
                }}
              >
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* --- Survey CTA Section --- */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        style={{
          margin: "clamp(30px,5vw,50px) 0",
          padding: "clamp(20px,4vw,28px)",
          borderRadius: "20px",
          background: "#ffffff",
          boxShadow: "0 20px 50px rgba(15,23,42,0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "16px",
          maxWidth: "720px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Icon */}
        <div
          style={{
            background: 'rgba(37,99,235,0.1)',
            padding: '12px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MessageSquareText size={24} color="#2563eb" />
        </div>

        {/* Text */}
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#0f172a',
            }}
          >
            What News Is On Your Mind?
          </h3>
          <p
            style={{
              margin: '6px 0 0 0',
              fontSize: '0.9rem',
              color: '#475569',
            }}
          >
            Share what stories matter most to you.
          </p>
        </div>

        {/* Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSevB8KwJ3scUNJjpomz_Ts-Nmesbcz8dSaZpY9YFVlCc_l_Tw/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#2563eb',
            color: '#ffffff',
            padding: '11px 22px',
            borderRadius: '999px',
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            boxShadow: '0 8px 20px rgba(37,99,235,0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow =
              '0 12px 28px rgba(37,99,235,0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow =
              '0 8px 20px rgba(37,99,235,0.3)';
          }}
        >
          Take the Survey
        </a>
      </motion.section>

      {/* --- Signup Banner --- */}
      <Link to="/news-signup" className="signup-banner">
        Join the 530+ who get their news updates in less than a minute. Sign Up Now →
      </Link>

      {/* Section: Featured Videos */}
      <div style={section}>
        {sectionHeader("Featured Videos")}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        marginBottom: "clamp(20px, 3vw, 32px)"
      }}>
        {[
          {
            title: "News For The Week In Less Than A Minute",
            src: "https://www.youtube.com/embed/5g8bPzI7ATk",
          },
          {
            title: "Catch Up With Global Events Fast",
            src: "https://www.youtube.com/embed/aO8flTH06-8",
          },
          {
            title: "News Pulled From Sources Across The Spectrum & Globe",
            src: "https://www.youtube.com/embed/1CNhia3X828",
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
      </div>

      {/* --- Perspective Statement Section --- */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{
          margin: '15px 0',
          padding: '15px 15px',
          borderRadius: '20px',
          textAlign: 'center',
          background: '#ffffff',
          boxShadow: '0 20px 50px rgba(15,23,42,0.08)',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(0.7rem, 2.5vw, 1.4rem)',
              fontWeight: 800,
              lineHeight: 1.4,
              letterSpacing: '-0.01em',
              color: '#0f172a',
              margin: 0,
            }}
          >
            "News exposes the pathological problems in society,
            <span style={{ color: '#2563eb' }}> but awareness of these issues inspires us to improve, take action, and accomplish big things."</span>
          </h2>
        </div>
      </motion.section>

      {/* Section 1: Most Recent Developments */}
      <div style={section}>
      {sectionHeader("Staying Informed. Efficiently.")}
      <div style={headerGrid} className="header-grid">
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
                    height: 'clamp(200px, 40vw, 300px)',
                    objectFit: 'cover',
                    backgroundColor: '#f8fafc',
                  }}
                />
              ) : (
                <Canvas style={{ height: 'clamp(200px, 40vw, 300px)', backgroundColor: '#f8fafc' }}>
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
        </div>

        {/* Right column: Bio card */}
        <div style={profileCard} className="profile-card">
          <img src="ai-dev.png" alt="Profile" style={profileImg} />
          <h2 style={{ fontSize: '1.8rem', color: '#000000ff', marginTop: '16px' }}>Hi!</h2>
          <p style={{ fontSize: '0.95rem', color: '#333', marginTop: '12px', lineHeight: '1.6' }}>
            At News In A Wink, we know it is not our job to tell you how to think. Instead, we provide the information to help you get up-to-date quickly.
            Then, you decide what to think and what to do. If you want quick news updates, please sign up for the mailing list (free and only one email every Tuesday).
          </p>
          <Link to="/sign-up" style={{ color: '#000000ff', fontWeight: 'bold', marginTop: '12px', display: 'inline-block' }}>Join the club →</Link>
          <br />
          <Link to="/about" style={{ color: '#000000ff', fontWeight: 'bold', marginTop: '12px', display: 'inline-block' }}>Read more →</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ModernLandingPage;

      {/* Section 2: The Things
      <div style={section}>
      {sectionHeader("The Things.")}
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
      </div> */}