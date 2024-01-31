import Subtitle from "../Typography/Subtitle";

interface Props {
  title: string;
  children: React.ReactNode;
  topMargin?: string;
  TopSideButtons?: React.ReactNode;
}

const TitleCard = ({ title, children, topMargin, TopSideButtons }: Props) => {
  return (
    <div
      className={
        "card w-full p-6 bg-base-100 shadow-xl " + (topMargin || "mt-6")
      }
    >
      {/* Title for Card */}
      <Subtitle
        styleClass={
          TopSideButtons
            ? "flex flex-col items-start gap-2 lg:inline-block"
            : ""
        }
      >
        {title}

        {/* Top side button, show only if present */}
        {TopSideButtons && (
          <div className="inline-block float-right">{TopSideButtons}</div>
        )}
      </Subtitle>

      <div className="divider mt-2"></div>

      {/** Card Body */}
      <div className="h-full w-full pb-6 bg-base-100">{children}</div>
    </div>
  );
};

export default TitleCard;
