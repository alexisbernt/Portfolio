import { motion } from "framer-motion";
import "../css/About.css";
import Footer from "../Footer";
import { Link } from 'react-router-dom';

const timelineEvents = [
  {
    date: "Est. 2025",
    title: "About And Contact",
    img: 'business-image.png',
    description: "The goal of the News In A Wink site is to help you stay informed with quick, unbiased news updates."
  },
  {
    date: "A Ongoing Compilation of Resources",
    title: "The World of Tech",
    img: "VS_Git_Alexis.png",
    description: "Each week News In A Wink brings you 5 global headlines you should be aware of and an episode that features what a public figure you follow is paying attention to in the news."
  },
  {
    date: "Dec. 15, 2025",
    title: "A Goal To Help Grow",
    img: "iPhone_Alexis.png",
    description: "The goal is to get more young adults following the news and public media."
  }
];

export default function About() {
  return (
    <div className="about-container">
      {/* <header className="about-header">
        <div className="framed-text">
          <h1>Hey! What's Up?</h1>
          <p>...Probably the sky or the ceiling...</p>
          <br />
          <p>
            If you like business or bad jokes (or even better business AND bad jokes) 
            you're at the right place.
          </p>
          <p>
            <br/>
            Read more for more info!
          </p>
        </div>
      </header> */}

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

        <Link to="/sign-up" className="cta-button">
          Join the Mailing List
        </Link>
      </div>

      <Footer />
    </div>
  );
}
