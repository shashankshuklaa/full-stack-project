const Task = require("../models/Task");

// 🔹 Create Task
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      user: req.user.id,
      title,
      description,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// 🔹 Get Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// 🔹 Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await task.deleteOne();
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// 🔹 Update Task (NEW)
exports.updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    task.title = title || task.title;
    task.description = description || task.description;

    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
