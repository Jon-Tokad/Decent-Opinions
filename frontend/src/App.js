import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SubmitPage from "./SubmitPage";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([
    { name: "Jon", score: 0, predictions: {} },
    { name: "Matthew", score: 0, predictions: {} },
    { name: "Kamden", score: 0, predictions: {} },
    { name: "Cole", score: 0, predictions: {} },
    { name: "Cade", score: 0, predictions: {} },
    { name: "Cameron", score: 0, predictions: {} },
    { name: "Ethan", score: 0, predictions: {} },
    { name: "Amogh", score: 0, predictions: {} },
  ]);

  const addPlayer = (newPlayer) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  const [expandedPlayer, setExpandedPlayer] = useState(null);

  const togglePlayer = (playerName) => {
    setExpandedPlayer(expandedPlayer === playerName ? null : playerName);
  };

  const roundData = {
    primary: {
      playIn: ["TBD", "TBD", "TBD", "TBD"],
      firstRound: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"],
      conferenceSemifinals: ["TBD", "TBD", "TBD", "TBD"],
      conferenceFinals: ["TBD", "TBD"],
      finals: ["TBD"],
    },
    Jon: { playIn: [], firstRound: [], conferenceSemifinals: [], conferenceFinals: [], finals: []},
    Matthew: { playIn: [], firstRound: [], conferenceSemifinals: [], conferenceFinals: [], finals: [] },
    Kamden: { playIn: [], firstRound: [], conferenceSemifinals: [], conferenceFinals: [], finals: [] },
    Cole: { playIn: [], firstRound: [], conferenceSemifinals: [], conferenceFinals: [], finals: [] },
    Cade: { playIn: [], firstRound: [], conferenceSemifinals: [], conferenceFinals: [], finals: [] },
    Cameron: { playIn: [], firstRound: [], conferenceSemifinals: [], conferenceFinals: [], finals: [] },
  };

  return (
    <Router>
      <div className="App" style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
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
                      <th>Predictions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((player, idx) => (
                      <tr key={idx}>
                        <td>
                          <button
                            onClick={() => togglePlayer(player.name)}
                            style={{ background: "none", border: "none", color: "blue", cursor: "pointer", textDecoration: "underline" }}
                          >
                            {player.name}
                          </button>
                        </td>
                        <td>{player.score}</td>
                        <td>
                          {Object.entries(player.predictions || {}).map(([round, predictions]) => (
                            <div key={round}>
                              <strong>{round}:</strong> {predictions.join(", ")}
                            </div>
                          ))}
                        </td>
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
                <Link to="/submit">
                  <button style={{ padding: "0.5rem 1rem", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
                    Submit Bracket
                  </button>
                </Link>
              </>
            }
          />
          <Route path="/submit" element={<SubmitPage addPlayer={addPlayer} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;