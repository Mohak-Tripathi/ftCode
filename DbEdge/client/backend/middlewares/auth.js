const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("./catchAsyncErrors");

// Checks if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {

    let token


    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {

        try {

            token = req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, "dbEdgeProject@fTIoTDev")

            next()
        }
        catch (error) {

            res.status(401)
            throw new Error("Token failed, bad token ")


        }

    }

    if (!token) {

        res.status(401)

        throw new Error("Not authorized, no Token ")
    }


})



