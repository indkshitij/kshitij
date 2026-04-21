"use client";

import { forwardRef, useId, useState } from "react";
import PhoneInput, { type Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn } from "@/lib/utils";

type FloatingPhoneInputProps = {
  label: string;
  name: string;
  value?: string | Value | null;
  onChange?: (value: Value) => void;
  onBlur?: any;
  onFocus?: any;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
};

const FloatingPhoneInput = forwardRef<any, FloatingPhoneInputProps>(
  (
    {
      label,
      name,
      value,
      onChange,
      onBlur,
      onFocus,
      required,
      disabled,
      error,
      className,
      inputClassName,
      labelClassName,
    },
    ref,
  ) => {
    const id = useId();
    const [focused, setFocused] = useState(false);

    const hasValue = !!value;
    const active = focused || hasValue;

    return (
      <div className={cn("relative w-full", className)}>
        {/* WRAPPER  */}
        <div
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={() => setFocused(false)}
          className={cn(
            "flex items-center border-b border-line transition",
            focused && "border-foreground",
            error && "border-red-500",
          )}
        >
          <PhoneInput
            id={id}
            ref={ref}
            international
            defaultCountry="IN"
            value={value as Value}
            onChange={(val) => onChange?.(val as Value)}
            onBlur={onBlur}
            onFocus={onFocus}
            disabled={disabled}
            className="flex items-center w-full"
            numberInputProps={{
              name,
              required,
              className: cn(
                "w-full bg-transparent outline-none font-mono text-sm",
                "py-1 h-11",
                disabled && "opacity-50",
                inputClassName,
              ),
            }}
          />
        </div>

        {/* LABEL */}
        <label
          htmlFor={id}
          className={cn(
            "absolute  pointer-events-none font-mono text-muted-foreground/70",
            "transition-all duration-200 ease-out",
            active
              ? "-top-3 left-0 text-xs"
              : "top-1/2 left-19.5 -translate-y-1/2 text-sm",
            disabled && "opacity-50",
            labelClassName,
          )}
        >
          {label}
          {required && <span className="ml-0.5 text-red-500 font-mono">*</span>}
        </label>

        {/* ERROR */}
        {error && <p className="mt-1 text-xs text-red-500 font-mono">{error}</p>}
      </div>
    );
  },
);

FloatingPhoneInput.displayName = "FloatingPhoneInput";

export default FloatingPhoneInput;
