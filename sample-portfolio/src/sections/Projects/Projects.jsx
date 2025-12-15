// imports project data
import { projects } from "../../data/project";
// imports project card component
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import './Projects.css';


export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>
                {/* loops through all of the project JSON objects in our project.js file and passes data into our ProjectCard component */}
                <div className="projects-grid">
                {projects.map(p => (
                    <ProjectCard key={p.slug} {...p} />
                ))}
                </div>
            </div>
        </section>
    );
}