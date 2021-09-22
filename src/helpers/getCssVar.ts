function getCssVar(computedStyles: CSSStyleDeclaration) {
    return function (cssVar: string): string {
        return computedStyles.getPropertyValue(cssVar).trim();
    };
}

export default getCssVar(getComputedStyle(document.body));
