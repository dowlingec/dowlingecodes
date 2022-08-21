import React from "react";

function About() {

    const skillset = {
            one: {
                name: "React.js",
                description: "XYZ blah blah",
                url: "https://github.com/dowlingec?tab=repositories&q=&type=&language=javascript&sort="
            },
            two: {
                name: "Ruby on Rails",
                description: "Rails has Ruby upon it",
                url: "https://github.com/dowlingec?tab=repositories&q=&type=&language=ruby&sort="
            },
            three: {
                name: "HTML",
                description: "Rails has Ruby upon it",
                url: "https://github.com/dowlingec?tab=repositories&q=&type=&language=html&sort="
            },
            four: {
                name: "CSS",
                description: "CSS stling wizardry",
                url: "https://github.com/dowlingec?tab=repositories&q=&type=&language=css&sort="
            },
            five: {
                name: "",
                description: "",
                url: ""
            }
    }

    console.log(skillset.one)
// "CSS", "GitHub", "Collaboration"}
    // const employeeInfo = {
    //     employeeName: "John Doe",
    //     employeeId: 27,
    //     salary: {
    //         2018-19: "400000INR",
    //         2019-20: "500000INR",
    //         2020-21: "650000INR"

    return(
        <div className="about">
            {/* <h1>About</h1> */}
            <p>Experienced in Ruby on Rails, React and JavaScript based programming with previous training in audio engineering and abundant experience in retail management. My years in retail were integral to my professional growth - I worked with stock logistics, customer satisfaction, visual merchandising, working to deadlines and communication motivating a team. My personal approach to any task is to always be inquisitive, unafraid to ask questions and open to new concepts.</p>
            <button className="about-expand">Read more...</button>
        </div>
    )
}

export default About;