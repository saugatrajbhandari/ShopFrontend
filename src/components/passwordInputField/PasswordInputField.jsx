import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import cn from "classnames";

const PasswordInputField = React.forwardRef((props, ref) => {
  const { className, iconSize, placeholder, value, ...others } = props;

  const [displayPassword, setDisplayPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={displayPassword ? "text" : "password"}
        className={cn("pr-[40px]", className)}
        placeholder={placeholder}
        ref={ref}
        {...others}
      />
      <div className="absolute top-6 right-2">
        {displayPassword ? (
          <EyeOff
            onClick={() => setDisplayPassword(false)}
            size={iconSize}
            className="cursor-pointer"
          />
        ) : (
          <Eye
            onClick={() => setDisplayPassword(true)}
            size={iconSize}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
});

export default PasswordInputField;
