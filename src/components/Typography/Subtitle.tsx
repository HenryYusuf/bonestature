import { ReactNode } from "react";

interface Props {
  styleClass?: string;
  children: ReactNode;
}

const Subtitle = ({ styleClass, children }: Props) => {
  return (
    <div className={`text-xl font-semibold ${styleClass}`}>{children}</div>
  );
};

export default Subtitle;
