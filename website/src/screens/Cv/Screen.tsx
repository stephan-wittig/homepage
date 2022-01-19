import React from "react";
import { Link } from "react-router-dom";
import Segment from "./Segment";

const Cv: React.FC = () =>
    <>
        <section className="section">
            <div className="container is-max-desktop">
                <h2 className="title is-3">
                    Curriculum Vitae
                </h2>
                <p className="block">
                    You can find a summary of my professional and academic career below. If you want more details, you'll have to <Link to="/contact">
                        contact me
                    </Link>. 
                </p>
            </div>
        </section>
        <Segment title="Frankfurt School and Deutsche Bank" dateRange={["Aug 2015", "Jul 2019"]}>
            <div>
                A &quot;Duales Studium&quot; is a university programme accompanied by practical work.
                In my case, I studied Information Systems at <em>Frankfurt School of Finance &amp; Management</em> and worked in the IT department of <em>Deutsche Bank</em>'s retail bank.
            </div>
            <div>
                In Deutsche Bank's office in Eschborn (near Frankfurt) I received training as a <em>Computer Science Expert</em> apprentice.
                In this two-year programme, I worked in multiple roles of the software development cycle and gathered experience in requirements analysis, programming, testing, IT architecture and project management.
            </div>
            <div>
                I also chose to undertake two placements, one in business architecture in Frankfurt, and the other one in the chief digital office in London.
            </div>
            <div>
                After graduating as apprentice with the highest possible grade in 2017, I continued working as Business Analyst.
                In multiple projects, I analysed business processes and requirements, especially in the area of data governance and data protection.
                I also supported our project management and managed smaller projects myself.
            </div>
            <div>
                At Frankfurt School of Finance &amp; Management &hellip;
            </div>
        </Segment>
        <Segment title="&#127754; Breaking Wave" dateRange={["Aug 2019", "Sep 2021"]}>
            <div>
                I moved to London to work at Breaking Wave, a subsidiary of Deutsche Bank that works with new technologies using agile rapid-prototyping approaches.
                I joined just after this new team was created, first as an engineer seconded from Deutsche Bank.
                From Jan 2020, I was directly employed by Breaking Wave.
                &hellip;
            </div>
        </Segment>
        <Segment title="London School of Economics" dateRange={["Sep 2021", "Aug 2022"]}>
            <div>
                Having learned a lot about technology as an engineer, I decided to learn more about its social aspects.
                That is why I went back to university for an MSc in Management of Information Systems and Digital Innovation.
                &hellip;
            </div>
        </Segment>
    </>;

export default Cv;
