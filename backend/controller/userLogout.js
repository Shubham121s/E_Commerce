async function userLogout(req, res) {
    try {
        // Clear the token cookie
        res.clearCookie("token");

        // Send a JSON response indicating success
        res.json({
            message: "Logged out successfully",
            error: false,
            success: true,
            data: []
        });
    } catch (err) {
        // Handle any errors and send a JSON response
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userLogout;
