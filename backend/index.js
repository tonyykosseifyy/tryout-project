import express from 'express' ;
import cors from 'cors' ;
import dotenv from "dotenv"  ;
import users from './routes/users.js' ;
import mongoose from 'mongoose' ;
dotenv.config() ;

const port = process.env.PORT || 3000 ;

const app = express() ;

app.use(express.json({ limit: "500" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


mongoose
  .connect(process.env.MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));



app.use("/api" , users) ;


app.listen( port , () => {
    console.log(`Server is listening on port ${port}`) ;
}) ;