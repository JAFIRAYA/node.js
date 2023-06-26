const largeNumber = 356;
module.exports = largeNumber;








function DateTime() {
    const currentDate = new Date();
    return currentDate.toISOString();
  }
  
  module.exports = {
    DateTime,
  };