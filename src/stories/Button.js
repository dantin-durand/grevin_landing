import React from "react";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }) => {
  return (
    <button type="button" className="bg-red-500 font-medium" {...props}>
      {label}
    </button>
  );
};

// fait un composant qui affiche hello world
export const HelloWorld = () => {
  return <div>Hello World</div>;
};
