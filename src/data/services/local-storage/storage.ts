'use client';

import { CustomStorage } from '@/data/models/storage';

const storage = globalThis?.localStorage;

/**
 * Adapter class to interact with local storage, providing
 * methods to set and get values.
 */
export class LocalStorageAdapter implements CustomStorage {
  /**
   * Sets a value in local storage for a given key. If the value is falsy,
   * the key will be removed from storage.
   *
   * @param {string} key - The key for the storage entry.
   * @param {unknown} value - The value to store. If falsy, the key is deleted.
   * @returns {void}
   */
  set(key: string, value: string): void {
    if (value) {
      storage.setItem(key, value);
    } else {
      storage.removeItem(key);
    }
  }

  /**
   * Retrieves a value from local storage for a given key.
   *
   * @param {string} key - The key for the storage entry.
   * @returns {unknown} - The value associated with the key, or `null` if not found.
   */
  get(key: string) {
    return storage.getItem(key);
  }
}
