import { css } from "@emotion/css";
import React from "react";
import { useLocation } from "react-router-dom";
import { Brakepoints } from "../styles/brakepoints";
import { h4Style } from "../styles/text";

type MainLayoutProps = {
  children: React.ReactNode;
};

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className={headerRootStyle}>
      <h3 className={headerTextStyle}>{location.pathname}</h3>
    </div>
  );
};

const headerRootStyle = css`
  padding-bottom: 1rem;
`;

const headerTextStyle = css`
  ${h4Style}
`;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={mainLayoutStyle}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

const mainLayoutStyle = css`
  max-width: ${Brakepoints.MD};
  margin: auto;
  padding: 1rem;
`;
