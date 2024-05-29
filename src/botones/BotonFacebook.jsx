import { useState } from 'react';

const BotonFacebook = () => {
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
          height="1.1em"
          viewBox="0 0 448 512"
          strokeWidth="0"
          fill="currentColor"
          stroke="currentColor"
          className="w-5"
        >
          <path
            d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
          ></path>
        </svg>
        <span
          className={`absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700 ${
            hovered ? 'opacity-100' : ''
          }`}
        >
          Facebook
        </span>
      </a>
    </section>
  );
};

export default BotonFacebook;
