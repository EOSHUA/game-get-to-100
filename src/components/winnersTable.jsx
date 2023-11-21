
import React from 'react';

function WinnersTable({ winners }) {
  return (
    <div>
      <h3>Winners table</h3>
      <table>
        <thead>
          <tr>
             <th>Player's Name</th>
             <th>The number of steps you took to win</th>
          </tr>
        </thead>
        <tbody>
          {winners.map((winner, index) => (
            <tr key={index}>
               <td>{winner.name}</td>
               <td>{winner.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WinnersTable;
