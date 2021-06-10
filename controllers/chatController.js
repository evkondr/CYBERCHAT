
const getChat = (req, res) => {
    res.status(200).json({message: res.user})
}

module.exports = {
    getChat
}