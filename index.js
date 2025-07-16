const express = require('express');   
const users = require('./MOCK_DATA.json'); // ✅ Removed extra space
const app = express(); 
const port = 3000;

// Middleware (optional, for JSON parsing if POST/PUT are added later)
app.use(express.json());

// Routes 
app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
    </ul>
  `;
  res.send(html);
});
// REST APIS   

app.get("/api/users", (req, res) => {
  return res.json(users);
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  // If ID is not a valid number
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json(user);
});

app.post("/api/users", (req, res) => {
  // TODO : CREATE NEW USER 
    return  res.json({status :"pending"}); 
});
app.patch("/api/users/:id", (req, res) => {
  // TODO : EDIT THE USER WITH ID
    return  res.json({status :"pending"}); 
});
app.delete("/api/users/:id", (req, res) => {
  // TODO : DELETE  THE USER WITH ID
    return  res.json({status :"pending"}); 
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
