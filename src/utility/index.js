// In order to render side nav


export const APODWeek = [
    "Today", "One Day Ago", "Two Days Ago", "Three Days Ago", "Four Days Ago", "Five Days Ago", "Six Days Ago", "Seven Days Ago"
] 



  

  export const getLast7Days = () => {
    const dates = [];
    for (let i = 1; i < 7; i++) { // Since Asia is ahead in terms of time, For loop starts at one to use prev day as current date to prevent error for residence ahead of US. 
        const date = new Date();
        date.setDate(date.getDate() - i);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        dates.push(`${year}-${month}-${day}`);

        // dates.push(`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`);
        // Display the date as MM-DD-YYYY but without the zero in front of MM and DD

         // MM-DD-YYYY with zero in front of MM and DD when below 10 days
      // const month = String(date.getMonth() + 1).padStart(2, '0');
      // const day = String(date.getDate()).padStart(2, '0');
      // const year = date.getFullYear();
      // dates.push(`${month}-${day}-${year}`);
    }
    return dates;
};