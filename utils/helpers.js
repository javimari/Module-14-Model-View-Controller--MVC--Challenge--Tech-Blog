module.exports = {
    format_date: (date) => {
      const newDate = new Date(date);
      const month = newDate.getMonth() + 1;
      const day = newDate.getDate();
      const year = newDate.getFullYear();
      return `${month}/${day}/${year}`;
    },
    
    format_url: (url) => {
      return url
        .replace(/^https?:\/\//, '')  // Removes 'http://' or 'https://'
        .replace(/^www\./, '')        // Removes 'www.'
        .split(/[/?#]/)[0];           // Splits at '/', '?' or '#' and returns first part
    },
    
    format_plural: (word, amount) => {
      return amount !== 1 ? `${word}s` : word;
    }
  };
  