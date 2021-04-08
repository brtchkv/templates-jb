import dayjs from "dayjs";
import i18next from "i18next";

export function getEndRange(startDate: dayjs.Dayjs, filterOption: string, i18n: typeof i18next) {
    // @ts-ignore
    return startDate.add(1, filterOption ?? "day").subtract(1, 'day').locale(i18n.language).format('LL');
}

export function subtractRange(startDate: dayjs.Dayjs, filterOption: string) {
    // @ts-ignore
    return startDate.subtract(1, filterOption);
}

export function addRange(startDate: dayjs.Dayjs, filterOption: string) {
    // @ts-ignore
    return startDate.add(1, filterOption);
}

export function getStartOf(startDate: dayjs.Dayjs) {
    // @ts-ignore
    return startDate.startOf();
}
