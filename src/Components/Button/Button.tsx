import React, { FC } from "react";
import { IButtonProps } from "./types";

export const Button: FC<IButtonProps> = ({
  backgroundColor = "lightgray",
  fontColor = "black",
  value,
}) => {
  return (
    <button style={{ color: fontColor, backgroundColor: backgroundColor }}>
      {value}
    </button>
  );
};
