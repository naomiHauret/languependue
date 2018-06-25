import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import cxs from "cxs"
import anime from "animejs"

const baseFontSize = ds.get("type.sizes.base")

export default (props, children) => {
  const { slices } = props

  return (
    <ul
      class={cxs({
        textAlign: "center",
        transition: "550ms ease-in-out all",

        ":hover": {
          "> li": {
            ":first-child": {
              marginTop: `${pxTo(-20, baseFontSize, "rem")} !important`,
            },
            ":not(:first-child):hover": {
              marginTop: `${pxTo(-80, baseFontSize, "rem")} !important`,
            },
          },
          "> li div": {
            transform: "rotate3d(0, 0, 0, 0deg)",
          },
        },
      })}
      oncreate={(e) =>
        anime({
          targets: e.children,
          translateY: ["-500%", 0],
          easing: "easeInOutQuint",
          duration: 1350,
          delay: (target, index) => {
            return index === 0 ? 1325 : 1325 + index * 50
          },
          elasticity: (target, index, totalTargets) => {
            return 200 + (totalTargets - index) * 200
          },
          complete: () => {
            document.querySelectorAll("[data-select='city-slice']").forEach((slice, index) => {
              slice.style.transition = "all 550ms ease-in-out"
              slice.style.animation =
                index % 2 === 0
                  ? `sliceFloat linear ${7450 + index * 50 + Math.random() * 100}ms infinite alternate`
                  : `sliceFloat ease-in-out ${7450 + index * 50 + Math.random() * 100}ms infinite alternate-reverse`
            })
          },
        })
      }
    >
      {slices.map((slice, i) => (
        <li
          data-select="city-slice"
          key={`city-slice-${i}`}
          class={cxs({
            zIndex: slices.length + 2 - i,
            "> div img": {
              opacity: slice.unlocked === true ? 1 : 0.2,
            },
            ":hover": {
              "> div:first-child": {
                opacity: 1,
              },
              "> div img": {
                opacity: slice.unlocked === true ? 1 : 0.4,
              },
            },
            position: "relative",
            ":not(:first-child)": {
              marginTop: "-45%",
            },
          })}
        >
          <div
            class={cxs({
              position: "absolute",
              textTransform: "uppercase",
              fontFamily: ds.get("type.fontFamily.bold"),
              fontSize: pxTo(ds.get("type.fontSize.lg"), baseFontSize, "rem"),
              color: slice.unlocked === true ? ds.get("colors.texts.action") : ds.get("colors.texts.muted"),
              textShadow: `0 0 ${pxTo(6, baseFontSize, "rem")} currentColor`,
              letterSpacing: pxTo(1.5, baseFontSize, "rem"),
              perspective: "1200px",
              zIndex: 8,
              transform: "translate(-50%, -50%) rotate(-5deg)",
              top: "45%",
              opacity: 0,
              transition: "750ms ease-in-out",
            })}
          >
            <div
              class={cxs({
                animation: slice.unlocked === true ? "cityname 5850ms linear alternate infinite" : "",
                transform: slice.unlocked === true ? "" : "rotate3d(-6,-3,-3.5, -40deg)",
              })}
            >
              {slice.name}
            </div>
          </div>
          <div
            class={cxs({
              transition: "all 750ms ease-in-out",
              perspective: "1200px",
              cursor: "pointer",
              transform: "rotate3d(1,0,0,75deg)",

              ":hover": {
                "> svg": {
                  strokeDashoffset: 0,
                },
              },
            })}
          >
            <img
              class={cxs({
                transition: "450ms ease-in-out all",
                maxWidth: "400px",
                "@media (min-height: 700px)": {
                  maxWidth: "500px",
                },
                "@media (min-height: 800px)": {
                  maxWidth: "unset",
                },
              })}
              src={slice.src}
            />

            {slice.unlocked === true && (
              <svg
                class={cxs({
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  fillOpacity: 0,
                  transition: "all 750ms ease-in-out",
                  strokeDasharray: 1000,
                  strokeDashoffset: 1000,
                  transform: "scale(0.54) translateX(-43%) translateY(45%)",
                  "@media (min-height: 700px)": {
                    transform: "scale(0.675) translateX(-23%) translateY(25%)",
                  },
                  "@media (min-height: 800px)": {
                    transform: "none",
                  },
                })}
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                width="737"
                height="237"
              >
                <defs>
                  <path id="b" d="M17.238 230.285l384.514 192.232 336.153-222.283" />
                  <filter id="a" width="103.2%" height="110.3%" x="-1.6%" y="-5.2%" filterUnits="objectBoundingBox">
                    <feMorphology in="SourceAlpha" operator="dilate" radius="1.5" result="shadowSpreadOuter1" />
                    <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                    <feMorphology in="SourceAlpha" radius="1.5" result="shadowInner" />
                    <feOffset in="shadowInner" result="shadowInner" />
                    <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1" />
                    <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="3" />
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      values="0 0 0 0 0.368627451 0 0 0 0 0.733333333 0 0 0 0 0.741176471 0 0 0 1 0"
                    />
                  </filter>
                </defs>
                <g fill="none" fill-rule="evenodd" transform="translate(-9 -193)">
                  <use fill="#000" filter="url(#a)" href="#b" />
                  <use stroke="#5EBBBD" stroke-width="2" href="#b" />
                </g>
              </svg>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
