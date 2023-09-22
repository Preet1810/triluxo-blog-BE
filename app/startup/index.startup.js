const PORT=process.env.PORT;

module.exports=async (app) => {
    await require("./db.startup")();

    require("./routes.startup")(app);

    require("./cloudinary.startup")(app);



    app.listen(PORT||3001, () => {
        console.log("Triluxo Blog Server is Running on PORT =>", PORT||3001)
    })

}