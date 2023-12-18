import axios from "axios";
import { Project } from "../models/Project";
import axiosInstance from "./axiosConfig";
import { Task } from "../models/Task";
import { ProjectCategory } from "../models/ProjectCategory";
import { ProjectMember } from "../models/ProjectMember";
import { NewTask } from "../models/NewTask";
import { Comment } from "../models/Comment";
import { NewComment } from "../models/NewComment";

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
  const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MiIsImlhdCI6MTcwMjg5MTUzMCwiZXhwIjoxNzAyOTI3NTMwfQ.XSha9e8AKUj8OIXPx_EPQce5mnGk38_cRkLe5t6mkRODwwCn3uHwXEVYnV4uzpzIpbiidUDvn3d9aMkMux3xkQ';

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

export const editTaskForProject = async (projectId: number, task: NewTask, taskId: number): Promise<Task> => {
  const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MiIsImlhdCI6MTcwMjg5MTUzMCwiZXhwIjoxNzAyOTI3NTMwfQ.XSha9e8AKUj8OIXPx_EPQce5mnGk38_cRkLe5t6mkRODwwCn3uHwXEVYnV4uzpzIpbiidUDvn3d9aMkMux3xkQ';

  if (!accessToken) {
    throw new Error('No access token available');
  }
  
  const { data } = await axiosInstance.put(`/api/v1/projects/${projectId}/tasks/${taskId}`, task, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  return data;
}

export const deleteTaskForProject = async (projectId: number, taskId: number): Promise<void> => {
  const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MiIsImlhdCI6MTcwMjg5MTUzMCwiZXhwIjoxNzAyOTI3NTMwfQ.XSha9e8AKUj8OIXPx_EPQce5mnGk38_cRkLe5t6mkRODwwCn3uHwXEVYnV4uzpzIpbiidUDvn3d9aMkMux3xkQ';

  if (!accessToken) {
    throw new Error('No access token available');
  }

  await axiosInstance.delete(`/api/v1/projects/${projectId}/tasks/${taskId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
};

export const getCommentsForTask = async (projectId: number, taskId: number): Promise<Comment[]> => {
  try {
    const { data } = await axiosInstance.get(`/api/v1/projects/${projectId}/tasks/${taskId}/comments`);
    return data;
}
  catch (error) {
    console.error(error);
    return [];
  }
}

export const createComment = async (projectId: number, taskId: number, commentText: NewComment): Promise<string> => {
  const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MiIsImlhdCI6MTcwMjg5MTUzMCwiZXhwIjoxNzAyOTI3NTMwfQ.XSha9e8AKUj8OIXPx_EPQce5mnGk38_cRkLe5t6mkRODwwCn3uHwXEVYnV4uzpzIpbiidUDvn3d9aMkMux3xkQ';

  if (!accessToken) {
    throw new Error('No access token available');
  }
  try{
    const { data } = await axiosInstance.post(`/api/v1/projects/${projectId}/tasks/${taskId}/comments`, commentText, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
    return data;
  }
  catch (error){
    console.error(error)
    return '';
  }
};

export const editComment = async (projectId: number, taskId: number, commentId: number, commentText: NewComment): Promise<string> => {
  const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MiIsImlhdCI6MTcwMjg5MTUzMCwiZXhwIjoxNzAyOTI3NTMwfQ.XSha9e8AKUj8OIXPx_EPQce5mnGk38_cRkLe5t6mkRODwwCn3uHwXEVYnV4uzpzIpbiidUDvn3d9aMkMux3xkQ';

  if (!accessToken) {
    throw new Error('No access token available');
  }
  try{
    const { data } = await axiosInstance.put(`/api/v1/projects/${projectId}/tasks/${taskId}/comments/${commentId}`, commentText, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
    return data;
  }
  catch (error){
    console.error(error)
    return '';
  }
}

export const deleteComment = async (projectId: number, taskId: number, commentId: number): Promise<void> => {
  const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MiIsImlhdCI6MTcwMjg5MTUzMCwiZXhwIjoxNzAyOTI3NTMwfQ.XSha9e8AKUj8OIXPx_EPQce5mnGk38_cRkLe5t6mkRODwwCn3uHwXEVYnV4uzpzIpbiidUDvn3d9aMkMux3xkQ';

  if (!accessToken) {
    throw new Error('No access token available');
  }

  try{
    await axiosInstance.delete(`/api/v1/projects/${projectId}/tasks/${taskId}/comments/${commentId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
  }
  catch(error){
    console.error(error);
  }
}

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
