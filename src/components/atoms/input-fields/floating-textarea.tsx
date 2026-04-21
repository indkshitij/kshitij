"use client";

import React, { useEffect, useRef, useId } from "react";
import { cn } from "@/lib/utils";

type FloatingTextareaProps = {
  label: string;
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  textareaClassName?: string;
  labelClassName?: string;
};

export default function FloatingTextarea({
  label,
  name,
  value,
  defaultValue,
  onChange,
  required,
  disabled,
  error,
  className,
  textareaClassName,
  labelClassName,
}: FloatingTextareaProps) {
  const id = useId();
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const hasValue = !!value || !!defaultValue;

  //  auto resize
  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
    onChange?.(e);
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* TEXTAREA */}
      <textarea
        id={id}
        ref={ref}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        required={required}
        disabled={disabled}
        rows={1}
        className={cn(
          "peer w-full bg-transparent outline-none font-mono text-sm",
          "border-b border-line focus:border-foreground",
          "resize-none overflow-hidden py-3 transition-all duration-200",
          "placeholder-transparent disabled:opacity-50",
          error && "border-red-500 focus:border-red-500",
          textareaClassName
        )}
      />

      {/* LABEL */}
      <label
        htmlFor={id}
        className={cn(
          "absolute left-0 pointer-events-none font-mono text-muted-foreground/70 transition-all duration-200 ease-out",
          "top-3 text-sm",
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
}