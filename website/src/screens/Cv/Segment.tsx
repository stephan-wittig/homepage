import React from "react";
import { Link } from "react-router-dom";
import { LinkedInLink } from "../../components";

interface Props {
  dateRange: string;
  title: string;
}

const Segment: React.FC<Props> = ({ dateRange }) =>
  <div className="section">
    <div className="container is-max-desktop">
      <div className="columns">
        <div className="column">
          {dateRange}
        </div>
        <div className="column">
        </div>
      </div>
    </div>
  </div>;

export default Segment;
