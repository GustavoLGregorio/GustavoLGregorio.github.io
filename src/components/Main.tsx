import type React from "react";

type MainProps = {
    children: React.ReactElement | React.ReactElement[];
};

export default function Main(props: MainProps) {
    return <div className="flex flex-col gap-16 p-4">{props.children}</div>;
}
