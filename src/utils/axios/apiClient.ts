import axios from "axios";
import { Project } from "../models/Project";
import axiosInstance from "./axiosConfig";
import { Task } from "../models/Task";
import { ProjectCategory } from "../models/ProjectCategory";
import { ProjectMember } from "../models/ProjectMember";
import { NewTask } from "../models/NewTask";

export const getProjects = async (): Promise<Project[]> => {
    try {
        const { data } = await axiosInstance.get("/api/v1/projects");
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getTasksForProject = async (projectId: number): Promise<Task[]> => {
    try {
        const { data } = await axiosInstance.get(`/api/v1/projects/${projectId}/tasks`);
        return data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
};

export const createTaskForProject = async (projectId: number, task: NewTask): Promise<Task> => {
  const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MiIsImlhdCI6MTcwMjc3MTAwMCwiZXhwIjoxNzAyODA3MDAwfQ.9nvrG6yaN4NXj6dWTkAxuFCBezud7skD_jMPxRkeNxljyMEuijqm_RcsUjkdlwlpucmrwiAeP9qbxZYSZDHYxg';

  if (!accessToken) {
    throw new Error('No access token available');
  }

  const { data } = await axiosInstance.post(`/api/v1/projects/${projectId}/tasks`, task, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  return data;
};

export const getProjectCategories = async (projectId: number): Promise<ProjectCategory[]> => {
    try {
        const { data } = await axiosInstance.get(`/api/v1/projects/${projectId}/categories`);
        return data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
};

export const getProjectMembers = async (projectId: number): Promise<ProjectMember[]> => {
    try {
        const { data } = await axiosInstance.get(`/api/v1/projects/${projectId}/members`);
        return data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
};
