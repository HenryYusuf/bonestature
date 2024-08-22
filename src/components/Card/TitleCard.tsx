import Subtitle from "../Typography/Subtitle";

interface Props {
  title: string;
  children: React.ReactNode;
  topMargin?: string;
  TopSideButtons?: React.ReactNode;
  CloseButton?: React.ReactNode;
}

const TitleCard = ({
  title,
  children,
  topMargin,
  TopSideButtons,
  CloseButton,
}: Props) => {
  return (
    <div
      className={
        "card border w-full p-6 bg-base-100 shadow-xl " + (topMargin || "mt-6")
      }
    >
      {/* Title for Card */}
      <Subtitle
        styleClass={TopSideButtons ? "flex flex-row justify-between gap-2" : ""}
      >
        {title}

        {/* Top side button, show only if present */}
        {TopSideButtons && (
          <div className="self-center grow">{TopSideButtons}</div>
        )}

        {/* Close Button */}
        {CloseButton && (
          <div className="self-center mt-2 lg:mt-0 flex-none">
            {CloseButton}
          </div>
        )}
      </Subtitle>

      <div className="divider mt-2"></div>

      {/** Card Body */}
      <div className="h-full w-full pb-6 bg-base-100">{children}</div>
    </div>
  );
};

export default TitleCard;
