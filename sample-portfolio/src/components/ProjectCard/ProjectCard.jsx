import { Link } from "react-router-dom";
import './ProjectCard.css';

export default function ProjectCard({ slug, title, description }) {
    return (
        <div className="project-card">
            {/* props for data to be inserted later on */}
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={`/project/${slug}`}>View Details</Link>
        </div>
    );
}