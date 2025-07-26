const express = require('express');
const connectMongoDb = require('./connection');
// const users = require('./MOCK_DATA.json');
const userRoutes = require('./routes/user');
const { logReqRes } = require('./middlewears')
const app = express();
const port = 3000;


const { } = require('./connection');
const { connect } = require('http2');

/// Connect to MongoDB
connectMongoDb('mongodb://localhost:27017/mydatabase')

// Model
const User = mongoose.model('User', userSchema);

// Middleware
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(logReqRes)('logs.txt');
// app.use((req, res, next) => {
//   console.log('📥 Request received:', req.method, req.url);
//   next();
// });
// Routes
app.use('/api/users', userRoutes);
// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
