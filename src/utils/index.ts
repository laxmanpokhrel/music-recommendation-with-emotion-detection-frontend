/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
import { PieChartDataItem } from '@Schemas/interfaces';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * The function checks if an object contains binary data.
 * @param obj - The `obj` parameter is a JavaScript object that may contain binary data in the form of
 * `Blob`, `File`, or `ArrayBuffer` objects. The function `hasBinaryData` checks if the object or any
 * of its nested properties contain binary data and returns a boolean value indicating whether binary
 * data
 * @returns a boolean value indicating whether the input object contains binary data or not.
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
      }
      if (typeof value === 'object' && hasBinaryData(value)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * The function converts a JSON object to a FormData object in TypeScript.
 * @param obj - The `obj` parameter is a JavaScript object that contains key-value pairs. The function
 * `jsonToFormData` converts this object into a `FormData` object, which can be used to send data in an
 * HTTP request.
 * @returns a FormData object.
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
 * The function checks if two objects are equal by comparing their keys and values.
 * @param {any} obj1 - The first object to compare for equality.
 * @param {any} obj2 - The second object that is being compared for equality with the first object
 * (obj1).
 * @returns A boolean value indicating whether the two objects passed as arguments are equal or not.
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

export function convertToCurrencySystem(labelValue: number) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? `${(Math.abs(Number(labelValue)) / 1.0e9).toFixed(1)} b`
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? `${(Math.abs(Number(labelValue)) / 1.0e6).toFixed(1)} m`
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? `${(Math.abs(Number(labelValue)) / 1.0e3).toFixed(1)} k`
    : Math.abs(Number(labelValue));
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * This TypeScript function removes a specified key from an object and returns a new object without
 * that key.
 * @param {T} obj - The object from which a key needs to be removed.
 * @param {K} key - The `key` parameter is the property key of the object that needs to be removed. It
 * is of type `K`, which is a generic type that extends the keys of the input object `T`. This ensures
 * that the `key` parameter is a valid property key of the input object.
 * @returns a new object that is the same as the input object, but with the specified key removed. The
 * returned object has a type of `Omit<T, K>`, which means it has all the same properties as the input
 * object `T`, except for the property with key `K`.
 */
export function removeKeyFromObject<T, K extends keyof T>(obj: T, key: K): Omit<T, K> {
  const { [key]: omitted, ...rest } = obj;
  return rest;
}

/**
 * This TypeScript function assigns the value of zero to a specified key in an array of objects.
 * @param {Record<string, any>[]} arr - An array of objects with string keys and any values.
 * @param {string} key - The "key" parameter is a string representing the key in each object of the
 * "arr" array that should be assigned a value of zero.
 * @returns The function `assignZeroToKey` returns an array of objects where each object has the
 * specified `key` set to the value of `0`. If the `key` parameter is not provided or is falsy, the
 * original array is returned without any modifications.
 */
export function assignZeroToKey(arr: Record<string, any>[], key: string): Record<string, any>[] {
  if (!key) return arr;

  const value = arr.map((obj) => {
    return {
      ...obj,
      [key]: 0,
    };
  });
  return value;
}

/**
 * The function assigns the value of zero to specified keys in an array of objects.
 * @param {Record<string, any>[]} arr - An array of objects where each object has one or more keys that
 * need to be assigned a value of zero.
 * @param {string[]} keys - An array of strings representing the keys in the objects of the input array
 * that should be assigned a value of zero.
 * @returns an array of objects where the specified keys have been assigned the value of zero. If the
 * `keys` array is empty, the original `arr` is returned without any modifications.
 */
export function assignZeroToKeys(arr: Record<string, any>[], keys: string[]): Record<string, any>[] {
  if (!keys.length) return arr;

  return arr.map((obj) => {
    const newObj: Record<string, any> = { ...obj };
    keys.forEach((key) => {
      newObj[key] = 0;
    });
    return newObj;
  });
}

/**
 * This TypeScript function removes a string from an array if it exists, or adds it if it doesn't.
 * @param {string[]} arr - An array of strings that may or may not contain the target string.
 * @param {string} targetString - The string that we want to either remove or add to the array.
 * @returns an array of strings.
 */
export function removeOrAddStringFromArray(arr: string[], targetString: string): string[] {
  const index = arr.indexOf(targetString);

  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    arr.push(targetString);
  }
  return arr;
}

// Utility function to compare two objects for equality
function isEqual<T>(a: T, b: T): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

/**
 * This TypeScript function removes an object from an array if it exists, or adds it if it doesn't.
 * @param {T[]} arr - An array of objects of type T that may or may not contain the target object.
 * @param {T} targetObject - The object that we want to either remove or add to the array.
 * @returns an array of objects.
 */
export function removeOrAddObjectFromArray<T>(arr: T[], targetObject: T): T[] {
  const index = arr.findIndex((obj) => isEqual(obj, targetObject));

  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    arr.push(targetObject);
  }

  return arr;
}

/**
 * This TypeScript function returns the object with the highest value property from an array of
 * DataItem objects.
 * @param {DataItem[]} data - An array of objects of type `DataItem`. Each `DataItem` object has a
 * `value` property that is a number.
 * @returns a single `DataItem` object that has the maximum `value` property among all the objects in
 * the `data` array. If the `data` array is empty, the function returns `null`.
 */
