function getCssVar(
    computedStyles: CSSStyleDeclaration
): (cssVar: string) => string {
    return function (cssVar) {
        return computedStyles.getPropertyValue(cssVar).trim();
    };
}

export default getCssVar(getComputedStyle(document.body));
