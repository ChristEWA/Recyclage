const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const User = require('./models/user'); // Assurez-vous que le chemin d'accès est correct

const app = express();

app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:6000//Databases', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log('Connexion à MongoDB échouée !', err));

const validateEmail = async (email) => {
  const user = await User.findOne({ email });
  return user ? false : true;
};

app.post('/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Vérification si l'email est déjà utilisé
    const isEmailValid = await validateEmail(email);
    if (!isEmailValid) {
      return res.status(400).send({ message: "Cet email est déjà associé à un compte." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword
    });
    await user.save();
    // Envoi d'un email de vérification de compte (à implémenter)
    res.status(201).send({ message: "Utilisateur créé !" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/users/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Utilisateur non trouvé.');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Mot de passe incorrect.');
    }

    req.session.userId = user._id;
    res.send('Connexion réussie.');
  } catch (error) {
    res.status(500).send('Erreur du serveur.');
  }
});

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

