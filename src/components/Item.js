import { ExpandMore } from "@material-ui/icons";
import React from "react";
import Button from "./Button";
import "./Item.css";

const Item = ({
  title,
  desc,
  desClick,
  backgroundImage,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
}) => {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="item__container">
        <div className="item__text">
          <p>{title}</p>
          <div className="item__textDescription">
            <p>{desc}</p>
          </div>
        </div>

        <div className="item__lowerThird">
          <div className="item__buttons">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className="item__expand">
              <ExpandMore />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
