export default function TerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="font-mono">{children}</div>;
}
