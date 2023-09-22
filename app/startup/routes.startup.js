const cors=require("cors");

const { blogsRouter }=require("../routes/blogs.routes");
const { commentsRouter }=require("../routes/comments.routes")

module.exports=(app) => {
    const corsOptions={
        origin: (origin, callback) => {
            if (!origin||origin===process.env.FRONT_URL) {
                callback(null, true); // Allow the request
            } else {
                callback(new Error("Not allowed by CORS")); // Block the request
            }
        },
        credentials: true,
    };

    app.use(cors(corsOptions));


    app.use('/blogs', blogsRouter);

    app.use('/comments', commentsRouter);

    app.get("/", (req, res) => res.send("Welcome To Triluxo_Blogs"));
    app.get("*", (req, res) => { res.status(400).send({ error: true, message: "Route not Found" }) });
}