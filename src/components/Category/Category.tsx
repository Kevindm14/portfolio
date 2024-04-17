import { ReactNode } from "react";

export const Category = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-neutrals-700 flex flex-col items-center justify-center rounded-lg p-10">
      {children}
    </div>
  );
}

export default Category;