import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creacion de rutas dinamicas",
  description: "Esta es la primera que que creo una app con Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
      	{children}
      </body>
    </html>
  );
}
