export default {
    translate: [
        {
            selectors: ".js-site-search-form > label > input:nth-child(1)",
            target: /Search or jump to…/,
            text: "검색 또는 바로가기...",
            type: "placeholder"
        },
        {
            // TODO HTML 태그 부숴먹음
            selectors: ".js-selected-navigation-item:nth-child(2)",
            target: /Pull requests/,
            text: "풀 리퀘스트",
            type: "textContent"
        },
        {
            selectors: ".js-selected-navigation-item:nth-child(3)",
            target: /Issues/,
            text: "이슈",
            type: "textContent"
        },
        {
            selectors: ".js-selected-navigation-item:nth-child(1)",
            target: /Marketplace/,
            text: "마켓 플레이스",
            type: "textContent"
        },
        {
            selectors: ".js-selected-navigation-item:nth-child(5)",
            target: /Explore/,
            text: "탐색",
            type: "textContent"
        }
    ]
} as Module;