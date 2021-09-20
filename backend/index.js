import express from 'express' ;
import cors from 'cors' ;
import dotenv from "dotenv"  ;
import users from './routes/users.js' ;

dotenv.config() ;

const app = express() ;

app.use(express.json({ limit: "500" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const port = process.env.PORT || 3000 ;


app.use("/api" , users) ;


app.listen( port , () => {
    console.log(`Server is listening on port ${port}`) ;
}) ;