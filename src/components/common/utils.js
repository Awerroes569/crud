export function getCurrentDate() {
    // Get current date
    const currentDate = new Date();
  
    // Extract year, month, and day
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');
  
    // Format the date
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  }

