const User = require('../models/user'); 
async function handlegetallUser(req, res) {
     const allUsers = await User.find({});
       return res.json(users);
}

async function handlegetuserById(req, res) {
       const id = Number(req.params.id);
     if (isNaN(id)) {
          return res.status(400).json({ error: "Invalid user ID" });
     }

     const user = users.find(u => u.id === id);
     if (!user) {
          return res.status(404).json({ error: "User not found" });
     }

     return res.json(user);
}

async function handleUpdateUserById (req,res){
      return res.json({ status: "pending" });
}
  

module.exports = {
    handlegetallUser,
    handlegetuserById,
    handleUpdateUserById,
}

 