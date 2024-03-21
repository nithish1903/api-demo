

export function formatNumberKM(number) {
    let n = Number(number)
    if (n >= 1000000) {
        return (n / 1000000).toFixed(2) + 'm';
    } else if (n >= 1000) {
        return (n / 1000).toFixed(2) + 'k';
    } else {
        return n.toString();
    }
}