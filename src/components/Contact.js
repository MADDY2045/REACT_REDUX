import React, { useEffect } from "react";
import { images } from "../helpers/images";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Contact = ({ cards }) => {
  useEffect(() => {
    console.log(images);
  }, []);

  return (
    <div>
      <div>
        {cards.map((card) => {
          return (
            <div className="contact" key={card.id}>
              <Link to={`/card/${card.title}`}>
                <div className="card">
                  <img
                    className="card-img-top"
                    alt="Card cap"
                    src={
                      images.length > 0 &&
                      images.find((image) => image.id === card.id).src
                    }
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.body}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const { cards } = state.userFetchReducer;
  return {
    cards: cards,
  };
};

export default connect(mapStateToProps)(Contact);
