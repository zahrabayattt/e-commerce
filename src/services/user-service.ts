import { axiosInstance } from '@/lib/utils';
import type { UserUpdatePayload } from '@/types/UserUpdatePayload';

/**
 * Updates the user's profile information.
 * @param data - The user data to update.
 * @returns The response from the API.
 */
export const updateUser = async (data: UserUpdatePayload) => {
  const response = await axiosInstance.patch('/users/update-me', data);
  return response.data;
};