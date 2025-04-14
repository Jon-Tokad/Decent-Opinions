import React, { useState } from "react";
import "./App.css";

const players = [
  { name: "Jon", score: 0 },
  { name: "Matthew", score: 0 },
  { name: "Kamden", score: 0 },
  { name: "Cole", score: 0 },
  { name: "Cade", score: 0 },
  { name: "Cameron", score: 0 },
];

const roundData = {
  primary: {
    playIn: ["TBD", "TBD", "TBD", "TBD"],
    firstRound: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"],
    conferenceSemifinals: ["TBD", "TBD", "TBD", "TBD"],
    conferenceFinals: ["TBD", "TBD"],
    finals: ["TBD"],
  },
  Jon: { playIn: [], firstRound: [], conferenceSemifinals: [], conferenceFinals: [] },
  Matthew: { playIn: [], firstRound: [], conferenceSemifinals: [], conferenceFinals: [] },
  Kamden: { playIn: [], firstRound: [], conferenceSemifinals: [], conferenceFinals: [] },
  Cole: { playIn: [], firstRound: [], conferenceSemifinals: [], conferenceFinals: [] },
  Cade: { playIn: [], firstRound: [], conferenceSemifinals: [], conferenceFinals: [] },
  Cameron: { playIn: [], firstRound: [], conferenceSemifinals: [], conferenceFinals: [] },
};

function App() {
  const [expandedPlayer, setExpandedPlayer] = useState(null);

  const togglePlayer = (playerName) => {
    setExpandedPlayer(expandedPlayer === playerName ? null : playerName);
  };

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Decent Opinions Playoff Leaderboard</h1>

      {/* Primary Per Round Outcomes */}
      <h2>Primary Per Round Outcomes</h2>
      <table border="1" cellPadding="10" style={{ marginBottom: "2rem", width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Round</th>
            <th>Outcomes</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(roundData.primary).map(([round, series], i) => (
            <tr key={i}>
              <td style={{ textTransform: "capitalize" }}>{round.replace(/([A-Z])/g, " $1")}</td>
              <td>
                {series.map((s, idx) => (
                  <div key={idx}>{s}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Names & Scores Table */}
      <h2>Leaderboard</h2>
      <table border="1" cellPadding="10" style={{ marginBottom: "2rem", width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p, idx) => (
            <tr key={idx}>
              <td>
                <button
                  onClick={() => togglePlayer(p.name)}
                  style={{ background: "none", border: "none", color: "blue", cursor: "pointer", textDecoration: "underline" }}
                >
                  {p.name}
                </button>
              </td>
              <td>{p.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Individual Per Round Outcomes */}
      {players.map((p, idx) => (
        expandedPlayer === p.name && (
          <div key={idx} style={{ marginBottom: "2rem" }}>
            <h3>{p.name}'s Outcomes</h3>
            <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
              <thead>
                <tr>
                  <th>Round</th>
                  <th>Outcomes</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(roundData[p.name] || {}).map(([round, series], i) => (
                  <tr key={i}>
                    <td style={{ textTransform: "capitalize" }}>{round.replace(/([A-Z])/g, " $1")}</td>
                    <td>
                      {series.map((s, idx) => (
                        <div key={idx}>{s}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ))}
    </div>
  );
}

export default App;