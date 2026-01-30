
import { icons } from 'lucide';

export const getIcon = (name: string, attrs: Record<string, string> = {}) => {
    const iconData = icons[name as keyof typeof icons] as any[];
    if (!iconData) return '';

    const defaultAttrs = {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
    };

    const mergedAttrs = {
        ...defaultAttrs,
        ...attrs,
        class: `lucide lucide-${name} ${attrs.class || ''}`.trim(),
    };

    const attrsString = Object.entries(mergedAttrs)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');

    const childrenString = iconData
        .map(
            ([tag, tagAttrs]) =>
                `<${tag} ${Object.entries(tagAttrs)
                    .map(([k, v]) => `${k}="${v}"`)
                    .join(' ')} />`
        )
        .join('');

    return `<svg ${attrsString}>${childrenString}</svg>`;
};
