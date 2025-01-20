// In order to render side nav


export const APODWeek = [
    "Today", "One Day Ago", "Two Days Ago", "Three Days Ago", "Four Days Ago", "Five Days Ago", "Six Days Ago", "Seven Days Ago"
] 


const getLast7Days = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date.toISOString().split('T')[0]); // Format the date as YYYY-MM-DD
    }
    return dates
    console.log(dates[0])
  };

  