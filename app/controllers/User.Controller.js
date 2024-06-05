const bcrypt = require('bcrypt');
const { Keypair } = require('@solana/web3.js');
const saltRounds = 10;

module.exports = function (app) {
    const User = app.models.User; // Adjusted assuming Sequelize model is already attached to app.models
    var Controller = {
        name: "User",
    };

    // Create a new user
    // POST @/api/users
    Controller.createUser = function (req, res) {
        bcrypt.hash(req.body.password, saltRounds, function(err, hashedPassword) {
            if (err) {
                return res.status(500).send({ error: "Error hashing password", message: err.message });
            }
            
            const wallet = Keypair.generate();
            const publicKey = wallet.publicKey.toString();
            const secretKey = [...wallet.secretKey]; 

            const userData = {
                ...req.body,
                role_id: 1,
                email_verified: true,
                issuer_verified: true,
                investor_verified: true,
                tester_verified: true,
                status: 'Active',
                password: hashedPassword,
                public_key: publicKey,
                secret_key: secretKey
            };
            User.create(userData)
                .then((result) => {
                    res.status(201).send({ message: "Account created", userData: result });
                })
                .catch((err) => {
                    res.status(500).send({ error: "Server Error", message: err.message });
                });
        });
    };

    // Retrieve a single user by id
    // GET @/api/users/:id
    Controller.getUser = function (req, res) {
        User.findByPk(req.params.id)
            .then((user) => {
                if (!user) {
                    return res.status(404).send({ message: "User not found" });
                }
                res.status(200).send(user);
            })
            .catch((err) => {
                res.status(500).send({ error: "Server Error", message: err.message });
            });
    };

    // Retrieve all users
    // GET @/api/users
    Controller.getAllUsers = function (req, res) {
        User.findAll()
            .then((users) => {
                res.status(200).send(users);
            })
            .catch((err) => {
                res.status(500).send({ error: "Server Error", message: err.message });
            });
    };

    // Update a user
    // PATCH @/api/users/:id
    Controller.updateUser = function (req, res) {
        User.update(req.body, { 
            where: { id: req.params.id }, 
            returning: true, 
            plain: true 
        })
        .then(result => {
            const rowsUpdate = result[0];
            const updatedUser = result[1];
            
            if (rowsUpdate === 0) {
                return res.status(404).send({ message: "User not found" });
            }
    
            res.status(200).send({ message: "User updated", user: updatedUser });
        })
        .catch((err) => {
            res.status(500).send({ error: "Server Error", message: err.message });
        });
    };    

    // Delete a user
    // DELETE @/api/users/:id
    Controller.deleteUser = function (req, res) {
        User.destroy({ where: { id: req.params.id } })
            .then(deleted => {
                if (!deleted) {
                    return res.status(404).send({ message: "User not found" });
                }
                res.status(200).send({ message: "User deleted" });
            })
            .catch((err) => {
                res.status(500).send({ error: "Server Error", message: err.message });
            });
    };

    // Delete all users
    // DELETE @/api/users
    Controller.deleteAllUsers = function (req, res) {
        User.destroy({ where: {} })
            .then(() => {
                res.status(200).send({ message: "All users deleted" });
            })
            .catch((err) => {
                res.status(500).send({ error: "Server Error", message: err.message });
            });
    };

    return Controller;
};
