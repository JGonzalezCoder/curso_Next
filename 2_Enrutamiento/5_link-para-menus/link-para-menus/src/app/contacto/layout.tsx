import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Esta es la pagina de contacto",
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
