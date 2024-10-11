export const metadata = {
  title: "Dashboard",
  description: "A simple dashboard layout in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

