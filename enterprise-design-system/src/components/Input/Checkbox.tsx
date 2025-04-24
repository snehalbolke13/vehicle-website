import React from "react";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => (
  <label className="inline-flex items-center space-x-2">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
    />
    <span className="text-sm text-gray-700">{label}</span>
  </label>
);

export default Checkbox;
