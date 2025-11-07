import { motion } from "framer-motion";
import "../css/About.css";

const timelineEvents = [
  {
    date: "Est. 2025",
    title: "About",
    img: 'bicentennial.png',
    description: "Coins that are Grandfather collected & family sold."
  },
  {
    date: "A Ongoing Compilation of Resources",
    title: "Where to find",
    img: "quarters1.png",
    description: "Check out the following eBay page: https://www.ebay.com/usr/alexis.coins."
  },
  {
    date: "May 12, 2022",
    title: "A Goal To Help Grow",
    img: "iPhone_Alexis.png",
    description: "The goal is to help oneanother grow in technology, business, and experiences."
  }
];

export default function Coins() {
  return (
    <div className="about-container">

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
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mailing List CTA */}
      <div className="cta">
        <h2>Stay in the loop ✉️</h2>
        <p>Sign up for my mailing list and never miss an update.</p>
        <a href="/create-gift" className="cta-button">
          Join the Mailing List
        </a>
      </div>
    </div>
  );
}
