const express = require('express');
const { handlegetallUser, handlegetuserById , handleUpdateUserById} = require('../controllers/user');

const router = express.Router();

// ROUTES

// Route 1 - Render HTML List of Users
// router.get("/users", (req, res) => {
//   const html = `
//     <ul>
//       ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
//     </ul>
//   `;
//   res.send(html);
// });

// REST APIs

// GET all users
router.get("/",handlegetallUser); 

// GET user by ID
router.get("/:id", handlegetuserById);
    

// POST - Create new user (still writes to JSON file)
router.post("/", handleUpdateUserById); 



// PATCH user - Placeholder
router.patch("/api/users/:id", (req, res) => {
    
});

// DELETE user - Placeholder
router.delete("/api/users/:id", (req, res) => {
     return res.json({ status: "pending" });
});

module.exports = router;
