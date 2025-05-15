import type { Metadata } from "next";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "Uso de Links para Menus",
  description: "Esta es la primera ez que creo una app con Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
      	<Menu />
      	{children}
      </body>
    </html>
  );
}
