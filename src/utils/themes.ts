import { Color, CssClassMap } from "../interface";

export function createColorClasses(color: Color | undefined | null): CssClassMap | undefined {
    return (typeof color === 'string' && color.length > 0) ? {
      'pulse-color': true,
      [`pulse-color-${color}`]: true
    } : undefined;
  }
  