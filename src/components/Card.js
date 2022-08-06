import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../actions/fetchAction";
import { images } from "../helpers/images";

const Card = (props) => {
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const { cards, users } = useSelector((state) => state.userFetchReducer);
  const card =
    cards.find((card) => card.title === props.match.params.user) || "";
  const dispatch = useDispatch();

  return users.map((user) => {
    return (
      <div key={user.id}>
        <button
          onClick={() => dispatch({ type: "DELETE_CARD", payload: user.id })}
        >
          DELETE
        </button>
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

// const mapStateToProps = (state, ownProps) => {
//   const { cards, users } = state.userFetchReducer;
//   return {
//     card: cards.find((card) => card.title === ownProps.match.params.user),
//     users: users,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteCard: (id) => dispatch({ type: "DELETE_CARD", payload: id }),
//     fetchData: () => dispatch(fetchUserData()),
//   };
// };

export default connect()(Card);
