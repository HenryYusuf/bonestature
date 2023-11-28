import { ReactNode } from "react";

type CardComponentProps = {
  children: ReactNode;
};

const Card = ({ children }: CardComponentProps) => {
  return (
    <div className="card card-compact w-full bg-neutral shadow-xl mb-2">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
