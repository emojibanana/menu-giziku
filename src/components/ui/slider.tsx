<<<<<<< HEAD
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"
=======
"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
>>>>>>> f9b8045 (Update semua)

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
<<<<<<< HEAD
    [value, defaultValue, min, max]
  )
=======
    [value, defaultValue, min, max],
  );
>>>>>>> f9b8045 (Update semua)

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
<<<<<<< HEAD
        className
=======
        className,
>>>>>>> f9b8045 (Update semua)
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
<<<<<<< HEAD
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
=======
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
>>>>>>> f9b8045 (Update semua)
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
<<<<<<< HEAD
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
=======
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
>>>>>>> f9b8045 (Update semua)
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
<<<<<<< HEAD
  )
}

export { Slider }
=======
  );
}

export { Slider };
>>>>>>> f9b8045 (Update semua)
