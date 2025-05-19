import TechStack from "./TechStack.jsx";
import TimeLine from "./TimeLine.jsx";
import ProjectCarousel from "./Carousel.jsx";

function Projects() {
    return (
        <div id="projects" className={"section"}>
            <h1 align={"center"}>Projects</h1>
            <div className="carousel-wrapper">
                <ProjectCarousel />
            </div>
        </div>
    )
}

export default Projects;