import axios from "axios";
import { Project } from "../models/Project";
import axiosInstance from "./axiosConfig";
import { Task } from "../models/Task";

export const getProjects = async (): Promise<Project[]> => {
    const { data } = await axiosInstance.get("/projects");
    return data;
};

export const getTasksForProject = async (projectId: number): Promise<Task[]> => {
    const { data } = await axiosInstance.get(`/tasks?projectId=${projectId}`);
    return data;
};
