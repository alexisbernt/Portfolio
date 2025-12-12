import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Footer';

function NewsPage1() {
  return (
    <div className="news-page modern-bg min-h-screen text-white">

      {/* --- HEADER SECTION --- */}
      <header className="news-header py-12 px-6 md:px-14">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold tracking-tight"
        >
          Latest Episodes
        </motion.h1>
        <p className="opacity-80 mt-2 text-lg">Your source for curated, unbiased news from across the web.</p>
      </header>

      {/* --- MOST RECENT VIDEO SECTION --- */}
      <section className="latest-video px-6 md:px-14 pb-16">
        <div className="video-container rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/uI13dmzfg_E?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0"
            title="Latest Video"
            allow="autoplay; fullscreen"
            className="w-full h-[55vh] md:h-[70vh]"
          ></iframe>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mt-6"
        >
          The Newest Release
        </motion.h2>

        <p className="opacity-80 max-w-3xl mt-3 text-lg">
          A breakdown of the most important updates happening this week across major news networks.
        </p>
      </section>

      {/* --- PRIOR EPISODES --- */}
      <section className="previous-episodes px-6 md:px-14 pb-20">
        <h3 className="text-2xl font-bold mb-6">Previous Episodes</h3>

        <div className="episode-list space-y-10">
          {/* Episode 1 */}
          <div className="episode-card grid md:grid-cols-2 gap-6 items-center bg-white/10 p-5 rounded-2xl backdrop-blur-md border border-white/10">
            <iframe
              src="https://www.youtube.com/embed/FJuH50udo40?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0"
              title="Ep 1"
              className="w-full h-56 md:h-64 rounded-xl"
              allowFullScreen
            ></iframe>

            <div>
              <h4 className="text-xl font-semibold mb-2">Episode Title #1</h4>
              <p className="opacity-80 text-base leading-relaxed">
                A short description summarizing the major events and topics covered in this episode.
              </p>
            </div>
          </div>

          {/* Episode 2 */}
          <div className="episode-card grid md:grid-cols-2 gap-6 items-center bg-white/10 p-5 rounded-2xl backdrop-blur-md border border-white/10">
            <iframe
              src="https://www.youtube.com/embed/AnN9KYa3AAU?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0"
              title="Ep 2"
              className="w-full h-56 md:h-64 rounded-xl"
              allowFullScreen
            ></iframe>

            <div>
              <h4 className="text-xl font-semibold mb-2">Episode Title #2</h4>
              <p className="opacity-80 text-base leading-relaxed">
                A brief recap of this episode and what viewers can expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NewsPage1;


//           Netflix announced that it agreed to acquire Warner Bros Discovery's film studio and HBO assets between $72 billion and $82.7 billion (including debt).
// - Hollywood Unions aren't happy about this
// - Trump is weighing in
// - The acquisition would mean the world's largest paid streaming service has even more power over theater owners and entertainment industry unions.

// There is scrutiny by lawmakers over the September 2nd strikes against an alleged drug boat off the Venezuela coast. They're reviewing a video and determining if it will be released to the public. Individuals were killed and there is a lot of controversy around if Defense Secretary Pete Hegseth, Admiral Bradley, and the United States violated international law.

// War continues between Ukraine and Russia as Russia rejected the most recent Peace Deal. Now Trump is saying Zelenskyy, the president of Ukraine, didn't read the most recent Peace Deal proposed.
// Trumps efforts to create a Peace Deal relate to his desire to be considered to win the Nobel Peace Prize. Zelensky will be in London

// ICE is taking part in an immigration crackdown. ICE is arresting and detaining individuals. Recently New York City mayor elect posted a video responding telling New Yorkers about their right to not comply with ICE.

// College Football released the playoff bracket for 2025. 12 teams make this playoff with an attempt at glory. One of the teams not to make it is the Notre Dame fighting Irish. In response to not making it, the team decided to withdraw from bowl consideration which is causing controversy in the sports world. The Number 1 seed in coming into the playoffs is Indiana.