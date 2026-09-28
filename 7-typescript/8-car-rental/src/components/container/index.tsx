import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

// HOC: Diğer component veya elementleri children prop olarak alan component'lara denir
const Container: FC<Props> = ({ children }) => {
  return (
    <div className="padding-x max-width">
      <div className="home-error-container">{children}</div>
    </div>
  );
};

export default Container;
