const generalFunctios = {
  formatName: (name: string) => {
    return name.split("|")[1] ? name.split("|")[1] : name
  },
  formatDate: (date: Date) => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return "Error: La entrada no es un objeto de fecha válido";
  }

  const day: number = date.getDate();
  const month: number = date.getMonth() + 1; 
  const year: number = date.getFullYear();

  const formattedDay: string = day < 10 ? `0${day}` : day.toString();
  const formattedMonth: string = month < 10 ? `0${month}` : month.toString();

  const fechaFormateada: string = `${formattedDay}/${formattedMonth}/${year}`;

  return fechaFormateada;
  },
  formatTime: (miliseconds: number) =>{
    if (miliseconds < 0 || isNaN(miliseconds)) {
        return "Error: La entrada no es válida";
      }
    
      const hours: number = Math.floor(miliseconds / 3600000);
      const minutes: number = Math.floor((miliseconds % 3600000) / 60000);
      const seconds: number = Math.floor((miliseconds % 60000) / 1000);
    
      const hoursFormatted: string = hours < 10 ? `0${hours}` : hours.toString();
      const minutesFormatted: string = minutes < 10 ? `0${minutes}` : minutes.toString();
      const secondsFormatted: string = seconds < 10 ? `0${seconds}` : seconds.toString();
    
      const timeForatted: string = `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
    
      return timeForatted;
  },
};

export default generalFunctios