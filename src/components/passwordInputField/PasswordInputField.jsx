import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import cn from "classnames";

const PasswordInputField = (props) => {
  const { className = "", iconSize, placeholder, ...others } = props;
  const [displayPassword, setDisplayPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={displayPassword ? "text" : "password"}
        className={cn("pr-[40px]", className)}
        placeholder={placeholder}
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
};

export default PasswordInputField;
