import React from "react";

export type Content = Array<string | Content>;

interface Props {
  content: Content;
}

/**
 * Renders strings as list items and array as nested list items
 */
function renderBullet(bullet: string | Content): React.ReactElement {
  return typeof bullet === "string"
    ? <li>{bullet}</li>
    : <ul>
      {bullet.map(renderBullet)}
    </ul>;
}

const BulletPoints: React.FC<Props> = ({ content }) =>
<div className="content bullet-points">
    <ul>
      {content.map(renderBullet)}
    </ul>
</div>;

export default BulletPoints;
