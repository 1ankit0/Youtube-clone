class ApiResponse{
    constructor(
        message="Success",
        statusCode,
        data 
    )
    {
        super(message)
        this.message = message
        this.data = data
        this.statusCode = statusCode

    }
}