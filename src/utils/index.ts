export function hasBinaryData(obj: Record<string, any>): boolean {
  if (typeof obj !== "object") {
    return false;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (
        value instanceof Blob ||
        value instanceof File ||
        value instanceof ArrayBuffer
      ) {
        return true;
      } else if (typeof value === "object" && hasBinaryData(value)) {
        return true;
      }
    }
  }

  return false;
}

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
