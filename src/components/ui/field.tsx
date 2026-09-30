<<<<<<< HEAD
import { useMemo } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
=======
import { useMemo } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
>>>>>>> f9b8045 (Update semua)

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
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

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
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

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
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

const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
<<<<<<< HEAD
  }
)
=======
  },
);
>>>>>>> f9b8045 (Update semua)

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
<<<<<<< HEAD
  )
=======
  );
>>>>>>> f9b8045 (Update semua)
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
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

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
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

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
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

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
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

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
<<<<<<< HEAD
  children?: React.ReactNode
=======
  children?: React.ReactNode;
>>>>>>> f9b8045 (Update semua)
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
<<<<<<< HEAD
        className
=======
        className,
>>>>>>> f9b8045 (Update semua)
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="bg-background text-muted-foreground relative mx-auto block w-fit px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> f9b8045 (Update semua)
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
<<<<<<< HEAD
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
=======
  errors?: Array<{ message?: string } | undefined>;
}) {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
>>>>>>> f9b8045 (Update semua)
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
<<<<<<< HEAD
    ]

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message
=======
    ];

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
>>>>>>> f9b8045 (Update semua)
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
<<<<<<< HEAD
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
=======
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
>>>>>>> f9b8045 (Update semua)
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-destructive text-sm font-normal", className)}
      {...props}
    >
      {content}
    </div>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> f9b8045 (Update semua)
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
<<<<<<< HEAD
}
=======
};
>>>>>>> f9b8045 (Update semua)
