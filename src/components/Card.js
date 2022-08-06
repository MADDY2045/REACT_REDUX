import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "../actions/fetchAction";
import { images } from "../helpers/images";

const Card = ({ card, users, fetchData, deleteCard }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return users.map((user) => {
    return (
      <div key={user.id}>
        <button onClick={() => deleteCard(user.id)}>DELETE</button>
        <div className="card" key={user.id}>
          <img
            className="card-img-top"
            src={
              images.length > 0 &&
              images.find((image) => image.id === card.id).src
            }
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.email}</p>
          </div>
        </div>
      </div>
    );
  });
};

const mapStateToProps = (state, ownProps) => {
  const { cards, users } = state.userFetchReducer;
  return {
    card: cards.find((card) => card.title === ownProps.match.params.user),
    users: users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => dispatch({ type: "DELETE_CARD", payload: id }),
    fetchData: () => dispatch(fetchUserData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
