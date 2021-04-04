export function getEndRange(startDate, filterOption, i18n) {
    return startDate.add(1, filterOption ?? "day").subtract(1, 'day').locale(i18n.language).format('LL');
}

export function subtractRange(startDate, filterOption) {
    return startDate.subtract(1, filterOption);
}

export function addRange(startDate, filterOption) {
    return startDate.add(1, filterOption);
}

export function getStartOf(startDate) {
    return startDate.startOf();
}
