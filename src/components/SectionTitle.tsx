type SectionTitleProps = {
    title: string;
};

export default function SectionTitle(props: SectionTitleProps) {
    return (
        <h2 className="cs-font-montserrat mb-8 text-4xl font-extrabold capitalize">
            {props.title}
        </h2>
    );
}
