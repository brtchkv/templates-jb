export function getEndRange(startDate, filterOption, i18n) {
    return startDate.add(1, filterOption ?? "day").subtract(1, 'day').locale(i18n.language).format('LL')
}
