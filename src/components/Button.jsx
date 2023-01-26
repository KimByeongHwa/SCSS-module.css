import classNames from "classnames";
import React from "react";
import "./Button.scss";

function Button({ children, size, color, outline, fullWidth }) {
    return <div className={classNames("Button", size, color, { outline, fullWidth })}>{children}</div>;
}

Button.defaultProps = {
    size: "medium",
    color: "blue",
};

export default Button;
