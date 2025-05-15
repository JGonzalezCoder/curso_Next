import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Esta es nuestro Blog",
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
