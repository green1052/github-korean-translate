export default {
    url: /\/.*\/.*/,
    translate: [
        {
            selectors: "span[data-content=Code]",
            target: /Code/,
            text: "코드",
            type: "innerHTML"
        },
        {
            selectors: "span[data-content=Issues]",
            target: /Issues/,
            text: "이슈",
            type: "innerHTML"
        },
        {
            selectors: `span[data-content="Pull requests"]`,
            target: /Pull requests/,
            text: "풀 리퀘스트",
            type: "innerHTML"
        },
        {
            selectors: "span[data-content=Actions]",
            target: /Actions/,
            text: "엑션",
            type: "innerHTML"
        },
        {
            selectors: "span[data-content=Discussions]",
            target: /Discussions/,
            text: "토론",
            type: "innerHTML"
        },
        {
            selectors: "span[data-content=Projects]",
            target: /Projects/,
            text: "프로젝트",
            type: "innerHTML"
        },
        {
            selectors: "span[data-content=Wiki]",
            target: /Wiki/,
            text: "위키",
            type: "innerHTML"
        },
        {
            selectors: "span[data-content=Security]",
            target: /Security/,
            text: "보안",
            type: "innerHTML"
        },
        {
            selectors: "span[data-content=Insights]",
            target: /Insights/,
            text: "인사이트",
            type: "innerHTML"
        },
        {
            selectors: "span[data-content=Settings]",
            target: /Settings/,
            text: "설정",
            type: "innerHTML"
        },
    ]
} as Module;