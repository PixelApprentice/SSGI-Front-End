/**
 * API Client Configuration for FastAPI Backend
 * 
 * This utility provides a centralized way to make requests to the FastAPI backend.
 * It handles base URL configuration, headers, and error handling.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

export async function fetchApi<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { params, ...customConfig } = options;
  let url = `${API_BASE_URL}${endpoint}`;

  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });
    url += `?${searchParams.toString()}`;
  }

  const config: RequestInit = {
    ...customConfig,
    headers: {
      'Content-Type': 'application/json',
      ...customConfig.headers,
    },
  };

  // Example: Inject Authorization token if present (e.g., from localStorage or cookies)
  // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  // if (token) {
  //   config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
  // }

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(response.status, errorData.detail || 'An API error occurred');
    }
    // Handle 204 No Content
    if (response.status === 204) {
      return {} as T;
    }
    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new Error(error instanceof Error ? error.message : 'Network error');
  }
}

// Example usage to swap out mock data later:
// export const getRequests = () => fetchApi('/requests');
// export const createRequest = (data: any) => fetchApi('/requests', { method: 'POST', body: JSON.stringify(data) });
