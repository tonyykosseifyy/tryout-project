import express from 'express' ;
import cors from 'cors' ;


const app = express() ;

app.use(express.json({ limit: "500" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const port = process.env.PORT || 3000 ;


app.get("/api" , ( req , res) => {
    res.status(200).send({
        "name" : "tony kosseify" ,
        "email" : "tonykosseify123@gmail.com"
    });
});

app.listen( port , () => {
    console.log(`Server is listening on port ${port}`) ;
}) ;