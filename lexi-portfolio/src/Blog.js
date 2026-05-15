import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const sectionHeader = (title) => (
  <div style={{ marginBottom: "28px" }}>
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "rgba(255,255,255,0.08)",
        padding: "8px 14px",
        borderRadius: "999px",
        marginBottom: "1rem",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Sparkles size={16} color="#60a5fa" />

      <span
        style={{
          color: "white",
          fontSize: "0.85rem",
          fontWeight: "600",
        }}
      >
        News In A Wink
      </span>
    </div>

    <h2
      style={{
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: 800,
        marginBottom: "10px",
        color: "white",
        lineHeight: "1.05",
      }}
    >
      {title}
    </h2>

    {/* <p
      style={{
        color: "#cbd5e1",
        fontSize: "1rem",
        lineHeight: "1.7",
        maxWidth: "700px",
      }}
    >
      Fast-moving stories, modern insights, and news designed for the next
      generation of readers.
    </p> */}
  </div>
);

const Blog = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #020617 0%, #0f172a 45%, #1d4ed8 100%)",
        padding: "clamp(20px, 4vw, 40px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* --- 📰 LATEST STORIES (BLOG GRID) --- */}
        <div style={{ marginBottom: "60px" }}>
          {sectionHeader("Latest Stories")}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                title:
                  "Adulting 101: The Fundamentals of What Nobody Tells You Today",
                desc: "An Assessment from News In A Wink.",
                img: "/adulting-101.png",
                link: "/story/6",
              },
              {
                title:
                  "AI Is Moving Fast: What You Should Be Watching Right Now",
                desc: "An Assessment by News In A Wink.",
                img: "/anthropic.png",
                link: "/story/3",
              },
              {
                title:
                  "Seeking an understanding of the Royal Family and their endeavors",
                desc: "Subject Matter Expert: Amanda Matta.",
                img: "/blog1.jpeg",
                link: "/story/1",
              },
              {
                title:
                  "Women Athletes & Founders (Volleyball & Alix Earle’s Brand)",
                desc: "Featured: Reese (UNI Volleyball Player).",
                img: "/@reese_news.png",
                link: "/story/2",
              },
              {
                title: "The Formula for Prompting AI",
                desc: "How do you optimize for the best Artificial Intelligence generated responses?",
                img: "/ai-formula.png",
                link: "/post2",
              },
              {
                title: "Networking and Webpages Basics",
                desc: "All of those techy terms that make our webpages load: Proxy, DNS, and more.",
                img: "/ai-dev.png",
                link: "/post4",
              },
              {
                title: "Awareness, Culture, and Professionalism",
                desc: "Collaborating with Amber Ferguson.",
                img: "/amber.png",
                link: "/story/4",
              },
              {
                title: "Retrieval Augmented Generation (RAG)",
                desc: "Understanding how RAG works, what makes it powerful, and how you can apply it.",
                img: "/rag-doll.png",
                link: "/post1",
              },
            ].map((post, i) => (
              <Link
                key={i}
                to={post.link}
                style={{ textDecoration: "none" }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "22px",
                    overflow: "hidden",
                    backdropFilter: "blur(14px)",
                    boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 9",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={post.img}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                    />
                  </div>

                  <div style={{ padding: "20px" }}>
                    <h3
                      style={{
                        fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                        fontWeight: 700,
                        color: "white",
                        lineHeight: "1.4",
                        marginBottom: "10px",
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "clamp(0.82rem, 1vw, 0.92rem)",
                        color: "#cbd5e1",
                        lineHeight: "1.7",
                        marginBottom: "14px",
                      }}
                    >
                      {post.desc}
                    </p>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#60a5fa",
                        fontWeight: 700,
                        fontSize: "0.88rem",
                      }}
                    >
                      Read More →
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;