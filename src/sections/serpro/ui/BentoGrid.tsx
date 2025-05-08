import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "../../../lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "../../../data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = [""];
  const rightLists = [""];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  console.log(img);
  console.log(id);
  console.log(imgClassName);
  console.log(titleClassName);
  console.log("Verificando className");
  console.log(className);

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}>
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && id === 1 && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "w-full lg:h-512 xs:h-330 object-center")}
            />
          )}

          {img && id === 2 && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "w-full h-60 object-fill")}
            />
          )}

          {img && id === 3 && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "h-60 w-full object-fill")}
            />
          )}

          {img && id !== 1 && id !== 2 && id !== 3 && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-fill object-center")}
            />
          )}
        </div>

        {/* <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
          className={`absolute right-0 -bottom-5`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>  */}

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col lg:pt-1",
          )}>
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          {/* <div className="font-sans md:max-w-96 md:text-xs lg:text-base text-sm text-p3 z-10">
            {description}
          </div> */}
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}

          {id === 1 && (
            <>
              <h1 className="font-normal lg:text-2xl md:text-xl text-base">
                {description}
              </h1>
              <p
                className="font-normal lg:text-2xl md:text-xl text-base"
                style={{
                  color: "#fff",
                  margin: "2vh 0",
                }}>
                {title}
              </p>
            </>
          )}

          {id === 2 && (
            <>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm xs:pt-60"
                style={{
                  color: "#fff",
                  margin: "1vh 0",
                }}>
                {title}
              </p>
            </>
          )}

          {id === 3 && (
            <>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                {description}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm pt-24 xs:pt-60"
                style={{
                  color: "#fff",
                  margin: "1vh 0",
                }}>
                {title}
              </p>
            </>
          )}

          {id === 4 && (
            <>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-3xl xs:text-xl">
            {title}
            </div>
              {/* <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                {description}
              </h1>
              <p
                className="font-sans lg:text-3xl max-w-96 font-bold"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
               >
                {title}
              </p> */}
            </>
          )}

          {id === 5 && (
            <>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                {description}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm pt-28 xs:pt-36"
                style={{
                  color: "#fff",
                  margin: "2vh 0",
                }}>
                {title}
              </p>
            </>
          )}

          {id !== 1 && id !== 2 && id !== 3 && id !== 4 && id !== 5 && (
            <>
              <div className="font-sans top-0 md:max-w-96 md:text-xs lg:text-base text-xl text-p3 font-bold z-10">
                {description}
              </div>
              <div className="font-sans top-0 text-lg lg:text-3xl max-w-96 font-bold  z-10">
                {title}
              </div>
            </>
          )}

          {/* for the github 3d globe */}
          {/* {id === 2 && <GridGlobe />} */}

          {/* Tech stack list div */}
          {/* {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2"> */}
          {/* tech stack lists */}
          {/* <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div> */}
          {/* <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
              </div> */}
          {/* </div>
          )} */}
          {id === 6 && (
            <div className="mt-3 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}>
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Saiba mais!"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
