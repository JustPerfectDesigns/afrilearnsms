"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#0B1A2D] group-[.toaster]:text-[#0BC279] group-[.toaster]:border-border group-[.toaster]:shadow-lg relative before:absolute before:left-0 before:right-0 before:h-full before:w-1.5 before:bg-[#0BC279] before:border-border overflow-hidden",
          description: "group-[.toast]:text-[#FFFFFF]",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
