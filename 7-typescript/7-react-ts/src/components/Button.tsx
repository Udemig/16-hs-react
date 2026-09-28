import type { JSX, FC } from "react";
import React from "react";

interface IProps {
  title: string;
}

// 1) Component tipi tanımlama
// Prop Type: Tanımlandı
// Return Type: Oto. algılandı
const Button1 = ({ title }: IProps) => {
  return <button>{title}</button>;
};

// 2) Component tipi tanımlama
// Prop Type: Tanımlandı
// Return Type: JSX.Element | React.ReactNode
const Button2 = ({ title }: IProps): React.ReactNode => {
  return <button>{title}</button>;
};

// 3) Component tipi tanımlama
// Prop Type: FC
// Return Type: FC
const Button3: FC<IProps> = ({ title }) => {
  return <button>{title}</button>;
};

export default Button3;
