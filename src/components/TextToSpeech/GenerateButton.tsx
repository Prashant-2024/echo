"use client";

import React from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

const GenerateButton = ({
  size,
  disabled,
  isSubmitting,
  onSubmit,
  className,
}: {
  size?: "default" | "sm";
  disabled: boolean;
  isSubmitting: boolean;
  onSubmit: () => void;
  className?: string;
}) => {
  return (
    <Button
      size={size}
      disabled={disabled}
      onClick={onSubmit}
      className={className}
    >
      {isSubmitting ? (
        <>
          <Spinner className="size-3" />
          Generating
        </>
      ) : (
        "Generate speech"
      )}
    </Button>
  );
};

export default GenerateButton;
