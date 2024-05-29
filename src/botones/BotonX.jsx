import { useState } from 'react';

const BotonX = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <section className="flex justify-center items-center">
      <a
        href="/"
        className={`group flex justify-center p-2 rounded-md drop-shadow-xl bg-lightred text-white font-semibold transition-all duration-500 ${
          hovered
            ? 'hover:translate-y-3 hover:rounded-[50%] hover:from-[#331029] hover:to-[#310413]'
            : ''
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          strokeWidth="0"
          fill="currentColor"
          stroke="currentColor"
        >
          <path
            d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"
          ></path>
        </svg>
        <span
          className={`absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700 ${
            hovered ? 'opacity-100' : ''
          }`}
        >
          x
        </span>
      </a>
    </section>
  );
};

export default BotonX;
