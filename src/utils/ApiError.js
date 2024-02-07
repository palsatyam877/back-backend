class ApiError extends Error {
    constructor(
        stausCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
       super(message),
       this.statusCode = stausCode,
       this.errors = errors,
       this.success = false,
       this.data = null

       if(stack) {
          this.stack = stack
       } else {
            Error.captureStackTrace(this , this , constructor)
       }       
    }
}


export {ApiError}