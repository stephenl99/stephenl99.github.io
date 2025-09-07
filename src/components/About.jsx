import TimeLine from "./TimeLine.jsx"
import TechStack from "./TechStack.jsx";

function About() {
    return (
        <div id="about" className={"section"}>
            <h1 align={"center"}>About</h1>
            <div className="row">
                <div className="tbcontainer col-7 w-40" style={{paddingTop: "3%", paddingLeft: "5%"}}>
                <span>
                    My name is Stephen, and I am a computer science and math student at Georgia Tech. My primary interests are in back-end development, algorithms, and low-latency computing. As a result, you might not be surprised that my favorite language is C++! I also have industry experience in web development with FanDuel, primarily using React front-end and Spring Boot back-end. Outside of computer science,
                    I enjoy playing chess, playing violin in the Georgia Tech Symphony Orchestra, and lifting weights. If you want to work on a project together or connect for any other reason, please reach out!
                </span>
                <TechStack />
                </div>
                <div className="col md-6">
                    <TimeLine/>
                </div>
            </div>
        </div>
    )
}

export default About;