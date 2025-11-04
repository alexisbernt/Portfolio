
import "../../css/Post3.css";
import Footer from "../../Footer";

function Post1() {
  return (
    <div>
      {/* Header Section */}
      <header className="about-header">
        <div className="framed-text">
          <h1>Retrieval-Augmented Generation (RAG)</h1>
          <p>
            Retrieval Augmented Generation (RAG) enhances the capabilities of large language models
            by combining them with external knowledge sources.
          </p>
          <p>
            Read on to understand how RAG works, what makes it powerful, and how you can apply it.
          </p>
        </div>
      </header>

      {/* Blog Content */}
      <div className="post-content">
        <p>
          Side note: This informational article has side tangents. </p>
        <p>Side tangents are inserted into the square brackets: []. </p>
        {/* If you prefer a version without the side tangents, navigate to ______ for a clean version. */}
        <p>Artificial Intelligence (AI) is a hot topic right now. If you're wanting an official definition of AI, it can be defined as machine capabilities that mimic human-like intelligence and generate outputs. 
          AI systems can perform the types of tasks that have traditionally required human intelligence like reasoning, problem-solving, decision-making, and learning. A Large Language Model (LLM) = a form of AI. 
          Large Language Models generate output(s) from the data [trained off a freaking massive amount of data] and prompt(s) they are given. LLMs respond to prompts, and they're getting pretty good with their replies 
          [in fact they're better at replying than that friend who leaves you on sent/delievered for days].</p>
        <p>AI is a broad field that includes many types of systems (not just LLMs). Some other examples of systems include computer vision, robotics, and expert systems. LLMs are still a field of AI though. 
          LLMs are specifically focused on language. LLMs don’t “understand” in a human sense, but they can produce very convincing and useful text based on patterns in the data that they were trained on.</p>
        {/* Image Section */}
        <div className="post-image-container">
        <img src="/rag.png" alt="Post" className="post-image" />
        </div>
        <p>Now that you have all of that context, let's talk about RAG. RAG models have the information beyond the training data.</p>
        <p>I like to break things down into 3 categories: (1) What is it? (2) What's the purpose? and (3) What are some examples?</p>
        <p>Starting with (1) What is it?  Def Retrieval-Augmented Generation (RAG for short): RAG is a technique used in AI systems, particularly LLMs, to improve accuracy of AI generated responses. RAG goes beyond what it already knows (it's training data) 
          and (A) retrieves relevant information from other sources [like a database or the internet] plus (B) generates a *fresh* response based on the information retrieved. </p>
        <p>Okay - cool. So (2) What's the purpose? The purpose of RAG is to generate more accurate and high quality responses from AI. It may or may not sound crazy to you but AI can hallucinate. 
          What I mean by an AI hallucination is a mistake. Like humans, AI is not always correct or completely accurate / on the ball. Sometimes AI takes a swing and a miss. But, with more training / learning / practice, comes improvement. 
          RAG is now allowing an AI system to gain an understanding of (A) real-time information (not just that training data) and (B) information that is specifically relevant to the work that you are trying to do. 
          So, for example, RAG models can be trained off your work's data so that way what gets generated is more relevant to the field of work that you are in.</p>
          <p>Let's expand on some examples now [because examples are AImazing!]: * Chart here *
            Ironically, the abbreviation of Retrieval-Augmented Generation (AKA: RAG), can be related to an actual Rag doll. 
            Think of a Rag doll: It's that toy that can be perceived in various different ways [beautiful, freaky, frightening, interesting, etc.] made from scraps of fabric. 
            Chart for comparison:
          </p>
          {/* Image Section */}
          <div className="post-image-container">
          <img src="/rag-doll.png" alt="Post" className="post-image" />
          </div>
          <p>Now for the * REAL WORLD * examples of RAG in action: (i) Customer Support: Chatbots used for customer support rely on retrieving information from guides for troubleshooting or product information data / manuals. This type of usage would be RAG!
            (ii) Academic Help: If a student uses some particular LLMs, if they ask the model a question the RAG model will pull up relevant articles, websites, or textbook pages to better explain that specific concept. That's RAG!
            (iii) The Workplace: Corporate firms in particular are now uploading thousands of documents into their internal RAG models. For example, Microsoft Copilot now has a "Work" and "Web" mode. The "Work" mode is retrieving information from a company's internal document repository for information specific to that company. 
            The generated content from the AI model is catered toward what is specific to the company. RAG in action!</p>
          <p>[It was RAG-ical to have you read this educational page!]. To stay up-to-date with RAG and Artificial Intelligence advancements, join the mailing list (for free!) or just keep searching up this webpage (alexisbernthal.com). The goal of alexisbernthal.com is to get people learning about real-world things and changes together. 
            Thanks for joining!</p>
      </div>
      {/* Footer at the bottom */}
          <Footer />
    </div>
  );
}

export default Post1;

// RAG [insert RAG doll picture here] stands for Retrieval Augmented Generation. 
// This is a technique used in Artificial Intelligence to improve the quality and relevance of responses generated by AI. Traditional language models generate responses based only on what they were trained on. This means they can’t access up-to-date information. Because of this they (being language models) may hallucinate facts or miss context.
// RAG is the solution to this by allowing the model to retrieve relevant documents from an external source (like a database or search engine). The model then uses them to generate more accurate responses.