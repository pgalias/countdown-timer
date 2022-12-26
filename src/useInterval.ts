import {useEffect, useRef} from "react";

export const useInterval = (cb: (...args: any[]) => any, time = 1000) => {
    const interval = useRef<NodeJS.Timer>();

    useEffect(() => {
        interval.current = setInterval(() => cb(), time);

        return () => {
            clearInterval(interval.current);
        }
    }, [cb, time]);
}
