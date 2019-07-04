 export  const addEvent = (element, ev, fun) => {
    if (element.attachEvent) {
        element.attachEvent(`on${ev}`, fun);
    } else {
        element.addEventListener(ev, fun);
    }
};
export const removeEvent = (element, ev, fun) => {
    if (element.removeEventListener) {
        element.removeEventListener(ev, fun);
    } else {
        element.detachEvent(`on${ev}`, fun);
    }
};
export const closest = (el, selector) => {
    let judge = false;
    while (el) {
        if (el === selector) {
            judge = true;
            break;
        }
        el = el.parentElement;
    }
    return judge;
};
