import { makeLocalStorageAdapter } from './storage.factory';

export const localStorage = {
  setItem: (key: string, value: any): Promise<boolean> => {
    makeLocalStorageAdapter().set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string): Promise<any> => {
    return Promise.resolve(makeLocalStorageAdapter().get(key));
  },
  removeItem: (key: string): Promise<void> => {
    makeLocalStorageAdapter().set(key, '');
    return Promise.resolve();
  },
};
