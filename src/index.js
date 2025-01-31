import app from "./app.js";
import { connectDB } from "./db.js";

const puerto = process.env.PORT || 4000;
connectDB();
app.listen(puerto);
console.log("Server on port", puerto);
