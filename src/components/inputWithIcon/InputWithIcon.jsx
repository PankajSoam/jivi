import React from 'react';
import { CgProfile } from "react-icons/cg";
const InputWithIcon = ({value,onChange,placeholder}) => {
  return (
    <div className="flex items-center p-4 bg-gray-100 rounded-lg">
      <CgProfile style={{ height: '24px', width: '24px' }} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-100 pl-2 outline-none text-gray-500"
      />
    </div>
  );
};

export default InputWithIcon;
