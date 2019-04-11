import { useState, useCallback } from 'react';

function useInputText(initValue = '') {
  const [value, setValue] = useState(initValue);
  const handleValueChange = e => {
    const value = e.currentTarget.value;
    setValue(value);
  };
  return [value, handleValueChange];
}

export default useInputText;