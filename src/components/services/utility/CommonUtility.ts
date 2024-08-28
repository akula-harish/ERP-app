interface DateTimeCountry {
    date: string;
    time: string;
    timeZone: string;
}

export const CommonUtility = {
    getTimeDateCountry: (): DateTimeCountry => {
        const currentDate = new Date();
        const date = currentDate.toLocaleDateString();
        const time = currentDate.toLocaleTimeString();
        const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        return { date, time, timeZone };
    }
};
