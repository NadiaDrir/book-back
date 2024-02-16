const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const userSchema =new Schema ({
    title:{
        type:String,
        required:true,    
    },
      
    detailles:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        required:true,
        
    },
    publicationYear: {
        type: Number,
    }
    },{timestamps:true}
    )


    
    const Book=mongoose.model('Book',userSchema);
   
    module.exports =Book