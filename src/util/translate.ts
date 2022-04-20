/**
 * innerHTML 번역 함수
 * @param selectors 원문이 있는 요소 셀렉터
 * @param target 원문
 * @param text 변역문
 */
export function translateInnerHTML(selectors: string, target: RegExp, text: string): boolean {
    const element = document.querySelector(selectors);

    if (element === null || !element.textContent) return false;

    element.innerHTML = element.innerHTML.replace(target, text);

    return true;
}

/**
 * placeholder 번역 함수
 * @param selectors 원문이 있는 요소 셀렉터
 * @param target 원문
 * @param text 변역문
 */
export function translatePlaceholder(selectors: string, target: RegExp, text: string): boolean {
    const element = document.querySelector(selectors) as HTMLInputElement;

    if (element === null || !element.placeholder) return false;

    element.placeholder = element.placeholder.replace(target, text);

    return true;
}