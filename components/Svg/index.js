const svgObject = {
  add: "M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z",
};

function Svg({ variant, size = "24px", color = "currentColor" }) {
  return (
    <svg style={{ with: size, height: size }} viewBox="0 0 24 24">
      <path fill={color} d={svgObject[variant]} />
    </svg>
  );
}

export default Svg;
