import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const sectionHeader = (title) => (
  <div style={{ marginBottom: "34px" }}>
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "#f3f4f6",
        padding: "8px 14px",
        borderRadius: "999px",
        marginBottom: "1.2rem",
        fontWeight: "600",
        color: "#444",
      }}
    >
      <Sparkles size={16} />

      <span
        style={{
          color: "#444",
          fontSize: "0.85rem",
          fontWeight: "600",
        }}
      >
        News In A Wink
      </span>
    </div>

    <h2
      style={{
        fontSize: "clamp(2.5rem, 5vw, 4.4rem)",
        fontWeight: 800,
        marginBottom: "10px",
        color: "#111111",
        lineHeight: "0.95",
        letterSpacing: "-2px",
      }}
    >
      {title}
    </h2>
  </div>
);

const Blog = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f6f3",
        padding: "clamp(24px, 4vw, 42px)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* --- 📰 LATEST STORIES (BLOG GRID) --- */}
        <div style={{ marginBottom: "60px" }}>
          {sectionHeader("Latest Stories")}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
                accent: "#f87171",
              },
              {
                title:
                  "AI Is Moving Fast: What You Should Be Watching Right Now",
                desc: "An Assessment by News In A Wink.",
                img: "/anthropic.png",
                link: "/story/3",
                accent: "#60a5fa",
              },
              {
                title:
                  "Seeking an understanding of the Royal Family and their endeavors",
                desc: "Subject Matter Expert: Amanda Matta.",
                img: "/blog1.jpeg",
                link: "/story/1",
                accent: "#facc15",
              },
              {
                title:
                  "Women Athletes & Founders (Volleyball & Alix Earle’s Brand)",
                desc: "Featured: Reese (UNI Volleyball Player).",
                img: "/@reese_news.png",
                link: "/story/2",
                accent: "#c084fc",
              },
              {
                title: "The Formula for Prompting AI",
                desc: "How do you optimize for the best Artificial Intelligence generated responses?",
                img: "/ai-formula.png",
                link: "/post2",
                accent: "#34d399",
              },
              {
                title: "Networking and Webpages Basics",
                desc: "All of those techy terms that make our webpages load: Proxy, DNS, and more.",
                img: "/ai-dev.png",
                link: "/post4",
                accent: "#fb923c",
              },
              {
                title: "Awareness, Culture, and Professionalism",
                desc: "Collaborating with Amber Ferguson.",
                img: "/amber.png",
                link: "/story/4",
                accent: "#38bdf8",
              },
              {
                title: "Retrieval Augmented Generation (RAG)",
                desc: "Understanding how RAG works, what makes it powerful, and how you can apply it.",
                img: "/rag-doll.png",
                link: "/post1",
                accent: "#818cf8",
              },
            ].map((post, i) => (
              <Link
                key={i}
                to={post.link}
                style={{
                  textDecoration: "none",
                  height: "100%",
                }}
              >
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e7e5e4",
                    borderRadius: "28px",
                    overflow: "hidden",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* TOP COLOR BLOCK */}
                  <div
                    style={{
                      background: post.accent,
                      padding: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        aspectRatio: "16 / 9",
                        overflow: "hidden",
                        borderRadius: "22px",
                        background: "white",
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
                  </div>

                  {/* CONTENT */}
                  <div
                    style={{
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        color: "#111111",
                        lineHeight: "1.35",
                        marginBottom: "12px",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "#666",
                        lineHeight: "1.7",
                        marginBottom: "20px",
                        flex: 1,
                      }}
                    >
                      {post.desc}
                    </p>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#111111",
                        fontWeight: 700,
                        fontSize: "0.92rem",
                      }}
                    >
                      Read More
                      <ArrowRight size={16} />
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