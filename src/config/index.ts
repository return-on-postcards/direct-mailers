import axios from 'axios';
import axiosRetry from 'axios-retry';

export const isAxiosError = axios.isAxiosError;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DIRECT_MAILERS_AUTH: string;
    }
  }
}

export const client = axios.create({
  baseURL: 'https://print.directmailers.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: process.env.DIRECT_MAILERS_AUTH,
  },
});

axiosRetry(client, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export enum Path {
  account = '/account/',
  autofund = '/autofund/',
  fund = '/fund/',
  letter = '/letter/',
  paymentmethod = '/paymentmethod/',
  postcard = '/postcard/',
  skus = '/skus/',
  template = '/template/',
  verifyaddress = '/verifyaddress/',
}
