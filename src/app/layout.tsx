import Navbar from '@/components/people/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Teste de Programador Fullstack',
  description: 'Teste para vaga de Programador Fullstack na Visie',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        <div className="max-w-3xl mx-auto p-4">
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
