import React from "react";

const HeroBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-[100vh]  relative w-full overflow-hidden bg-black  ">
      <div className=" z-[10] absolute w-full   ">{children}</div>
      <div className="pointer-events-none absolute inset-0 z-0 h-[100vh]  w-full  ">
        <div className="pointer-events-none absolute inset-0 h-[100vh]   w-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent,white)]" />
        <div className="flex  ">
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4h6cv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4h6cv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="395.88888700236566"
                    y1="0"
                    x2="595.2037015027599"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R116cv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R116cv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="268.5129364312161"
                  x2="2"
                  y2="446.59842583641876"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4i6cv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4i6cv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="398.3577254170086"
                    y1="0"
                    x2="598.0840129865101"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R126cv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R126cv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-60.27299957931973"
                  x2="2"
                  y2="63.01483382412698"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4j6cv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4j6cv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="398.60766940400936"
                    y1="0"
                    x2="598.3756143046776"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R136cv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R136cv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-144.76273505133577"
                  x2="2"
                  y2="-35.556524226558395"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4k6cv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4k6cv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="9.219098003813997"
                    y1="0"
                    x2="144.08894767111633"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R146cv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R146cv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="211.59688529442064"
                  x2="2"
                  y2="380.1963661768241"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4l6cv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4l6cv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="347.672826674534"
                    y1="0"
                    x2="538.9516311202897"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R156cv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R156cv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="77.3872455873061"
                  x2="2"
                  y2="223.61845318519045"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4m6cv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4m6cv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="341.2398727319669"
                    y1="0"
                    x2="531.4465181872947"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R166cv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R166cv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-98.0483035731595"
                  x2="2"
                  y2="18.943645831313916"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4n6cv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4n6cv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="-79.84316290239803"
                    y1="0"
                    x2="40.18297661386896"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R176cv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R176cv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="373.3470716222655"
                  x2="2"
                  y2="568.9049168926431"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4o6cv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4o6cv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="377.120943198679"
                    y1="0"
                    x2="573.3077670651255"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R186cv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R186cv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="62.07771952613257"
                  x2="2"
                  y2="205.75733944715466"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4p6cv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4p6cv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="342.3333832237404"
                    y1="0"
                    x2="532.7222804276971"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R196cv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R196cv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="36.489879252621904"
                  x2="2"
                  y2="175.9048591280589"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4q6cv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4q6cv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="-145.82852491294034"
                    y1="0"
                    x2="-36.79994573176373"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R1a6cv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R1a6cv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="209.53802811563946"
                  x2="2"
                  y2="377.7943661349127"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4hacv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4hacv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="298.0483035731595"
                    y1="0"
                    x2="481.0563541686861"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R11acv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R11acv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="364.5967186370399"
                  x2="2"
                  y2="558.6961717432132"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4iacv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4iacv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="312.59437330882065"
                    y1="0"
                    x2="498.02676886029076"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R12acv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R12acv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="360.97927418886684"
                  x2="2"
                  y2="554.4758198870113"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4jacv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4jacv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="-71.46906073321588"
                    y1="0"
                    x2="49.9527624779148"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R13acv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R13acv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="140.53884933819063"
                  x2="2"
                  y2="297.29532422788907"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4kacv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4kacv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="-90.82259373390116"
                    y1="0"
                    x2="27.373640643781982"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R14acv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R14acv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="247.62493180460297"
                  x2="2"
                  y2="422.2290871053701"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4lacv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4lacv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="-56.09428302268498"
                    y1="0"
                    x2="67.89000314020086"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R15acv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R15acv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="394.6757960191462"
                  x2="2"
                  y2="593.7884286890039"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4macv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4macv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="78.264013963053"
                    y1="0"
                    x2="224.64134962356184"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R16acv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R16acv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="346.6221979993861"
                  x2="2"
                  y2="537.7258976659505"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4nacv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4nacv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="371.3637229928281"
                    y1="0"
                    x2="566.5910101582995"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R17acv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R17acv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="395.38745452300645"
                  x2="2"
                  y2="594.6186969435075"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4oacv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4oacv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="351.02675005909987"
                    y1="0"
                    x2="542.8645417356165"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R18acv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R18acv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="182.75004448951222"
                  x2="2"
                  y2="346.5417185710976"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4pacv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4pacv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="391.80316874408163"
                    y1="0"
                    x2="590.4370302014286"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R19acv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R19acv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="272.9388516221661"
                  x2="2"
                  y2="451.7619935591938"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4qacv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4qacv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="307.72879638825543"
                    y1="0"
                    x2="492.35026245296467"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R1aacv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R1aacv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-147.9341207363177"
                  x2="2"
                  y2="-39.25647419237066"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4hecv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4hecv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="-43.33652840577997"
                    y1="0"
                    x2="82.7740501932567"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R11ecv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R11ecv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="200.00021561863832"
                  x2="2"
                  y2="366.6669182217447"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4iecv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4iecv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="260.65097601967864"
                    y1="0"
                    x2="437.4261386896251"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R12ecv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R12ecv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="397.3578357894439"
                  x2="2"
                  y2="596.9174750876846"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4jecv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4jecv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="330.14532386441715"
                    y1="0"
                    x2="518.50287784182"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R13ecv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R13ecv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-34.65784418513067"
                  x2="2"
                  y2="92.89918178401422"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4kecv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4kecv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="24.911401205463335"
                    y1="0"
                    x2="162.39663473970722"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R14ecv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R14ecv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="129.18255036347546"
                  x2="2"
                  y2="284.04630875738803"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4lecv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4lecv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="392.13901389739476"
                    y1="0"
                    x2="590.8288495469606"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R15ecv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R15ecv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="277.67681790865026"
                  x2="2"
                  y2="457.2896208934253"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4mecv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4mecv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="80.01804189407267"
                    y1="0"
                    x2="226.68771554308478"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R16ecv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R16ecv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-26.25374227645807"
                  x2="2"
                  y2="102.70396734413225"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4necv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4necv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="242.94495442300104"
                    y1="0"
                    x2="416.7691134935012"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R17ecv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R17ecv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="399.9332176230382"
                  x2="2"
                  y2="599.9220872268779"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4oecv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4oecv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="338.74878693022765"
                    y1="0"
                    x2="528.5402514185989"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R18ecv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R18ecv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="58.58957236050628"
                  x2="2"
                  y2="201.68783442059066"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4pecv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4pecv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="220.99597058841027"
                    y1="0"
                    x2="391.16196568647865"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R19ecv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R19ecv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="323.85740440222435"
                  x2="2"
                  y2="511.16697180259507"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4qecv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4qecv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="398.46012663911097"
                    y1="0"
                    x2="598.2034810789628"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R1aecv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R1aecv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="394.49023290653713"
                  x2="2"
                  y2="593.57193839096"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4hicv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4hicv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="83.96675406838767"
                    y1="0"
                    x2="231.29454641311895"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R11icv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R11icv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-180.46290916972794"
                  x2="2"
                  y2="-77.20672736468259"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4iicv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4iicv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="161.35570987244137"
                    y1="0"
                    x2="321.58166151784826"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R12icv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R12icv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="190.3597554017324"
                  x2="2"
                  y2="355.41971463535447"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4jicv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4jicv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="24.911401205463335"
                    y1="0"
                    x2="162.39663473970722"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R13icv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R13icv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="219.37005837098695"
                  x2="2"
                  y2="389.2650680994848"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4kicv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4kicv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="188.6734297790099"
                    y1="0"
                    x2="353.4523347421782"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R14icv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R14icv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-2.0827370055485517"
                  x2="2"
                  y2="130.9034734935267"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4licv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4licv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="-92.55893204244785"
                    y1="0"
                    x2="25.347912617144175"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R15icv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R15icv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="399.40386987873353"
                  x2="2"
                  y2="599.3045148585225"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4micv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4micv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="209.9502295430284"
                    y1="0"
                    x2="378.2752678001998"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R16icv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R16icv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-46.06955497874878"
                  x2="2"
                  y2="79.58551919145975"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4nicv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4nicv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="349.2323704937007"
                    y1="0"
                    x2="540.7710989093175"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R17icv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R17icv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="379.77932403446175"
                  x2="2"
                  y2="576.4092113735387"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4oicv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4oicv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="29.188315145438537"
                    y1="0"
                    x2="167.3863676696783"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R18icv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R18icv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="79.57947560935281"
                  x2="2"
                  y2="226.17605487757828"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4picv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4picv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="335.64716169494204"
                    y1="0"
                    x2="524.921688644099"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R19icv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R19icv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="370.3483121760655"
                  x2="2"
                  y2="565.4063642054098"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4qicv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4qicv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="-13.65030471351929"
                    y1="0"
                    x2="117.4079778342275"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R1aicv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R1aicv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="399.92213049554266"
                  x2="2"
                  y2="599.9091522447998"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4hmcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4hmcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="15.130748628871515"
                    y1="0"
                    x2="150.9858734003501"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R11mcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R11mcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="292.2124514414463"
                  x2="2"
                  y2="474.2478600150207"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4imcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4imcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="147.93670265353285"
                    y1="0"
                    x2="305.9261530957883"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R12mcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R12mcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="272.5719254638534"
                  x2="2"
                  y2="451.3339130411623"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4jmcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4jmcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="244.11882435088046"
                    y1="0"
                    x2="418.13862840936054"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R13mcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R13mcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="58.58957236050628"
                  x2="2"
                  y2="201.68783442059066"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4kmcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4kmcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="125.24199671461247"
                    y1="0"
                    x2="279.4489961670479"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R14mcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R14mcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="267.0267103065271"
                  x2="2"
                  y2="444.86449535761494"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4lmcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4lmcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="310.01169296796434"
                    y1="0"
                    x2="495.0136417959584"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R15mcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R15mcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="328.0731378530618"
                  x2="2"
                  y2="516.0853274952387"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4mmcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4mmcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="353.5427351074759"
                    y1="0"
                    x2="545.7998576253885"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R16mcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R16mcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="267.0267103065271"
                  x2="2"
                  y2="444.86449535761494"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4nmcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4nmcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="-126.87829015194438"
                    y1="0"
                    x2="-14.691338510601781"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R17mcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R17mcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="96.70416049775667"
                  x2="2"
                  y2="246.15485391404945"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4omcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4omcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="155.7407245214563"
                    y1="0"
                    x2="315.03084527503233"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R18mcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R18mcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="184.02205434977077"
                  x2="2"
                  y2="348.02573007473256"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4pmcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4pmcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="219.37005837098695"
                    y1="0"
                    x2="389.2650680994848"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R19mcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R19mcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-71.83702918118797"
                  x2="2"
                  y2="49.5234659552807"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4qmcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4qmcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="250.33553050016053"
                    y1="0"
                    x2="425.3914522501873"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R1amcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R1amcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="387.3990183870774"
                  x2="2"
                  y2="585.2988547849236"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex">
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4hqcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4hqcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="97.14359305216931"
                    y1="0"
                    x2="246.66752522753086"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R11qcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R11qcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="48.15726372762583"
                  x2="2"
                  y2="189.51680768223014"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4iqcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4iqcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="-131.318596546771"
                    y1="0"
                    x2="-19.87169597123284"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R12qcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R12qcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="264.03819833067246"
                  x2="2"
                  y2="441.3778980524512"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4jqcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4jqcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="399.8030121962074"
                    y1="0"
                    x2="599.7701808955753"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R13qcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R13qcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="331.0260212223511"
                  x2="2"
                  y2="519.530358092743"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4kqcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4kqcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="395.7248335296754"
                    y1="0"
                    x2="595.0123057846213"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R14qcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R14qcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="-0.00021561863832175732"
                  x2="2"
                  y2="133.3330817782553"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4lqcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4lqcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="325.9770688659046"
                    y1="0"
                    x2="513.6399136768887"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R15qcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R15qcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="325.6756975722965"
                  x2="2"
                  y2="513.2883138343459"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4mqcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4mqcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="294.2853901826311"
                    y1="0"
                    x2="476.66628854640294"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R16qcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R16qcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="166.5211503219325"
                  x2="2"
                  y2="327.60800870892126"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4nqcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4nqcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="269.99373778817244"
                    y1="0"
                    x2="448.3260274195345"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R17qcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R17qcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="8.37733245571144"
                  x2="2"
                  y2="143.10688786499668"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4oqcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4oqcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="386.41261447337456"
                    y1="0"
                    x2="584.148050218937"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R18qcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R18qcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="21.92611455102451"
                  x2="2"
                  y2="158.9138003095286"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4pqcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4pqcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="18.948200199520215"
                    y1="0"
                    x2="155.43956689944025"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R19qcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R19qcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="393.41536862193607"
                  x2="2"
                  y2="592.3179300589254"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex w-60 flex-col items-start justify-center">
            <div className="flex items-center justify-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900">
                <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              </div>
              <svg
                width="300"
                height="1"
                viewBox="0 0 300 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-800"
              >
                <path d="M0.5 0.5H479" stroke="currentColor"></path>
                <path
                  d="M0.5 0.5H479"
                  stroke="url(#gradient-:R4qqcv9udja:)"
                  strokeWidth="1"
                ></path>
                <defs>
                  <linearGradient
                    id="gradient-:R4qqcv9udja:"
                    gradientUnits="userSpaceOnUse"
                    x1="384.02881182846613"
                    y1="0"
                    x2="581.3669471332105"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="transparent"></stop>
                    <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                    <stop offset="100%" stopColor="transparent"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <svg
              width="1"
              height="140"
              viewBox="0 0 1 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 text-neutral-800"
            >
              <path
                d="M0.5 0.5V479"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M0.5 0.5V479"
                stroke="url(#gradient-:R1aqcv9udja:)"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="gradient-:R1aqcv9udja:"
                  gradientUnits="userSpaceOnUse"
                  x1="2"
                  y1="220.58984562172554"
                  x2="2"
                  y2="390.68815322534647"
                >
                  <stop offset="0%" stopColor="transparent"></stop>
                  <stop offset="50%" stopColor="var(--neutral-200)"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBackground;
