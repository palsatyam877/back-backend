class ApiError extends Error {
    constructor(
        stausCode,
        message = "Something went wrong",
        errors = [],
        statck = ""
    ) {
       super(message),
       this.statusCode = stausCode,
       this.errors = errors,
       this.success = false,
       this.data = null

       if(statck) {
          this.stack = statck
       } else {
            Error.captureStackTrace(this , this , constructor)
       }       
    }
}


export {ApiError}