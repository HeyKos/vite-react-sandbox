import { useRef } from "react";

/**
 * Keeps track of the number of times the ref is updated which indicates number of renders.
 * @param  {string} componentName The name of the component that you want to track renders on.
 * @returns void
 */
export function useRendersCount(componentName: string): void {
    const renders = useRef(1);
    console.log(`Number of renders on ${componentName}: ${renders.current++}`);
}
