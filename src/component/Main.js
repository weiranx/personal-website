import React, {Component} from 'react';

class Main extends Component {
    constructor(props) {
        super();
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        this.state = {
            count: 0
        };
    }
    render = () => {
        return (
            <div className="Main col-lg-7">
                <div className="container" style={{"marginTop": 50}}>

                    <button className="print-text">Print</button>

                    <div className="resume-sec">
                        <h6>Education</h6>
                        <p>Currently freshman at <span className="bold">University of California, San Diego</span>, majoring in <span className="bold">Mathmatics - Computer Science</span></p>
                        <p className="resume-sub-sec-text">Courses Currently Taking Relating the Field</p>
                        <ul>
                            <li>CSE 11 - Java Programming</li>
                            <li>MATH 20C - Vector Calculus</li>
                        </ul>
                        <p className="resume-sub-sec-text">Courses Planning to Take This Year</p>
                        <ul>
                            <li>CSE 12 -Basic Data Structure and Object-Oriented Design</li>
                            <li>CSE 15L - Software Tools & Techniques Lab</li>
                            <li>CSE 30 – Computer Organization & Systems Analysis</li>
                        </ul>
                        <p className="resume-sub-sec-text">Self-Studying Topics</p>
                        <ul>
                            <li>Python Programming</li>
                            <li>Node.js</li>
                            <li>Design</li>
                            <li>Machine Learning</li>
                        </ul>
                    </div>

                    <div className="resume-sec">
                        <h6>Skills</h6>
                        <ul>
                            <li>iOS Developer</li>
                            <li>Web Developer</li>
                            <li>Back-end Developer</li>
                            <li>UI/UX Designer</li>
                        </ul>
                    </div>

                    <div className="resume-sec">
                        <h4>Experiences and Projects</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;