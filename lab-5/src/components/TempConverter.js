const TempConverter = (temp) => {
    return Math.round((temp - 273.15) * 9/5 + 32);
  }

export default TempConverter;



