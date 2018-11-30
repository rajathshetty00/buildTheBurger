import React from "react";
import Aux from "../../../hoc/aux";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const IngredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>
        Mouthwatering burger is ready to checkout with following ingredients
      </p>
      <ul>{IngredientSummary}</ul>
      <p>
        Total price is <em>{props.price}Rs</em>
      </p>
      <p style={{ fontWeight: "bold" }}>Continue to checkout?</p>
      <Button btnType="Button Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Button Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
