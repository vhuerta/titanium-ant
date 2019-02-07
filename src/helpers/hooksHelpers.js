import { useState } from 'react';

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    return setValue(e.target.value);
  }

  return { value, onChange: handleChange };
}
