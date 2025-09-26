function howManyTimes(time1, time2) {
    const start = new Date(time1);
    const end = new Date(time2);

    let totalStrikes = 0;
    let current = new Date(start);

    while (current < end) {
        const hours = current.getHours();
        const minutes = current.getMinutes();
        const seconds = current.getSeconds();

        if (minutes === 0 && seconds === 0) {
            const hour12 = hours % 12 || 12;
            for (let i = 0; i < hour12; i++) {
                const strikeTime = new Date(current);
                strikeTime.setSeconds(strikeTime.getSeconds() + i);
                if (strikeTime < end && strikeTime >= start) {
                    totalStrikes++;
                }
            }
        }
        else if (minutes === 30 && seconds === 0) {
            if (current < end && current >= start) {
                totalStrikes++;
            }
        }

        current.setSeconds(current.getSeconds() + 1);
    }

    return totalStrikes;
}