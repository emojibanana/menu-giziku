<<<<<<< HEAD
import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"
=======
import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";
>>>>>>> f9b8045 (Update semua)

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
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

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
<<<<<<< HEAD
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
=======
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
>>>>>>> f9b8045 (Update semua)
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
<<<<<<< HEAD
  withHandle?: boolean
=======
  withHandle?: boolean;
>>>>>>> f9b8045 (Update semua)
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
<<<<<<< HEAD
        className
=======
        className,
>>>>>>> f9b8045 (Update semua)
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
<<<<<<< HEAD
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
=======
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
>>>>>>> f9b8045 (Update semua)
