import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

function SubmitPage() {
  const [formData, setFormData] = useState({
    name: "",
    playIn: ["", "", "", ""], // Changed Play-In to an array
    firstRound: ["", "", "", "", "", "", "", ""],
    conferenceSemifinals: ["", "", "", ""],
    conferenceFinals: ["", ""],
    finals: [""],
  });

  const navigate = useNavigate();

  const handleInputChange = (e, round, index) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [round]: prev[round].map((item, idx) => (idx === index ? value : item)), // Unified logic for all rounds
    }));
  };

  const handleNameChange = (e) => {
    setFormData((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      playIn: formData.playIn.join(", "), // Send Play-In data as a comma-separated string
      firstRound: formData.firstRound.join(", "),
      conferenceSemifinals: formData.conferenceSemifinals.join(", "),
      conferenceFinals: formData.conferenceFinals.join(", "),
      finals: formData.finals.join(", "),
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_ccsq9y3", // Replace with your EmailJS service ID
        "template_58670lu", // Replace with your EmailJS template ID
        emailData,
        "F-4iVGin6HutErDQU" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response.status, response.text);
          alert("Your bracket has been submitted successfully!");
          navigate("/"); // Redirect back to the main page
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("There was an error submitting your bracket. Please try again.");
        }
      );
  };

  const bracketStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    fontFamily: "Arial, sans-serif",
  };

  const roundStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "800px",
    gap: "1rem",
  };

  const matchStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ccc",
    padding: "0.5rem",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "1rem",
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#6c757d",
  };

  return (
    <div style={bracketStyle}>
      <h1>Submit Your Bracket</h1>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "800px" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Name:
            <input
              type="text"
              value={formData.name}
              onChange={handleNameChange}
              required
              style={{
                marginLeft: "1rem",
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                maxWidth: "300px",
              }}
            />
          </label>
        </div>

        {/* Play-In Round */}
        <h2>Play-In</h2>
        <div style={roundStyle}>
          {["East 7 Seed", "East 8 Seed", "West 7 Seed", "West 8 Seed"].map((label, index) => (
            <div key={index} style={matchStyle}>
              <label>
                {label}:
                <input
                  type="text"
                  value={formData.playIn[index]}
                  onChange={(e) => handleInputChange(e, "playIn", index)}
                  required
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                />
              </label>
            </div>
          ))}
        </div>

        {/* First Round */}
        <h2>First Round</h2>
        <div style={roundStyle}>
          {["1st vs 8th (East)", "2nd vs 7th (East)", "3rd vs 6th (East)", "4th vs 5th (East)", "1st vs 8th (West)", "2nd vs 7th (West)", "3rd vs 6th (West)", "4th vs 5th (West)"].map((label, index) => (
            <div key={index} style={matchStyle}>
              <label>
                {label}:
                <input
                  type="text"
                  value={formData.firstRound[index]}
                  onChange={(e) => handleInputChange(e, "firstRound", index)}
                  required
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                />
              </label>
            </div>
          ))}
        </div>

        {/* Conference Semifinals */}
        <h2>Conference Semifinals</h2>
        <div style={roundStyle}>
          {["Winner of 1st/8th vs Winner of 4th/5th (East)", "Winner of 2nd/7th vs Winner of 3rd/6th (East)", "Winner of 1st/8th vs Winner of 4th/5th (West)", "Winner of 2nd/7th vs Winner of 3rd/6th (West)"].map((label, index) => (
            <div key={index} style={matchStyle}>
              <label>
                {label}:
                <input
                  type="text"
                  value={formData.conferenceSemifinals[index]}
                  onChange={(e) => handleInputChange(e, "conferenceSemifinals", index)}
                  required
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                />
              </label>
            </div>
          ))}
        </div>

        {/* Conference Finals */}
        <h2>Conference Finals</h2>
        <div style={roundStyle}>
          {["East Champion", "West Champion"].map((label, index) => (
            <div key={index} style={matchStyle}>
              <label>
                {label}:
                <input
                  type="text"
                  value={formData.conferenceFinals[index]}
                  onChange={(e) => handleInputChange(e, "conferenceFinals", index)}
                  required
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                />
              </label>
            </div>
          ))}
        </div>

        {/* Finals */}
        <h2>Finals</h2>
        <div style={roundStyle}>
          <div style={matchStyle}>
            <label>
              NBA Champion:
              <input
                type="text"
                value={formData.finals[0]}
                onChange={(e) => handleInputChange(e, "finals", 0)}
                required
                style={{
                  marginTop: "0.5rem",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  width: "100%",
                }}
              />
            </label>
          </div>
        </div>

        <button type="submit" style={buttonStyle}>
          Submit
        </button>
        <button type="button" onClick={() => navigate("/")} style={cancelButtonStyle}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default SubmitPage;
