import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 *
 * @param obj
 * @returns
 */
export function hasBinaryData(obj: Record<string, any>): boolean {
  if (typeof obj !== 'object') {
    return false;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value instanceof Blob || value instanceof File || value instanceof ArrayBuffer) {
        return true;
      } else if (typeof value === 'object' && hasBinaryData(value)) {
        return true;
      }
    }
  }

  return false;
}

/**
 *
 * @param obj
 * @returns
 */
export function jsonToFormData(obj: Record<string, any>): FormData {
  const formData = new FormData();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          formData.append(key, value[i]);
        }
      } else {
        formData.append(key, value);
      }
    }
  }
  return formData;
}

/**
 *
 * @param obj1
 * @param obj2
 * @returns
 */

export function objectsEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) {
    return true;
  }

  if (obj1 == null || obj2 == null) {
    return false;
  }

  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (value1 !== value2) {
      return false;
    }
  }

  return true;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
