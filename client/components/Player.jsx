import React from "react";

const Player = ({ igraci }) => {
  console.log("igraci", igraci);
  return (
    <>
      <div className="absolute grid place-item-center">
        {igraci.map((igrac) => {
          <span key={igrac.socketID}>Username: {igrac.userName}</span>;
        })}
      </div>
    </>
  );
};

export default Player;