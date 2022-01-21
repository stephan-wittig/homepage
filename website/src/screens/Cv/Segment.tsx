import React, { ReactElement, cloneElement } from "react";
import cx from "classnames";

interface Props {
  dateRange: [ string, string ];
  title: string;
  children: ReactElement | ReactElement[];
}

function addClassNameToElement(element: ReactElement, className: string): ReactElement {
  const newClassName = cx(
    element.props.className ?? "",
    className
  );

  return cloneElement(element, { className: newClassName });
}

function addClassNameToChildren(children: Props["children"], className: string): typeof children {
  if (Array.isArray(children)) {
    return children.map((c) => addClassNameToElement(c, className));
  } else {
    return addClassNameToElement(children, className);
  }
}

const Segment: React.FC<Props> = ({ dateRange, title, children }) =>
  <div className="block">
    <div className="columns is-multiline">
      <div className="column is-full-tablet is-one-quarter-desktop cv__date-range">
        <p className="subtitle is-6">
          {dateRange.join(" – ")}
        </p>
      </div>
      <div className="column cv__segment">
        <h4 className="title is-5">
          {title}
        </h4>
        {addClassNameToChildren(children, "block")}
      </div>
    </div>
  </div>;

export default Segment;