export function getObjectWithMaxValue(data: PieChartDataItem[]): PieChartDataItem | null {
  if (data.length === 0) {
    return null;
  }

  let maxObject: PieChartDataItem = data[0];

  for (let i = 1; i < data.length; i++) {
    if (data[i].value > maxObject.value) {
      maxObject = data[i];
    }
  }

  return maxObject;
}

/**
 * This TypeScript function calculates the percentage of a value in relation to a total.
 * @param {number} total - The total number or quantity that the value is being compared to.
 * @param {number} value - The value parameter represents the numerical value that you want to
 * calculate the percentage of.
 * @returns The function `calculatePercentage` returns a number, which is the percentage calculated
 * based on the `total` and `value` parameters passed to the function. If the `total` parameter is 0,
 * the function returns 0.
 */
export function calculatePercentage(total: number, value: number): number {
  if (total === 0) {
    return 0;
  }
  return (value / total) * 100;
}

/**
 * This TypeScript function calculates the sum of a specified key in an array of objects.
 * @param {Record<string, any>[]} data - An array of objects where each object has one or more
 * key-value pairs.
 * @param {string} key - The `key` parameter is a string representing the key of the property in each
 * object of the `data` array that we want to sum up.
 * @returns the sum of the values of a given key in an array of objects. If the array is empty, it
 * returns 0.
 */
export function getSumOfKey(data: Record<string, any>[], key: string) {
  if (data.length === 0) {
    return 0;
  }
  const total = data
    .map((item: any) => item[key])
    .reduce((sum: number, item: any) => {
      const y = sum + +item;
      return y;
    });
  return total;
}

/**
 * This TypeScript function changes the 'value' property of objects in an array if their specified key-value pair
 * matches the provided values. The 'value' property of matching objects will be set to zero.
 * @param {Record<string, any>[]} arr - An array of objects where each object has key-value pairs.
 * @param {string} key - The key parameter is a string that represents the key or property name of
 * the object in the array that we want to check for a specific value.
 * @param {any[]} values - An array of values to be matched against the value of the specified key
 * in each object. Objects with matching key-value pairs will have their 'value' property set to zero.
 * @returns the modified array where the 'value' property of matching objects is set to zero.
 */
export function setZeroValueForObjectsWithKeyValues(
  arr: Record<string, any>[],
  key: string,
  values: string[],
): Record<string, any>[] {
  return arr.map((item) => {
    if (values.includes(item[key])) {
      return { ...item, value: 0 };
    }
    return item;
  });
}

// export function addPrefixToClass(value) {
//   if (typeof value === 'string' || value instanceof String) return addPrefix(value).join(' ');

//   const result = {};
//   for (const key in value) {
//     if (Object.prototype.hasOwnProperty.call(value, key)) {
//       result[key] = addPrefix(value[key]).join(' ');
//     }
//   }
//   return result;
// }

// function addPrefix(value) {
//   return value
//     .trim()
//     .split(' ')
//     .map((item) => {
//       if (item.includes(':')) {
//         const [prefix, suffix] = item.split(':');
//         return `${prefix}:${addPrefix(suffix)}`;
//       }
//       return `${item}`;
//     });
// }

// console.log('te/st: ', test('laxman'));

// const scenarios = ['bg-red-500', '!bg-red-500', 'focus:bg-red-400', 'focus:!bg-red-400'];

// for (const scenario of scenarios) {
//   const output = addPrefix(scenario);
//   console.log(`Input: ${scenario}`);
//   console.log(`Output: ${output}`);
//   console.log('------------');
// }

export function scrollToComponent(componentId: string) {
  const element = document.getElementById(componentId);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    element.focus();
    // setTimeout(() => {
    // }, 800);
    // element.focus();
  }
}

/**
 * The function converts an input object with nested keys in the format of "name[index].nestedKey" into
 * an output object with nested arrays and objects.
 * @param input - The input parameter is a JavaScript object with string keys and any values.
 * @returns an object with the converted input. The input is an object with string keys and any values.
 * The function converts any keys that match the pattern of "name[index].nestedKey" into nested objects
 * within an array. The function returns the converted object.
 */
export function convertObject(input: Record<string, any>): any {
  const output: Record<string, any> = {};
  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      const match = key.match(/^(.*?)\[(\d+)\]\.(.*)$/);
      if (match) {
        const name = match[1];
        const index = match[2];
        const nestedKey = match[3];

        if (!output[name]) {
          output[name] = [];
        }
        if (!output[name][index]) {
          output[name][index] = {};
        }

        output[name][index][nestedKey] = input[key];
      } else {
        output[key] = input[key];
      }
    }
  }
  return output;
}

/**
 * The IntersectionOfObjects function takes two objects as input and returns a new object that contains
 * only the properties that exist in both input objects.
 * @param obj1 - An object of type `Record<string, any>`, which means it can have any number of
 * properties of any type.
 * @param obj2 - The `obj2` parameter is a record object that contains key-value pairs.
 * @returns The function `IntersectionOfObjects` returns a new object that contains the intersection of
 * properties between `obj1` and `obj2`.
 */
export function IntersectionOfObjects(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
  const obj2Keys = Object.keys(obj2);
  if (!obj2Keys.length) return {};
  const intersectedObj = obj2Keys.reduce((acc: Record<string, any>, item: string) => {
    if (obj1[item]) acc[item] = obj1[item];
    return acc;
  }, {});
  return intersectedObj;
}
