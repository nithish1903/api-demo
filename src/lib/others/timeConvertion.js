
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

export function formatDateModerationReview(inputDate) {
    const date = new Date(inputDate);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }