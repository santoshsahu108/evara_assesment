const logger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
    
    res.on("finish", () => {
      console.log(`${new Date().toISOString()} - ${res.statusCode}`);
    });
    
    next();
  };
  
  module.exports = logger;
  