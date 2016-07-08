// setTimeout like setInterval

export function interval (fxn, arg, time) {
    setTimeout(function () {
        fxn(arg);
        interval(fxn, arg, time);
    }, time);
}
