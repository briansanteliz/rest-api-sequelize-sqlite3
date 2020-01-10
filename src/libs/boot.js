module.exports = app => {
  app.db.sequelize.sync().done(()=>{
    app.listen(app.get("Port"), () => {
      console.log("Servidor en el Puerto", app.get("Port"));
    });
  })


 
};
