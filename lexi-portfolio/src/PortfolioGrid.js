import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
import { MessageSquareText, Newspaper } from "lucide-react";

function ModernLandingPage() {

  const container = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "clamp(16px, 4vw, 40px)",
    fontFamily: '"Inter", system-ui, sans-serif',
    minHeight: "100vh",
    background: "linear-gradient(135deg, #4b5563 0%, #111827 100%)",
  };

  const section = {
    marginTop: "clamp(50px, 8vw, 90px)",
  };

  const sectionHeader = (text) => (
    <div style={{ margin: 'clamp(50px,8vw,80px) 0 30px' }}>
      <h2 style={{
        fontSize: 'clamp(1.6rem, 4vw, 2.3rem)',
        fontWeight: 800,
        color: '#fff',
        fontFamily: '"Playfair Display", Georgia, serif',
      }}>
        {text}
      </h2>
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: '#e5e7eb',
        marginTop: '10px',
        opacity: 0.2
      }} />
    </div>
  );

  return (
    <div style={container}>

      {/* --- HERO --- */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "clamp(16px, 3vw, 24px)",
        marginBottom: "clamp(30px, 6vw, 60px)"
      }}>

        {/* VIDEO */}
        <div style={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          aspectRatio: "16 / 9",
        }}>
          <iframe
            src="https://www.youtube.com/embed/0TZ_UzZETCs?autoplay=1&mute=1&loop=1&playlist=0TZ_UzZETCs&controls=0"
            title="Promo Video"
            allow="autoplay"
            style={{
              // position: "absolute",
              width: "100%",
              height: "100%",
              border: "none",
              filter: "brightness(0.7)",
            }}
          />

          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "clamp(12px, 3vw, 20px)",
            background: "rgba(0,0,0,0.25)",
            // backdropFilter: "blur(8px)",
          }}>
            <h1 style={{
              fontSize: "clamp(1.2rem, 4vw, 2rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.3
            }}>
              “The Week Ahead, Made Clear.”
            </h1>

            <Link to="/newsinawink" style={{
              marginTop: "clamp(10px,2vw,16px)",
              padding: "clamp(8px,2vw,12px) clamp(16px,4vw,22px)",
              backgroundColor: "#fff",
              color: "#111",
              borderRadius: "999px",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "clamp(0.8rem,2.5vw,1rem)"
            }}>
              Get The News Forecast →
            </Link>
          </div>
        </div>

        {/* BLOG CARD */}
        <div style={{
          borderRadius: "20px",
          background: "#fff",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(20px, 5vw, 32px)",
          textAlign: "center"
        }}>
          <img src="/logo.png" alt="" style={{
            width: "clamp(60px, 20vw, 90px)",
            marginBottom: "16px"
          }} />

          <h2 style={{
            fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
            fontWeight: 700,
            color: "#111"
          }}>
            News In A Wink!
          </h2>

          <p style={{
            fontSize: "clamp(0.8rem,2.5vw,0.95rem)",
            color: "#555",
            marginBottom: "18px"
          }}>
            Fast, factual, and fun stories right when you need them.
          </p>

          <Link to="/blog" style={{
            padding: "10px 20px",
            background: "#000",
            color: "#fff",
            borderRadius: "999px",
            fontWeight: 600,
            textDecoration: "none"
          }}>
            Explore Blog →
          </Link>
        </div>
      </div>

      {/* --- STORIES --- */}
      <div>
        {sectionHeader("")}

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "clamp(16px,3vw,24px)",
        }}>
          {[
            {
              title: "AI Is Moving Fast: What You Should Be Watching Right Now",
              desc: "An Assessment by News In A Wink.",
              img: "/anthropic.png",
              link: "/story/3",
            },
            {
              title: "Women Athletes & Founders (Volleyball & Alix Earle’s Brand)",
              desc: "Featured: Reese (UNI Volleyball Player).",
              img: "/@reese_news.png",
              link: "/story/2",
            },
            {
              title: "Seeking an understanding of the Royal Family and their endeavors",
              desc: "Subject Matter Expert: Amanda Matta.",
              img: "/blog1.jpeg",
              link: "/story/1",
            },
          ].map((post, i) => (
            <Link key={i} to={post.link} style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ y: -6 }}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                }}
              >
                <img src={post.img} alt="" style={{
                  width: "100%",
                  height: "clamp(150px, 30vw, 180px)",
                  objectFit: "cover"
                }} />

                <div style={{ padding: "16px" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111" }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#555" }}>
                    {post.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* --- VIDEOS --- */}
      <div style={section}>
        {sectionHeader("")}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(16px,3vw,24px)',
        }}>
          {[
            "https://www.youtube.com/embed/5g8bPzI7ATk",
            "https://www.youtube.com/embed/aO8flTH06-8",
            "https://www.youtube.com/embed/1CNhia3X828",
          ].map((src, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              aspectRatio: "16 / 9"
            }}>
              <iframe
                src={src}
                title="video"
                style={{ width: "100%", height: "100%", border: "none" }}
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- NEWSLETTER CTA --- */}
      <div style={{
        marginTop: "clamp(40px,8vw,70px)",
        padding: "clamp(24px,6vw,40px)",
        borderRadius: "20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #111827, #1f2937)",
        color: "#fff",
      }}>
        <h2 style={{
          fontSize: "clamp(1.4rem,4vw,1.8rem)",
          fontWeight: 800
        }}>
          Stay Ahead of the Week
        </h2>

        <p style={{
          color: "#d1d5db",
          marginBottom: "20px",
          fontSize: "clamp(0.85rem,2.5vw,1rem)"
        }}>
          Get the clearest, fastest news breakdown delivered to you.
        </p>

        <Link to="/newsletter">
          <button style={{
            padding: "12px 26px",
            borderRadius: "999px",
            border: "none",
            background: "#ffffff",
            color: "#111",
            fontWeight: 600,
            fontSize: "clamp(0.85rem,2.5vw,1rem)",
            cursor: "pointer"
          }}>
            Get The Newsletter →
          </button>
        </Link>
      </div>

      {/* --- SURVEY --- */}
      <motion.section style={{
        margin: "clamp(40px,8vw,70px) 0",
        padding: "clamp(20px,5vw,30px)",
        borderRadius: "20px",
        background: "#fff",
        boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}>
        <div style={{ textAlign: "center", flex: "1 1 250px" }}>
          <MessageSquareText size={28} color="#2563eb" />
          <h3>What News Is On Your Mind?</h3>
          <a href="https://docs.google.com/forms" target="_blank" rel="noreferrer">
            Take Survey
          </a>
        </div>

        <div style={{ textAlign: "center", flex: "1 1 250px" }}>
          <Newspaper size={28} color="#10b981" />
          <h3>Get Your News</h3>
          <Link to="/newsinawink">Go →</Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default ModernLandingPage;