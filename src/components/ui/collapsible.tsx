<<<<<<< HEAD
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
=======
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
>>>>>>> f9b8045 (Update semua)

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
<<<<<<< HEAD
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
=======
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
>>>>>>> f9b8045 (Update semua)
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
<<<<<<< HEAD
  )
=======
  );
>>>>>>> f9b8045 (Update semua)
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
<<<<<<< HEAD
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
=======
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
>>>>>>> f9b8045 (Update semua)
