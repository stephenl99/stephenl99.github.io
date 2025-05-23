

const techList = [
    { name: 'C++', logo: '/assets/CPP.png' },
    { name: 'C', logo: '/assets/C.png' },
    { name: 'Python', logo: '/assets/Python.png' },
    { name: 'Java', logo: '/assets/Java.png' },
    { name: 'Javascript', logo: '/assets/JavaScript.png' },
    { name: 'Docker', logo: '/assets/Docker.png' },
    { name: 'React', logo: '/assets/React.png' },
    { name: 'VS Code', logo: '/assets/VSCode.png' },
];

const TechStack = () => {
    return (
        <div className="tech-stack-container">
            <h3>My Tech Stack</h3>
            <ol className="tech-list">
                {techList.map((tech, index) => (
                    <li className="tech-item" key={index}>
                        <img src={tech.logo} alt={tech.name} />
                        <span>{tech.name}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TechStack;
