export default {
    translate: [
        {
            selectors: ".js-site-search-form > label > input:nth-child(1)",
            target: /Search or jump to…/,
            text: "검색 또는 이동...",
            elementType: "placeholder"
        },
        {
            selectors: ".js-selected-navigation-item:nth-child(2)",
            target: /Pull requests/,
            text: "풀 리퀘스트",
            elementType: "textContent"
        },
        {
            selectors: ".js-selected-navigation-item:nth-child(3)",
            target: /Issues/,
            text: "이슈",
            elementType: "textContent"
        },
        {
            selectors: ".js-selected-navigation-item:nth-child(1)",
            target: /Marketplace/,
            text: "마켓 플레이스",
            elementType: "textContent"
        },
        {
            selectors: ".js-selected-navigation-item:nth-child(5)",
            target: /Explore/,
            text: "탐색",
            elementType: "textContent"
        }
    ]
} as Module;