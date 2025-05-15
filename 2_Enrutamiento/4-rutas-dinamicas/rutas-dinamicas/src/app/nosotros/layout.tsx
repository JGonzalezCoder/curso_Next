import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Esta es la pagina nosotros",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  	<>{children}</>
  );
}
