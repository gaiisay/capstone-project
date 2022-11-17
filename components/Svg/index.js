const svgObject = {
  add: "M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z",
  create:
    "M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM12 13H17V18H12V13Z",
};

function Svg({ variant, size = "24px", color = "currentColor" }) {
  return (
    <svg style={{ with: size, height: size }} viewBox="0 0 24 24">
      <path fill={color} d={svgObject[variant]} />
    </svg>
  );
}

export default Svg;
