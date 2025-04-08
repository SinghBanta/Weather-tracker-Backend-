const express=require('express');
const app=express();
const mongoose=require('mongoose');
const routes=require('./routes/index')
const morgan=require('morgan')
const dotenv=require('dotenv')

dotenv.config();

app.use(morgan('dev'))
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB is connected");
})
.then(()=>{
    const PORT=process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})

