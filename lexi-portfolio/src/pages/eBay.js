import { motion } from "framer-motion";
import "../css/About.css";
import Footer from "../Footer";

const timelineEvents = [
  {
    date: "Est. 2025",
    title: "Collectible Coins Storefront",
    img: "bicentennial.png",
    description:
      "To shop to an exclusive storefront offering collectible rare U.S. coins from a long-standing family collection, check out 'alexis.coins' on eBay."
  },
  {
    date: "Discover Authentic Collectibles",
    title: "Shop the Collection",
    img: "quarters1.png",
    description:
      "Browse our verified listings, rare sets, and premium pieces.",
    link: "https://www.ebay.com/usr/alexis.coins"
  }
    // {
  //   date: "A Commitment to Quality",
  //   title: "Our Mission",
  //   img: "iPhone_Alexis.png",
  //   description:
  //     "We aim to provide collectors with trustworthy, hand-selected items while growing a community centered around history, authenticity, and shared passion."
  // }
];

export default function Coins() {
  return (
    <div className="about-container">

      <header className="store-banner">
        <div className="store-banner-content">
          <div className="store-banner-stars">
            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
          </div>
          <a
            href="https://www.ebay.com/usr/alexis.coins"
            target="_blank"
            rel="noopener noreferrer"
            className="store-banner-link"
          >
            Visit the Official Store
          </a>
        </div>
        <p className="store-banner-quote">
        "A destination that can be trusted for collectible U.S. coins.
        From one family collection to another."
      </p>
      </header>
      
      {/* Timeline Section */}
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`timeline-event ${index % 2 === 0 ? "right" : "left"}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="timeline-img">
              <img src={event.img} alt={event.title} />
            </div>

            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p className="date">{event.date}</p>
              <p>{event.description}</p>
              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="timeline-button"
                >
                  Visit Store
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🎥 Video Hero Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "28%", // 16:9 aspect ratio
          borderRadius: "16px",
          overflow: "hidden",
          marginBottom: "60px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/t8Av9oRu8R8?autoplay=1&mute=1&playsinline=1"
          title="Promo Video"
          allow="autoplay; fullscreen"
          frameBorder="0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            filter: "brightness(0.65)"
          }}
        />
      </div>

      {/* Mailing List CTA */}
      <div className="cta">
        <h2>Stay Connected ✉️</h2>
        <p>
          Join the mailing list for early access to new listings, exclusive deals,
          and collection insights.
        </p>
        <a href="/create-gift" className="cta-button">
          Join the Mailing List
        </a>
      </div>

      <Footer />
    </div>
  );
}

