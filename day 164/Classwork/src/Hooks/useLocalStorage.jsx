import { useState } from "react";

const useLocalStorage = (key, initialValue, signedIn) => {
  const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
  });

  const handleStorage = (e, additionalData = {}) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = { ...additionalData, signedIn };

    for (let [key, value] of formData) {
      newItem[key] = value;
    }

    if (!newItem.id) {
      newItem.id = Date.now();
    }

    try {
      const existingData = JSON.parse(window.localStorage.getItem(key)) || [];
      const updatedData = [...existingData, newItem];

      setStoredValue(updatedData);
      window.localStorage.setItem(key, JSON.stringify(updatedData));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, handleStorage];
};

export default useLocalStorage;
