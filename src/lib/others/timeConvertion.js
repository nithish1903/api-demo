
export function convertToISOFormat(inputDateString) {
    if (!inputDateString) {
        return "";
    }
    const inputDate = new Date(inputDateString);
    const timezoneOffsetInMinutes = inputDate.getTimezoneOffset();
    const adjustedDate = new Date(inputDate.getTime() - timezoneOffsetInMinutes * 60000);
    const isoDateString = adjustedDate.toISOString();

    return isoDateString;
}