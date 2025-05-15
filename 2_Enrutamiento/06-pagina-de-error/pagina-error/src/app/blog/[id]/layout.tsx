import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articulo del blog",
  description: "Esta es un articulo de nuestro Blog",
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
