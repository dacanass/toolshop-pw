import { expect, APIRequestContext } from '@playwright/test';
import { CONFIG } from '@/config/env.js';

export async function registerUser(request: APIRequestContext, user: Record<string, unknown>) {
  const apiUrl = CONFIG.API_URL || 'https://api.practicesoftwaretesting.com';
  const response = await request.post(`${apiUrl}/users/register`, {
    data: user,
  });

  expect(response.status()).toBe(201);
  return user;
}
