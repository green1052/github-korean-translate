export {};

declare global {
    type ElementType = "innerHTML" | "placeholder";

    interface Module {
        url?: RegExp,
        translate: {
            selectors: string,
            target: RegExp,
            text: string,
            type: ElementType
        }[]
    }
}