import { motion } from "framer-motion";
import "../css/About.css";

const timelineEvents = [
  {
    date: "April 10, 2021",
    title: "Senior Prom",
    img: "https://source.unsplash.com/400x400/?prom,couple",
    description: "A night to remember at senior prom."
  },
  {
    date: "May 23, 2021",
    title: "High School Graduation",
    img: "https://source.unsplash.com/400x400/?graduation,students",
    description: "Celebrating high school graduation with family and friends."
  },
  {
    date: "May 12, 2022",
    title: "Basic Training Graduation",
    img: "https://source.unsplash.com/400x400/?army,training",
    description: "Graduated from Army Basic Training at Fort Sill."
  }
];

export default function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Hey! What's Up?</h1>
        <p> ...Probably the sky or the ceiling... </p><br></br>
        <p> If you like business or bad jokes (or even better business AND bad jokes) you're at the right place.</p>
      </header>

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
        <a href="/signup" className="cta-button">
          Join the Mailing List
        </a>
      </div>
    </div>
  );
}
