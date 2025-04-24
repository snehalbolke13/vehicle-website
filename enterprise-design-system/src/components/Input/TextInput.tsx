import React from "react";

type TextInputProps = {
  label: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
};

const TextInput = ({ label, placeholder, error, disabled }: TextInputProps) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium text-sm text-gray-700">{label}</label>
    <input
      className={`w-full p-2 border rounded ${error ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
      type="text"
      placeholder={placeholder}
      disabled={disabled}
      aria-invalid={!!error}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default TextInput;
