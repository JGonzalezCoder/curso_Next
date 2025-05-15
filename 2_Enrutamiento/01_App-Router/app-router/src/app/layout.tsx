import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entendiendo el App Router",
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
      	{children}
      </body>
    </html>
  );
}
