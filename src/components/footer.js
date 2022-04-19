const Footer = () => {
  var stylingObject = {
    div: {
      background: "#66C38F",
      height: "3px",
    },
  };
  return (
    <footer className=" mt-0">
      <hr style={stylingObject.div} />
      <p className=" font-mono">WSL Final Project - Sub-group 2</p>
      <hr style={stylingObject.div} />
    </footer>
  );
};

export default Footer;
