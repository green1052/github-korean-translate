export {};

declare global {
    type ElementType = "textContent" | "placeholder";

    type Module = {
        url?: RegExp,
        translate: {
            selectors: string,
            target: RegExp,
            text: string,
            type: ElementType
        }[]
    };
}