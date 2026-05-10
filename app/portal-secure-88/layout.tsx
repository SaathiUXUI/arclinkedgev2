export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="sanity-studio-root">
      {children}
    </div>
  )
}
