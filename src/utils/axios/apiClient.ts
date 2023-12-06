import axios from "axios";
import { Project } from "../models/Project";
import axiosInstance from "./axiosConfig";
import { Task } from "../models/Task";

export const getProjects = async (): Promise<Project[]> => {
    try {
        const { data } = await axiosInstance.get("/projects");
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getTasksForProject = async (projectId: number): Promise<Task[]> => {
    try {
        const { data } = await axiosInstance.get(`/tasks?projectId=${projectId}`);
        return data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
};
