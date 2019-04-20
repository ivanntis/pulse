
export function hasShadowDom(el: HTMLElement) {
  return !!el.shadowRoot && !!(el as any).attachShadow;
}

export function getBreakPointBySize(width: number) {
  if (width < 480) {
    return 'xs';
  } else if (width < 540) {
    return 'sm';
  } else if (width < 768) {
    return 'md';
  } else {
    return 'lg';
  }

}