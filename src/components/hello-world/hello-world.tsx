import React from "react";

// component props
interface IProps {
  text: string;
}

// functional component
export const HelloWorld: React.FC<IProps> = ({ text }) => {
  return <div>{text}</div>;
};
