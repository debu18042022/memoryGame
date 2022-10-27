import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Antiflip, flip } from "./MemoryRedux";
import "./Style.css";
const MemoryGame = () => {
  const container = useSelector((state) => state.game.Container);
  const select = useSelector((state) => state.game.selected);
  const step = useSelector((state) => state.game.steps);
  const count = useSelector((state) => state.game.count);
  const dispatch = useDispatch();

  const flipHandleChange = (index, id) => {
    if (select.length <= 1) {
      dispatch(flip(index));
    }
    setTimeout(() => {
      dispatch(Antiflip());
    }, 2000);
  };

  console.log("select", count);

  return (
    <div className="mainContainer">
      <h1>Memory Game</h1>
      {count !== container.length ? (
        <div className="Box">
          {container.map((item, index) => (
            <div className="individualBox">
              {item.ques.hidden ? (
                <div className="front">
                  <img
                    src={item.ques.image_ques}
                    alt="questionMark"
                    onClick={(e) =>
                      flipHandleChange(index, item.actualImage.id)
                    }
                    className="image"
                  />
                </div>
              ) : (
                <div className="back">
                  <img
                    src={item.actualImage.image}
                    alt="actualImage"
                    className="image"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="winningMessage">
          <h1>Congratulation you won the Game</h1>
          <h3>Totals Steps are : {step}</h3>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
