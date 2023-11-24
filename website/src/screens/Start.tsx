import React from "react";
import { Link } from "react-router-dom";
import { BulletPointContent, BulletPoints } from "../components";

const expertise: BulletPointContent = [
    "Programming",
    [
        "Backend",
        [ "Go", "Kotlin, Java", "C#"],
        "Frontend",
        [ "HTML, TypeScript and SASS", "React", "Angular", "Vue"],
        "Blockchain",
        [ "Ethereum", "Hyperledger Aries", "Hyperledger Indy"]
    ],
    "REST and GraphQL",
    "DevOps",
    [ "Azure DevOps", "Google Cloud Build", "Terraform", "Locust (Load testing)" ],
    "Cloud Infrastructure",
    [ "Microsoft Azure", "Google Cloud Platform", "Amazon Web Services" ],
    "Requirements analysis",
    "Business process analysis",
    "Project management",
    [ "SAFe", "SCRUM Product Owner" ]
]

const interests: BulletPointContent = [
    "Cool technology",
    [ "Data Science", "Blockchain", "Cloud"],
    "Economics and politics",
    "The outdoors",
    [ "Hiking", "Sailing", "Travelling"],
    "The indoors",
    [ "Cooking", "Baking", "Whiskey and wine"]
]

const Start: React.FC = () =>
    <>
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container has-text-right is-max-desktop">
                    <h3 className="title is-1">
                        Software Development Specialist
                    </h3>
                    <p className="subtitle is-4">
                        Interesting bits about me
                    </p>
                </div>
            </div>
            <div className="hero-footer">
                <section className="section">
                    <div className="container is-size-4 has-text-weight-medium is-max-desktop">
                        Welcome to my homepage. I'm a cloud architect specialised on the financial services industry.
                    </div>
                </section>
            </div>
        </section>
        <section className="section">
            <div className="container is-max-desktop">
                <h4 className="title is-3">
                    Areas of Expertise
                </h4>
                <div className="block">
                    I'm currently employed as cloud architect by CGI but I'm also an experienced business analyst and project manager. Those are things and concepts I've worked with:
                </div>
                <div className="block">
                    <BulletPoints
                        content={expertise}
                    />
                </div>
                <div className="block">
                    You'll find more about my technical abilities and my career <Link to="/cv">
                        on my CV
                    </Link>.
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container is-max-desktop">
                <h4 className="title is-3">
                    Interests and Hobbies
                </h4>
                <div className="block">
                    I'm interested in technology and the world beyond. I enjoy the little things in life, too, such as:
                </div>
                <div className="block">
                    <BulletPoints
                        content={interests}
                    />
                </div>
            </div>
        </section>
    </>;

export default Start;
