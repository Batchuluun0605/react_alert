const Alert = ({ message, bgColor, position, icon }) => {
  function positionStyles(position) {
    switch (position) {
      case "top-left":
        return { top: "20px", left: "20px" };
      case "top-right":
        return { top: "20px", right: "20px" };
      case "bottom-left":
        return { bottom: "20px", left: "20px" };
      case "bottom-right":
        return { bottom: "20px", right: "20px" };
      default:
        return { top: "20px", right: "20px" };
    }
  }
  return (
    <div
      className="alert"
      style={{ ...positionStyles(position), backgroundColor: bgColor }}
    >
      <img src={icon} className="alert-icon" alt={icon} />
      <p className="alert-msg">{message}</p>
    </div>
  );
};

export default Alert;
