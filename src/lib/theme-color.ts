/** Keep CMS-supplied colors usable, with optional alternate-theme tokens. */
export function themeColor(color: string) {
  return /^#[0-9a-f]{6}$/i.test(color)
    ? `var(--palette-${color.slice(1).toLowerCase()}, ${color})`
    : color;
}
