const express = require('express');   
const fa =  require("fs"); // ✅ Corrected the import statement 
const users = require('./MOCK_DATA.json'); // ✅ Removed extra space
const app = express(); 
const port = 3000;
// Middleware for parsing URL-encoded data

app.use(express.urlencoded({extended:false}));

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
    const body = req.body;
    // console.log("body", body);
    users.push(body); // ✅ Corrected the push method to add the user to the users array 
    fa.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        console.log("Data written to file successfully");
    });
    // TODO : ADD THE USER TO THE USERS ARRAY)
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
