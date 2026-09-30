<<<<<<< HEAD
import { cn } from "@/lib/utils"
=======
import { cn } from "@/lib/utils";
>>>>>>> f9b8045 (Update semua)

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
<<<<<<< HEAD
  )
}

export { Skeleton }
=======
  );
}

export { Skeleton };
>>>>>>> f9b8045 (Update semua)
