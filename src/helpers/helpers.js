// gets only the num from a string
export function getNum(str) {
    let num = str.replace(/[^\d]/g, '');
    return parseInt(num, 10);
}

// sort strings with numbers correctly
export function sort(arr) {
    const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' })
    const sorted = arr.sort((a, b) => collator.compare(a, b))
    return sorted
}