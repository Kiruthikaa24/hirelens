import React, { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [files, setFiles] = useState([]);
  const [jobDesc, setJobDesc] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async () => {
    const formData = new FormData();
    files.forEach((file) => formData.append("resumes", file));
    formData.append("job_desc", jobDesc);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData);
      setResults(res.data.matches); // expected: [{email:..., score:...}, ...]
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>Upload Resumes & Job Description</h2>
      <input type="file" multiple accept="application/pdf" onChange={(e) => setFiles([...e.target.files])} />
      <br /><br />
      <textarea rows="5" cols="60" placeholder="Enter job description..." onChange={(e) => setJobDesc(e.target.value)} />
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>

      {results.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Match Results</h3>
          <table border="1" style={{ margin: "auto" }}>
            <thead>
              <tr>
                <th>Email</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, idx) => (
                <tr key={idx}>
                  <td>{r.email}</td>
                  <td>{r.score.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
