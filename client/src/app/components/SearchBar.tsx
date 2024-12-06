import React from "react";

interface SearchBarProps {
  search: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ search }: SearchBarProps) {
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full p-2 border border-gray-300 rounded"
        onChange={change}
      />
    </div>
  );
}
