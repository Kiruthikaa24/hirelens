import React from "react";

function About() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">About HireLens</h2>
      <p className="mb-4">
        HireLens is an AI-powered resume screening tool that helps recruiters efficiently shortlist candidates based on job relevance. By leveraging NLP and the Sentence-BERT model, it ensures a fair and unbiased evaluation process.
      </p>
      <ul className="list-disc pl-6">
        <li>⚡ Automates resume screening</li>
        <li>📊 Matches resumes using semantic similarity</li>
        <li>📧 Sends personalized feedback via email</li>
        <li>⏱️ Saves time and reduces bias</li>
      </ul>
    </div>
  );
}

export default About;
