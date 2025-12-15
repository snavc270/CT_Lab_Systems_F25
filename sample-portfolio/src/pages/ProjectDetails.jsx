import { useParams, Link } from "react-router-dom";
import { projects } from '../data/project.js';


export default function ProjectDetails() {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);


    if (!project) return <p>Project not found</p>;


    return (
        <section className="container">
            <Link to="/">← Back</Link>
            <h1>{project.title}</h1>
            <p>{project.longDescription}</p>
        </section>
    );
}