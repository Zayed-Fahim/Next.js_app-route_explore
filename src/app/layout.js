import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Day 7 || Home",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container mx-auto">
          
          {children}
          
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
