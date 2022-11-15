import mongoose from "mongoose";

const url = "mongodb://localhost:27017/app_node";
// const url = "mongodb+srv://tvhhai:tvhhai2510@cluster0.lotidl7.mongodb.net/app_node_db?retryWrites=true&w=majority";
export default async function connect() {
  try {
    await mongoose.connect(url, {});
    console.log("Connect success");
  } catch (error) {
    console.log("Connect error", error);
  }
}
