import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ProjectProps = {
    title: string;
    imageSource: string;
    imageAlt: string;
    description: string;
    link: string;
    icons: IconProp[];
};
export default function Project(props: ProjectProps) {
    return (
        <a href={props.link}>
            <article className="relative flex flex-col-reverse">
                <div className="cs-filter-blur absolute top-[50%] flex w-[80%] translate-y-[-50%] flex-col gap-1 self-center rounded-xl bg-[hsla(180,4%,5%,0.25)] p-4">
                    <h3 className="cs-font-tilt-warp text-3xl capitalize">
                        {props.title}
                    </h3>
                    <p className="cs-font-cascadia-code text-xl capitalize">
                        {props.description}
                    </p>
                    <ul className="flex gap-2 pt-2">
                        {props.icons?.map((icon, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={icon} />
                            </li>
                        ))}
                    </ul>
                </div>
                <img
                    className="aspect-[4/3] w-full rounded-xl object-cover object-center"
                    src={props.imageSource}
                    alt={props.imageAlt}
                />
            </article>
        </a>
    );
}
