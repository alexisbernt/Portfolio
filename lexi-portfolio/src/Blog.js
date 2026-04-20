import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sectionHeader = (title) => (
  <h2 style={{
    fontSize: "1.6rem",
    fontWeight: 800,
    marginBottom: "20px",
    color: "#111",
  }}>
    {title}
  </h2>
);

const Blog = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* --- 📰 LATEST STORIES (BLOG GRID) --- */}
      <div style={{ marginBottom: "60px" }}>
        {sectionHeader("Latest Stories")}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {[
            {
              title: "AI Is Moving Fast: What You Should Be Watching Right Now",
              desc: "An Assessment by News In A Wink.",
              img: "/ai-formula.png",
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
            <Link key={i} to={post.link} style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ y: -6 }}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ height: "180px" }}>
                  <img
                    src={post.img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div style={{ padding: "18px" }}>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#111",
                    }}
                  >
                    {post.title}
                  </h3>

                  <p style={{ fontSize: "0.9rem", color: "#555" }}>
                    {post.desc}
                  </p>

                  <span
                    style={{
                      marginTop: "10px",
                      display: "inline-block",
                      color: "#2563eb",
                      fontWeight: 600,
                      fontSize: "0.85rem",
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
  );
};

export default Blog;


