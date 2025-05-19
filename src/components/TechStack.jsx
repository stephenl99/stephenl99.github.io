

const techList = [
    { name: 'C++', logo: 'src/assets/CPP.png' },
    { name: 'C', logo: 'src/assets/C.png' },
    { name: 'Python', logo: 'src/assets/Python.png' },
    { name: 'Java', logo: 'src/assets/Java.png' },
    { name: 'Javascript', logo: 'src/assets/JavaScript.png' },
    { name: 'Docker', logo: 'src/assets/Docker.png' },
    { name: 'React', logo: 'src/assets/React.png' },
    { name: 'VS Code', logo: 'src/assets/VSCode.png' },
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
