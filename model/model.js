const  mongoose=require("mongoose");
main().then((res)=>console.log("connected with model.js")).catch((err)=>console.log(err));


async function main(){
    await mongoose.connect('mongodb://localhost:27017/wanderlust');
};


let listingschema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,


    },
    image:{
        __filename:String,
        type:String,
        default:"https://th.bing.com/th/id/OIP.Z7mm6hfO3cqcCqqo3mNqhgHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        set:(v)=>
        v===""
        ?"https://th.bing.com/th/id/OIP.Z7mm6hfO3cqcCqqo3mNqhgHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        :v,

    },
    price:{
        type:Number,

    },
    location:{
        type:String,

    },
    country:{
        type:String,

    }

});

const listing=mongoose.model("listing",listingschema);
module.exports =listing;