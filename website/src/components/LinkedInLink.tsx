import React from "react";
import linkedInLogo from "../images/linkedInLogo.png";

interface Props {
    children: string;
}

const LinkedInLink: React.FC<Props> = ({ children }) => 
    <a
        href={`https://www.linkedin.com/in/${children}/`}
        target="_blank"
        rel="noreferrer"
        className="linkedin-link"
    >
        <figure className="image is-16x16 linkedin-link__logo">
            <img 
                src={linkedInLogo}
                alt=""
            />
        </figure> { children }
    </a>;

export default LinkedInLink;
