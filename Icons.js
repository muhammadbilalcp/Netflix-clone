// Minimal lucide-style icon set, hand-rolled as inline SVG React components.
// Avoids depending on an external icon CDN for the static deploy.
const { createElement: h } = React;

function Icon({ children, size = 20, className, style, ...rest }) {
  return h(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      style,
      ...rest,
    },
    children
  );
}

const Search = (props) =>
  h(Icon, props, h("circle", { cx: 11, cy: 11, r: 8 }), h("path", { d: "m21 21-4.3-4.3" }));

const Menu = (props) =>
  h(Icon, props, h("line", { x1: 4, y1: 6, x2: 20, y2: 6 }), h("line", { x1: 4, y1: 12, x2: 20, y2: 12 }), h("line", { x1: 4, y1: 18, x2: 20, y2: 18 }));

const X = (props) =>
  h(Icon, props, h("line", { x1: 18, y1: 6, x2: 6, y2: 18 }), h("line", { x1: 6, y1: 6, x2: 18, y2: 18 }));

const Play = (props) => h(Icon, { ...props, fill: props.fill || "none" }, h("polygon", { points: "6 3 20 12 6 21 6 3" }));

const Info = (props) =>
  h(Icon, props, h("circle", { cx: 12, cy: 12, r: 10 }), h("line", { x1: 12, y1: 16, x2: 12, y2: 12 }), h("line", { x1: 12, y1: 8, x2: 12.01, y2: 8 }));

const Plus = (props) => h(Icon, props, h("line", { x1: 12, y1: 5, x2: 12, y2: 19 }), h("line", { x1: 5, y1: 12, x2: 19, y2: 12 }));

const Check = (props) => h(Icon, props, h("polyline", { points: "20 6 9 17 4 12" }));

const Star = (props) =>
  h(
    Icon,
    { ...props, fill: props.fill || "none" },
    h("polygon", {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    })
  );

const ArrowLeft = (props) =>
  h(Icon, props, h("line", { x1: 19, y1: 12, x2: 5, y2: 12 }), h("polyline", { points: "12 19 5 12 12 5" }));

const ChevronLeft = (props) => h(Icon, props, h("polyline", { points: "15 18 9 12 15 6" }));

const ChevronRight = (props) => h(Icon, props, h("polyline", { points: "9 18 15 12 9 6" }));

const PlayCircle = (props) =>
  h(Icon, props, h("circle", { cx: 12, cy: 12, r: 10 }), h("polygon", { points: "10 8 16 12 10 16 10 8" }));

const Bookmark = (props) =>
  h(Icon, props, h("path", { d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" }));

const Trash2 = (props) =>
  h(
    Icon,
    props,
    h("polyline", { points: "3 6 5 6 21 6" }),
    h("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
    h("line", { x1: 10, y1: 11, x2: 10, y2: 17 }),
    h("line", { x1: 14, y1: 11, x2: 14, y2: 17 })
  );

const AlertTriangle = (props) =>
  h(
    Icon,
    props,
    h("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
    h("line", { x1: 12, y1: 9, x2: 12, y2: 13 }),
    h("line", { x1: 12, y1: 17, x2: 12.01, y2: 17 })
  );

const Key = (props) =>
  h(
    Icon,
    props,
    h("path", {
      d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4",
    })
  );

const Clock = (props) =>
  h(Icon, props, h("circle", { cx: 12, cy: 12, r: 10 }), h("polyline", { points: "12 6 12 12 16 14" }));
