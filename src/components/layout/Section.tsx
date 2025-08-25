import { cn } from "@/lib/utils"

export function Section({
  title,
  children,
  className,
}: {
  title?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("my-10 px-6 md:px-12 flex justify-center flex-col items-center", className)}>
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      {children}
    </section>
  )
}
