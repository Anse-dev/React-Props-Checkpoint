import players from "../../data/players";
import Player from "../player/Player";
import "./playerList.css";
function PlayersList() {
  return (
    <div className="players">
      {players.map((player) => {
        return <Player {...player} />;
      })}
    </div>
  );
}

export default PlayersList;
