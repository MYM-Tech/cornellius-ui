export default function checkIsImgTag(el: HTMLElement): boolean {
    return el.tagName.toLowerCase() === 'img';
}
