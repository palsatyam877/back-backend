import mongoose,{Schema} from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema
(
    {
        username: {
            type : String,
            required : true,
            lowercase : true,
            unique : true,
            trim : true,
            index : true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            trim : true
        },
        fullName : {
            type : String,
            required : true,
            trim : true,
            index : true
        },
        avatar : {
            type : String, // cloudnary
            required : true,
        },
        coverImage : {
            type : String, // cloudnary
        },
        watchHistory : [
            {
                type : Schema.Types.ObjectId,
                ref : "User"
            }
        ],
        password : {
            type : String,
            required : true
        },
        refreshToken : {
            type : String
        }
    },
    {
       timestamps : true
    } 
);

userSchema.pre("save" , async function(next) {
       if(!this.isModified('password')) return next();

       this.password = bcrypt(this.password , 10);
       next();
});

userSchema.methods.isPasswordCorrect = async function(password) {
       return await bcrypt.compare(password , this.password);
}

userSchema.methods.generateAccessToken = function() {
     jwt.sign
     (
        {
           _id : this._id,
           username : this.username,
           email : this.email,
           fullName : this.fullName
        },

        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
     )
}

userSchema.methods.generateRefreshToken = function() {
    jwt.sign
    (
       {
          _id : this._id,
       },

       process.env.REFRESH_TOKEN_SECRETT,
       {
           expiresIn : process.env.REFRESH_TOKEN_EXPIRY
       }
    )
}

export const User = mongoose.model("User" , userSchema);