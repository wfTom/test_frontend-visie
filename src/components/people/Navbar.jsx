import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-left bg-slate-800 px-8 py-3">
      <p className="text-white font-bold">
        <Link className="underline" href={'/'}>
          Teste
        </Link>{' '}
        para vaga de Programador Fullstack na Visie feito por{' '}
        <Link className="underline" href={'https://github.com/wfTom'}>
          Tom
        </Link>
      </p>
    </nav>
  );
}
