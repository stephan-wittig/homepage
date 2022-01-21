import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Segment from "./Segment";

const Cv: React.FC = () =>
    <>
        <section className="section">
            <div className="container is-max-desktop">
                <h2 className="title is-2">
                    Curriculum Vitae
                </h2>
                <p className="block">
                    You can find a summary of my professional and academic career below. If you want more details, you'll have to <Link to="/contact">
                        contact me
                    </Link>. 
                </p>
            </div>
        </section>
        <section className="section">
            <div className="container is-max-desktop">
                <Header level={1}>
                    Professional Experience
                </Header>
                <Header level={2}>
                    Deutsche Bank
                </Header>

                <Segment title="Duales Studium and Apprenticeship" dateRange={["Aug 2015", "Jul 2017"]}>
                    <div>
                        A &quot;Duales Studium&quot; is a university programme accompanied by practical work.
                        In my case, I worked in the IT department of Deutsche Bank's retail bank in Eschborn.
                    </div>
                    <div>
                        I received training as a <em>Computer Science Expert</em> apprentice.
                        In this two-year programme, I worked in multiple roles of the software development cycle and gathered experience in requirements analysis, programming, testing, IT architecture and project management.
                    </div>
                    <div>
                        I also chose to undertake two placements, one in business architecture in Frankfurt, and the other one in the chief digital office in London.
                    </div>
                </Segment>
                <Segment title="Business Functional Analyst" dateRange={["Jul 2017", "Jul 2019"]}>
                    <div>
                        After finishing the apprenticeship programme, I continued work as Business Functional Analyst for Deutsche Bank's document management system.
                        Until the end my study programme in Jan 2019, I have worked 3 days per week. Afterwards, I was employed on a full-time basis.
                    </div>
                    <div>
                        As a Business Analyst, I analysed requirements and business processes. Also, I coordinated work between our develpment team and those of our customers.
                        Aside from regular feature releases, most of my time was spent on planning the adjustments for complying with <em>EU GDPR</em>.
                    </div>
                    <div>
                        Furthermore, during my time as Business Analyst, I supported our project management and managed small projects on my own.
                    </div>
                </Segment>
                <Header level={2}>
                    &#127754; Breaking Wave
                </Header>
                <Segment title="Software Engineer" dateRange={["Aug 2019", "Sep 2021"]}>
                    <div>
                        This subsidiary of Deutsche Bank works with new technologies using agile rapid-prototyping approaches.
                        I joined just after this new team was created, first as an engineer seconded from Deutsche Bank.
                        From Jan 2020, I was directly employed by Breaking Wave.
                    </div>
                    <div>
                        I developed software for multiple projects around Digital Assets, Digital Identity and the Internet of Things.
                        I also configured testing and supported IT operations using a set of DevOps tools, for instance <em>Azure DevOps</em> and <em>Terraform</em>.
                        Most of my time was spent working on web frontends using <em>React</em> or <em>Vue</em>, but I created
                        backend APIs, too, using <em>Java</em>, <em>Go</em> and <em>C#</em>.
                    </div>
                </Segment>
                <Header level={1}>
                    Education
                </Header>
                <Segment title="MSc in Management of Information Systems and Digital Innovation" dateRange={["Sep 2021", "Aug 2022"]}>
                    <div>
                        At <em>London School of Economics and Political Science</em>
                    </div>
                    <div>
                        &#10084;-Courses: Data Governance, Service Design
                    </div>
                </Segment>
                <Segment title="BSc in Business Administration With Focus on Business Information Systems" dateRange={["Sep 2015", "Jan 2019"]}>
                    <div>
                        At <em>Frankfurt School of Finance &amp; Management</em>
                    </div>
                    <div>
                        &#10084;-Courses: Innovation Management, Monetary Theory and Policy, Enterprise Architecture Management, Practical Project (Blockchain)
                    </div>
                </Segment>
            </div>
        </section>
    </>;

export default Cv;
