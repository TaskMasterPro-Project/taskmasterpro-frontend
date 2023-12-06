import axios from "axios";
import { Project } from "../models/Project";
import axiosInstance from "./axiosConfig";
import { Task } from "../models/Task";

export const getProjects = async (): Promise<Project[]> => {
    const { data } = await axiosInstance.get("/projects");
    return data;
};

export const getUpcomingTasks = async (): Promise<Task[]> => {
    const { data } = await axiosInstance.get("/tasks");
    return data;
};
