import React from "react";
import styled, { keyframes, css } from "styled-components";

{/* Imagenes */}
import casa from '../assets/casas/amarillaMty.png';
import casa1 from '../assets/casas/anton.png';
import casa2 from '../assets/casas/bambu.jpg';
import casa3 from '../assets/casas/construye.png';
import casa4 from '../assets/casas/cuernos.jpg';
import casa6 from '../assets/casas/diamante.png';
import casa7 from '../assets/casas/dosseguidas.png';
import casa8 from '../assets/casas/esquinaAzul.png';
import casa9 from '../assets/casas/esquinaCafe.png';
import casa10 from '../assets/casas/gris.png';
import casa11 from '../assets/casas/GrisMade.png';
import casa12 from '../assets/casas/guadalupe.png';
import casa13 from '../assets/casas/IMG_4609.png';
import casa14 from '../assets/casas/IMG_4610.png';
import casa15 from '../assets/casas/IMG_4644.jpeg';
import casa16 from '../assets/casas/IMG_4652.jpeg';
import casa17 from '../assets/casas/lomasMar.png';
import casa18 from '../assets/casas/marianaLomas.jpg';
import casa19 from '../assets/casas/Marina IV.png';
import casa20 from '../assets/casas/Modern.png';
import casa21 from '../assets/casas/palmas.jpg';
import casa22 from '../assets/casas/pelos.jpg';
import casa23 from '../assets/casas/piso 1.png';
import casa24 from '../assets/casas/piso 2.1.png';
import casa25 from '../assets/casas/piso 3.1.png';
import casa26 from '../assets/casas/primerCluser.png';
import casa27 from '../assets/casas/rioja1.png';
import casa28 from '../assets/casas/riojaseguidas.png';
import casa29 from '../assets/casas/rojosaro.png';
import casa30 from '../assets/casas/santos.png';
import casa31 from '../assets/casas/SARO.png';
import casa32 from '../assets/casas/vicente.jpg';
import casa33 from '../assets/casas/viejitos.png';


function Carousel() {
  const row1 = [
    casa, casa2, casa3, casa4
  ];

  const row2 = [
   casa6, casa7, casa8, casa9
  ];

  const row3 = [
    casa10, casa11, casa12, casa13
  ]

  const row4 = [
    casa14, casa15, casa16, casa17
  ]
  const row5 = [
    casa18, casa19, casa20, casa21
  ]
  const row6 = [
    casa22, casa23, casa24, casa25
  ]
  const row7 = [
    casa26, casa27, casa28, casa29
  ]
  const row8 = [
    casa30, casa31, casa32, casa33
  ]

  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>

        <Marquee>
          <MarqueeG2>
            {row2.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeG2>
          <MarqueeG2>
            {row2.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeG2>
        </Marquee>

        <Marquee>
          <MarqueeGroup>
            {row3.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row3.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>

        <Marquee>
          <MarqueeG2>
            {row4.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeG2>
          <MarqueeG2>
            {row4.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeG2>
        </Marquee>

        <Marquee>
          <MarqueeGroup>
            {row5.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row5.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>

        <Marquee>
          <MarqueeG2>
            {row6.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeG2>
          <MarqueeG2>
            {row6.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeG2>
        </Marquee>

        <Marquee>
          <MarqueeGroup>
            {row7.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row7.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        
        <Marquee>
          <MarqueeG2>
            {row8.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeG2>
          <MarqueeG2>
            {row8.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeG2>
        </Marquee>

      </Wrapper>
    </AppContainer>
  );
}

export default Carousel;

const AppContainer = styled.div`
  width: 100vw;
  height: auto;
  color: #000000;
  background-color: black; /* Cambia el fondo a blanco */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 10s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeG2 = styled.div `
    ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`

/* const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`; */

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
