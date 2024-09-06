import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  className,
  Icon,
  name,
  description,
  href,
  cta,
  background,
}: {
  className?: string;
  Icon: React.ElementType;
  name: string;
  description: string;
  href: string;
  cta: string;
  background?: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-900",
        className
      )}
    >
      {background}
      <Icon className="mb-2 h-6 w-6 transition-all group-hover:scale-110" />
      <h3 className="mb-1 font-bold">{name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      <span className="mt-2 inline-block text-sm font-semibold text-blue-500 dark:text-blue-400">
        {cta} →
      </span>
    </Link>
  );
};
