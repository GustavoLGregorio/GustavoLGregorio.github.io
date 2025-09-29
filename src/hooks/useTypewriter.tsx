import { useState, useEffect } from "react";

export function useTypewriter(
    text: string,
    speed: number,
    dSpeed: number,
) {
    const [result, setResult] = useState<string>("");
    const [isReverse, setIsReverse] = useState<boolean>(false);

    useEffect(() => {
        let intervalId: number;
        let i: number;

        if (!isReverse) {
            i = 0;

            intervalId = setInterval(() => {
                setResult((r) => {
                    const next = r + text[i];

                    if (i >= text.length - 1) {
                        clearInterval(intervalId);
                        setIsReverse(true);
                    }

                    i++;
                    return next;
                });
            }, speed);
        } else {
            i = text.length;

            intervalId = setInterval(() => {
                setResult((r) => {
                    const next = r.substring(0, i);

                    if (i <= 0) {
                        clearInterval(intervalId);
                        setIsReverse(false);
                    }

                    i--;
                    return next;
                });
            }, dSpeed);
        }

        return () => clearInterval(intervalId);
    }, [isReverse, text, speed, dSpeed]);

    return result;
}
