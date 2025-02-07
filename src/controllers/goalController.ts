import { Request, Response } from "express";
import Goal from "../models/goal";

export const allGoals = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const goals = await Goal.findAll({ where: { userId: userId } });
    res.status(200).json(goals);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching goals", error });
  }
};

export const getGoal = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const goalId = req.params.id;
    const goal = await Goal.findOne({ where: { id: goalId, userId: userId } });

    if (!goal) {
      res.status(404).json({ message: "Goal not found" });
      return;
    }

    res.status(200).json(goal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching goal", error });
  }
};

export const storeGoal = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const goal = await Goal.create({ ...req.body, userId: userId });
    res.status(201).json(goal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating goal", error });
  }
};

export const updateGoal = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const goalId = req.params.id;
    const goal = await Goal.findOne({ where: { id: goalId, userId: userId } });

    if (!goal) {
      res.status(404).json({ message: "Goal not found" });
      return;
    }

    await goal.update(req.body);
    res.status(200).json(goal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating goal", error });
  }
};

export const destroyGoal = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    const goalId = req.params.id;
    const goal = await Goal.findOne({ where: { id: goalId, userId: userId } });

    if (!goal) {
      res.status(404).json({ message: "Goal not found" });
      return;
    }

    await goal.destroy();
    res.status(200).json({ message: "Goal deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting goal", error });
  }
};
