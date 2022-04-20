import {translateInnerHTML, translatePlaceholder} from "./util/translate";

(() => {
    const context = require.context("./translate/", true, /\.ts$/);

    window.addEventListener("DOMContentLoaded", () => {
        for (const key of context.keys()) {
            const module: Module = context(key).default;

            if (!module) continue;

            if ((module.url === undefined || module.url.test(location.pathname))) {

                for (const translate of module.translate) {
                    const method =
                        translate.type === "innerHTML"
                            ? translateInnerHTML
                            : translate.type === "placeholder"
                                ? translatePlaceholder
                                : undefined;

                    if (!method) continue;

                    method(translate.selectors, translate.target, translate.text);
                }
            }
        }
    });
})();