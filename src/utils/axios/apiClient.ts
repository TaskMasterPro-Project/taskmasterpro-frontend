import axios from "axios";
import { Project } from "../models/Project";
import axiosInstance from "./axiosConfig";
import { Task } from "../models/Task";
import { ProjectCategory } from "../models/ProjectCategory";
import { ProjectMember } from "../models/ProjectMember";

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

export const getProjectCategories = async (projectId: number): Promise<ProjectCategory[]> => {
    try {
        const { data } = await axiosInstance.get(`/categories?projectId=${projectId}`);
        return data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
};

export const getProjectMembers = async (projectId: number): Promise<ProjectMember[]> => {
    try {
        const { data } = await axiosInstance.get(`/members?projectId=${projectId}`);
        return data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
};
