
const login = (req, res) => {
    return res.status(200).json({message: 'login'})
}

const register = (req, res) => {
    return res.status(200).json({message: 'register'})
}

module.exports ={
    register,
    login
} 