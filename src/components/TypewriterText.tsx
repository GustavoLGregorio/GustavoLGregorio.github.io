import { useTypewriter } from "../hooks/useTypewriter";

type TypewriterTextProps = {
    text: string;
    typeSpeed: number;
    deleteSpeed: number;
};

export default function TypewriterText(props: TypewriterTextProps) {
    return (
        <div className="relative">
            <div className="cs-visually-hidden">{props.text}</div>
            <div className="absolute">
                {useTypewriter(props.text, props.typeSpeed, props.deleteSpeed)}
            </div>
        </div>
    );
}
