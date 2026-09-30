<<<<<<< HEAD
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
=======
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
>>>>>>> f9b8045 (Update semua)

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
<<<<<<< HEAD
        className
      )}
      {...props}
    />
  )
=======
        className,
      )}
      {...props}
    />
  );
>>>>>>> f9b8045 (Update semua)
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
<<<<<<< HEAD
        className
      )}
      {...props}
    />
  )
=======
        className,
      )}
      {...props}
    />
  );
>>>>>>> f9b8045 (Update semua)
}

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
<<<<<<< HEAD
  }
)
=======
  },
);
>>>>>>> f9b8045 (Update semua)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
<<<<<<< HEAD
  )
=======
  );
>>>>>>> f9b8045 (Update semua)
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props}
    />
<<<<<<< HEAD
  )
=======
  );
>>>>>>> f9b8045 (Update semua)
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
<<<<<<< HEAD
        className
      )}
      {...props}
    />
  )
=======
        className,
      )}
      {...props}
    />
  );
>>>>>>> f9b8045 (Update semua)
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
<<<<<<< HEAD
        className
      )}
      {...props}
    />
  )
=======
        className,
      )}
      {...props}
    />
  );
>>>>>>> f9b8045 (Update semua)
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
<<<<<<< HEAD
}
=======
};
>>>>>>> f9b8045 (Update semua)
