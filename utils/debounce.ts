export default function debounceQuery(fn: Function, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout>
    return (...args: any) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout((...args) => {
            fn(...args)
        }, delay)
    }
}