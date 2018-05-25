import React from 'react';

const Scoreboard = ({ parties }) => (
  <div className="scoreboard">
    {parties.map(a => (
      <article className="score">
        <div className="score__header">{a.key}</div>
        <div className="score__score">{a.score}</div>
      </article>
    ))}
  </div>
);

export default Scoreboard;
