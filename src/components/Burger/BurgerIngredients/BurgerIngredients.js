import React, { Component } from "react";
import "./BurgerIngredients.css";
import propTypes from "prop-types";

class BurgerIngredients extends Component {
  state = {};
  render() {
    let ingredients = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredients = <div className="BreadBottom" />;
        break;

      case "bread-top":
        ingredients = (
          <div className="BreadTop">
            <div className="Seeds1" />
            <div className="Seeds2" />
          </div>
        );
        break;

      case "meat":
        ingredients = <div className="Meat" />;
        break;

      case "cheese":
        ingredients = <div className="Cheese" />;
        break;

      case "salad":
        ingredients = <div className="Salad" />;
        break;

      case "bacon":
        ingredients = <div className="Bacon" />;
        break;

      default:
        ingredients = null;
        break;
    }

    return ingredients;
  }
}

BurgerIngredients.propTypes = {
  type: propTypes.string.isRequired
};

export default BurgerIngredients;
