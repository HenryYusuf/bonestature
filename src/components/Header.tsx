interface PropsHeader {
  onCollapsed: () => void;
}

const Header = ({ onCollapsed }: PropsHeader) => {
  return (
    <header className="bg-base-300 p-3 sticky top-0 z-40 shadow-lg">
      <button onClick={onCollapsed}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
