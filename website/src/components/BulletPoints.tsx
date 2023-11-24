import React from "react";

export type Content = Array<string | Content>;

interface Props {
  content: Content;
}

/**
 * Renders strings as list items and array as nested list items
 */
function renderBullet(bullet: string | Content, i: number): React.ReactElement {
  return typeof bullet === "string"
    ? <li key={`bullet_${i}`}>{bullet}</li>
    : <ul key={`bullet_${i}`}>
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
