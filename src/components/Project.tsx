import {} from "react";

export type ProjectProps = {
    title: string;
    imageSource: string;
    imageAlt: string;
    description: string;
};
export default function Project(props: ProjectProps) {
    return (
        <article className="relative flex flex-col-reverse">
            <div className="absolute top-[50%] flex w-[80%] translate-y-[-50%] flex-col gap-1 self-center rounded-xl bg-[hsla(180,4%,5%,0.25)] p-4">
                <h3 className="text-3xl capitalize">
                    {props.title}
                </h3>
                <p className="text-xl capitalize">
                    {props.description}
                </p>
            </div>
            <img
                className="aspect-[4/3] w-full rounded-xl object-cover object-center"
                src={props.imageSource}
                alt={props.imageAlt}
            />
        </article>
    );
}
