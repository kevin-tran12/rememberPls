const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");

router.get(
  "",
  asyncHandler(async (req, res) => {
    const todos = await Todo.findAll({});

    return res.json({ todos });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = await Todo.findOne({
      where: { id: todoId },
    });
  })
);
