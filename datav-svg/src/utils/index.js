/**
 * 防止多次触发机制
 * ：在delay时间内，只触发一次callback
*/
export function debounce(delay, callback) {
    let task
    return function () {
        clearTimeout(task)
        task = setTimeout(() => {
            callback.apply(this, arguments)
        }, delay)
    }
}