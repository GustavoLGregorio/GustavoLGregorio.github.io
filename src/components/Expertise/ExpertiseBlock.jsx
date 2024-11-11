import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
export default function ExpertiseBlock({ image, title, subtitle, text }) {
  return (
    <article className="px-8 py-12 mb-4 expertise-block">
      <div className="flex gap-x-6 items-center mb-8">
        <FontAwesomeIcon
          icon={faReact}
          className="text-[3.5rem]"
        ></FontAwesomeIcon>
        <h3 className="flex flex-col">
          <span>Frontend</span>
          <span>React, NextJS</span>
        </h3>
      </div>
      <p className="px-8 py-0 expertise-text">
        Experiência em paradigmas OOP e funcionais: Javascript & PHP.
      </p>
    </article>
  );
}
