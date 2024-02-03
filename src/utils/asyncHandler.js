const asyncHandler = (requestHandler) => {
      (req , res , next) => {
        Promise
        .response(requestHandler(req ,res , next))
        .catch( (err) => {
             next(err);
        } );
      }
}

export {asyncHandler}

// const asyncHandler = (func) => async (req , res , next) => {
//      try {
//         await func(req , res , next)
//      } catch(error) {
//         res.status(process.env.PORT || 500).json({
//             success : false,
//             message : error.message
//         })
//      }

// }