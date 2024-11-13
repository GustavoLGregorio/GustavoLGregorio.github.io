import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
export default function ExpertiseBlock({ image, title, subtitle, text }) {
  return (
    <article className="expertise-block mb-4 px-8 py-12">
      <div className="mb-8 flex items-center gap-x-6">
        <FontAwesomeIcon
          icon={faReact}
          className="text-[3.5rem]"
        ></FontAwesomeIcon>
        <h3 className="flex flex-col">
          <span>Frontend</span>
          <span>React, NextJS</span>
        </h3>
      </div>
      <p className="expertise-text px-8 py-0">
        Experiência em paradigmas OOP e funcionais: Javascript & PHP.
      </p>
    </article>
  );
}
