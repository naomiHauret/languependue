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
        paddingTop: pxTo(50, baseFontSize, "rem"),
        textAlign: "center",
        ":hover": {
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
        })
      }
    >
      {slices.map((slice, i) => (
        <li
          key={`city-slice-${i}`}
          class={cxs({
            zIndex: slices.length + 2 - i,

            position: "relative",
            ":not(:first-child)": {
              marginTop: "-45%",
            },
          })}
        >
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
                opacity: slice.unlocked === true ? 1 : 0.25,
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
