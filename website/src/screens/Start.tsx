import React from "react";
import { Link } from "react-router-dom";
import { BulletPointContent, BulletPoints } from "../components";

const expertise: BulletPointContent = [
    "Programming",
    [
        "Backend",
        [ "Go", "Java", "C#"],
        "Frontend",
        [ "HTML, TypeScript and SASS", "React", "Angular", "Vue"],
        "Blockchain",
        [ "Ethereum", "Hyperledger Aries", "Hyperledger Indy"]
    ],
    "REST and GraphQL",
    "DevOps",
    [ "Azure DevOps", "Google Cloud Build", "Terraform", "Locust (Load testing)" ],
    "Cloud Infrastructure",
    [ "Google Cloud Platform", "Microsoft Azure", "Amazon Web Services" ],
    "Requirements analysis",
    "Business process analysis",
    "Project management",
    [ "SCRUM Project Owner" ]
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
                <div className="container has-text-right">
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
                    <div className="container is-size-4 has-text-weight-medium">
                        Welcome to my homepage. I'm a software engineer currently studying at London School of Economics.
                        Before that, I used to work at Breaking Wave and Deutsche Bank.
                    </div>
                </section>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <h4 className="title is-3">
                    Areas of Expertise
                </h4>
                <p className="block">
                    Most recently, I worked as a software engineer but I'm also an experienced business analyst and project manager. Those are things and concepts I've worked with:
                </p>
                <p className="block">
                    <BulletPoints
                        content={expertise}
                    />
                </p>
                <p className="block">
                    You'll find more about my technical abilities and my career <Link to="/cv">
                        on my CV
                    </Link>.
                </p>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <h4 className="title is-3">
                    Interests and Hobbies
                </h4>
                <p className="block">
                    I'm interested in technology and the world beyond. I enjoy the little things in life, too, such as:
                </p>
                <p className="block">
                    <BulletPoints
                        content={interests}
                    />
                </p>
            </div>
        </section>
    </>;

export default Start;
