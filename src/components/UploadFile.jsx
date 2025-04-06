import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // import

const UploadFile = () => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate(); // initialize

  const backendURL = "https://7961-35-239-246-25.ngrok-free.app"; // Update if needed

  const handleLogout = () => {
    navigate("/"); // redirect to homepage
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    if (!files.length) {
      setMessage("Please select files to upload.");
      return;
    }
    if (!name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    const formData = new FormData();
    for (let file of files) {
      formData.append("files", file);
    }
    formData.append("user", name);

    try {
      const uploadRes = await axios.post(`${backendURL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(uploadRes.data.message);
    } catch (err) {
      setMessage("Error uploading files.");
      console.error(err);
    }
  };

  const handleProcess = async () => {
    if (!name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    try {
      const res = await axios.post(`${backendURL}/process`, { user: name });
      setSelected(res.data.selected || []);
      setRejected(res.data.rejected || []);
    } catch (err) {
      setMessage("Error processing resumes.");
      console.error(err);
    }
  };

  const handleSendEmail = async (email, status) => {
    try {
      const res = await axios.post(`${backendURL}/send-email`, { email, status });
      alert(`Email sent to ${email}`);
    } catch (err) {
      console.error("Email failed", err);
      alert(`Failed to send email to ${email}`);
    }
  };

  return (
    <div className="container mt-5">
      <style>{`
        .fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card {
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: scale(1.02);
        }
      `}</style>

      <div className="card p-4 shadow fade-in">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 font-weight-bold">Upload Resumes (PDF only)</h2>
          <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control mb-3"
        />

        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileChange}
          className="form-control mb-3"
        />

        <div className="mb-3">
          <button onClick={handleUpload} className="btn btn-primary mr-2">
            Upload
          </button>
          <button onClick={handleProcess} className="btn btn-success">
            Process
          </button>
        </div>

        {message && <div className="alert alert-info mt-3">{message}</div>}

        {(selected.length > 0 || rejected.length > 0) && (
          <div className="mt-5 fade-in">
            <h4 className="text-success">Selected Candidates</h4>
            <ul className="list-group mb-4">
              {selected.map((c, idx) => (
                <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>
                    <strong>{c.email}</strong> — Score: {(c.score * 100).toFixed(1)}% — Reason: {c.reason}
                  </span>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleSendEmail(c.email, "selected")}
                  >
                    Send Email
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="text-danger">Rejected Candidates</h4>
            <ul className="list-group">
              {rejected.map((c, idx) => (
                <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>
                    <strong>{c.email}</strong> — Score: {(c.score * 100).toFixed(1)}% — Reason: {c.reason}
                  </span>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleSendEmail(c.email, "rejected")}
                  >
                    Send Email
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadFile;
