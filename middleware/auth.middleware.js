require("dotenv").config();
const { UnauthenticatedError } = require("../errors/index");
const { json } = require("express");

const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    res.user = { userId: payload.userId, name: payload.name };
  } catch (error) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};
