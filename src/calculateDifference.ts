export const calculateDifference = (date: Date) => {
    const now = new Date();
    const difference = date.getTime() - now.getTime();

    if (difference < 0) {
        return -1;
    }

    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return { days, seconds, minutes, hours };
}
