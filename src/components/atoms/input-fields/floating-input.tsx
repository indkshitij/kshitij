"use client";

import React, { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
};

type InputProps = BaseProps & {
  type?: React.HTMLInputTypeAttribute;
  multiline?: false;
};

type TextareaProps = BaseProps & {
  multiline: true;
  rows?: number;
};

type FloatingInputProps = InputProps | TextareaProps;

const FloatingInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FloatingInputProps
>((props, ref) => {
  const {
    label,
    name,
    value,
    defaultValue,
    onChange,
    required,
    disabled,
    error,
    className,
    inputClassName,
    labelClassName,
  } = props;

  const id = useId();

  const hasValue = !!value || !!defaultValue;

  const baseInputClass =
    "peer w-full bg-transparent outline-none font-mono text-sm transition-all duration-200 placeholder-transparent disabled:opacity-50";

  const underlineClass =
    "border-b border-line focus:border-foreground";

  const errorClass = error ? "border-red-500 focus:border-red-500" : "";

  const sharedProps = {
    id,
    name,
    value,
    defaultValue,
    onChange,
    required,
    disabled,
    ref: ref as any,
    className: cn(
      baseInputClass,
      underlineClass,
      errorClass,
      inputClassName
    ),
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* INPUT / TEXTAREA */}
      {props.multiline ? (
        <textarea
          {...sharedProps}
          rows={props.rows || 1}
          className={cn(
            sharedProps.className,
            "resize-none overflow-hidden py-2 leading-relaxed"
          )}
        />
      ) : (
        <input
          {...sharedProps}
          type={props.type || "text"}
          className={cn(sharedProps.className, "h-11 py-1")}
        />
      )}

      {/* LABEL */}
      <label
        htmlFor={id}
        className={cn(
          "absolute left-0 pointer-events-none font-mono text-muted-foreground/70 transition-all duration-200 ease-out",
          
          "top-1/2 -translate-y-1/2 text-sm",
          hasValue && "-top-3 text-xs",
          "peer-focus:-top-3 peer-focus:text-xs",
          disabled && "opacity-50",
          labelClassName
        )}
      >
        {label}
        {required && <span className="ml-0.5 text-red-500 font-mono">*</span>}
      </label>

      {/* ERROR */}
      {error && (
        <p className="mt-1 text-xs text-red-500 font-mono">{error}</p>
      )}
    </div>
  );
});

FloatingInput.displayName = "FloatingInput";

export default FloatingInput;