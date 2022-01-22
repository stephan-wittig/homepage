import React from "react";
import cx from "classnames";

interface Props {
  level: 1 | 2;
  children: string;
}

const Header: React.FC<Props> = ({ level, children }) =>
  <div className={cx("block", {"cv__subheader": level === 2})}>
    <h3 className={cx(level === 1 ? "title is-3" : "subtitle is-5")}>
      {children}
    </h3>
  </div>;

export default Header;
