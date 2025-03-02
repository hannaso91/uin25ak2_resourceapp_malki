import React from "react";
import { Link, useParams } from "react-router-dom";
import resources from "../assets/resources";

export default function ResourceCard() {

    const {slug} = useParams()
    const filteredResources = resources.filter((resource) => resource.category === slug);

    return (
    <>
        {filteredResources.map((resource) => (
            <article className="resources" key={resource.id}>
                <h3>{resource.title}</h3>
                <ul>
                    <li>
                        <Link to={resource.url}>Les mer her</Link>
                    </li>
                </ul>

            </article>
        ))}
    </>
  );
}


