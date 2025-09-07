function TimeLine() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4 style={{paddingBottom: 20}}>What I've been up to:</h4>
                    {timelineItems.map((item, index) => (
                        <div className="timeline-item d-flex align-items-center" key={index}>
                            <img src={item.image} alt={item.title} className="timeline-image"/>
                            <div className="timeline-content-container position-relative">
                                <div className="timeline-dot"/>
                                <div className="timeline-content">
                                    <h4>{item.title}</h4>
                                    <span className="second-text" style={{}}>{item.date}</span>
                                    <ul>
                                        {item.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

const timelineItems = [
    {
        title: "FanDuel",
        date: "Summer 2025",
        description: ["SWE Intern @ FanDuel", "Utilized React, Spring Boot, AWS",  "Raised user sign-up verification by 3%"],
        image: "/assets/Fanduel.png"
    },
    {
        title: "Georgia Tech",
        date: "Graduating Winter 2026",
        description: ["Information and Intelligence Specializations", "Math Minor", "Datacenter parallelization research"],
        image: "/assets/Georgia_Tech_Yellow_Jackets_logo.svg.png"
    },
    {
        title: "Winship Cancer Institute",
        date: "Summer 2024",
        description: ["Medical Robotics Research"],
        image: "/assets/emory-logo.png"
    }

]
export default TimeLine;