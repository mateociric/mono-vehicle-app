export function checkInputValue(val: string): boolean {
    return !!(val.match(/^(?=[A-Za-z])(?!.*\s{2})[A-Za-z0-9\s-]{1,30}$/i));
}