import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entendiendo el App Router",
  description: "Esta es la pagina de portafolio",
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
