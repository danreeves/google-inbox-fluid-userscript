export default function debounce (fn: Function, wait: number, immediate?: boolean) {
    let timeout: number;
    return function () {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) fn.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) fn.apply(context, args);
    };
}
