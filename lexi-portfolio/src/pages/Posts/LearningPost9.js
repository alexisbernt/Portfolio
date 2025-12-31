import "../../css/Post2.css";
import Footer from "../../Footer";

function Post9() {
  return (
    <div className="post-page">
      {/* 🔹 Hero Section */}
      <section className="post-hero">
        <div className="post-hero-content">
          <h1>News Recap Archives</h1>
          <p className="subtitle">Want to know what has happened recently in the world?</p>
          <p className="tagline">Read below for quick summaries covering the past weeks.</p>
        </div>
      </section>

        {/* 🔹 Main Content - RECENT */}
                <article className="post-content">

    {/* 🔹 Embedded YouTube Video */}
      <div className="learning-log-video">
        <iframe
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/5g8bPzI7ATk?autoplay=1&mute=1&playsinline=1"
          title="News Weekly Recap"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* 🔹 Blog Content */}

        <div className="highlight-box">
          <h3>Week of 12/31/25: </h3>
          <ul>
            <li>
              <strong>1. </strong>Trump and Zelensky meet to discuss Peace Deal - The presidents met to discuss a possible Peace Deal and both walked away stating that they might be close to a deal that would end a nearly four year war between Russia and Ukraine.
            </li>
            <li>
              <strong>2. </strong>US Strikes ISIS in Nigeria. The US Africa Command announced that strikes in the Sokoto State killed multiple ISIS terrorists.
            </li>
            <li>
              <strong>3. </strong>Let's talk cars - General Motors is on pace to be the top U.S.-traded automaker stock of 2025 - This validates the company’s reemergence from bankruptcy in 2009.
            </li>
            <li>
              <strong>4. </strong> Conservative presidential candidate wins contested election in Honduras amid pushback. He won by less than 1% of the vote and the loser refused to concede.
            </li>
            <li>
              <strong>5. </strong> If you're a Nugget's fan you got a nice Christmas surprise because Nikola Jokic had a historic 56-point triple-double on Christmas. However, he is now out with an injury (as of 12/31/25).
              In the WNBA, there is ongoing negotiations for a collective bargaining agreement. 
              The player's union (WNBPA) has authorized players to call a strike if necessary. Players are wanting a larger share of the league's rapidly growing revenue.
            </li>
          </ul>
        </div>

      </article>

    <article className="post-content">

    {/* 🔹 Embedded YouTube Video Last Week */}
      <div className="learning-log-video">
        <iframe
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/o7XgvG1-xPA?autoplay=1&mute=1&playsinline=1"
          title="News Weekly Recap"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* 🔹 Blog Content */}

        <div className="highlight-box">
          <h3>Week of 12/23/25: </h3>
          <ul>
            <li>
              <strong>1. </strong>Congress has left for the year without reaching a health care deal. The Affordable Care Act will expire on Dec. 31 which will cause 22 million to lose lower insurance benefits.
            </li>
            <li>
              <strong>2. </strong>There is a push to build more nuclear reactors across the United States and Japan announced an initiative to restart the world's biggest nuclear power plant.
            </li>
            <li>
              <strong>3. </strong>Third, the Trump administration has ruled that starting Jan 2026, those with student debt will be garnished to repay their loans. This means that money or property of a third party (in this case loans), be seized to satisfy a debt owed (in this case the debt is tuition). 
            </li>
            <li>
              <strong>4. </strong> Holiday spending is up for the year of 2025. Even with many uncertain about the state of the current economy, early numbers are coming back to show one of the highest spending years yet. 
            </li>
            <li>
              <strong>5. </strong> Texas A&M won the 2025 Women's Division 1 Volleyball Championship.
            </li>
          </ul>
        </div>

      </article>

        {/* Blog Content */}
        <h2>PREVIOUS WEEK: Week of 12/23/25: </h2>

    {/* 🔹 Embedded YouTube Video */}
      <div className="learning-log-video">
        <iframe
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/M1Gl_k-uM5w?autoplay=1&mute=1&playsinline=1"
          title="News Weekly Recap"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

              <p>
1. Bondi Beach Shooting - Hundreds of people were celebrating Hanukkah on Bondi Beach in Sydney Australia when two men opened fire. The shooters killed 15 and more are in critical condition. Since then, the Australian officials have vowed to revise and tighten Australian gun laws after this act of terrorism.  

2. Brown University Shooting - A shooting took place at Brown University killing two students and injuring more. The gunman has not yet been found and brought into custody as of December 15th. Students are mourning and fearful after this tragedy.  

3. Fed Cuts interest rates - The Federal Reserve, which manages the U.S. money supply, cut interest rates a quarter percentage this past week. This means there is cheaper borrowing, with a goal of economic activity increasing.

4. Washington State flooding - In Washington state, Rivers North of Seattle are at their high causing a flood. People had to be rescued and evacuated. Now, flood warnings stay in tact as Heavy rain and wind return to western Washington, raising flood concerns once again.

5. Out of retirement - In the sports world, Philip Rivers, who is 44 years old, has agreed to come out of retirement after the NFL's Colts needed a quarterback after their starters experienced injuries. In a close game, the colts lost last night to the Seattle Seahawks.

For resources, please check the description of the video. And please take care of each other during this difficult time. 
        </p>
      
      {/* Mailing List CTA */}
      <div className="cta">
        <h2>Stay in the loop ✉️</h2>
        <p>Sign up for my mailing list and never miss an update.</p>
        <a href="/signup" className="cta-button">
          Join the Mailing List
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default Post9;