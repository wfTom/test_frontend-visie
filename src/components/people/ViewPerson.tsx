'use client';

import { formatDate } from '@/helpers/utils';
import { useRouter } from 'next/navigation';
import DeleteButton from './DeleteButton';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';

export default function ViewPerson({
  id,
  name,
  RG,
  CPF,
  admissionDate,
  birthDate,
  role,
}) {
  const router = useRouter();

  return (
    <div className="flex-row">
      <div className="border border-slate-500 px-8 py-2 m-2 text-black rounded bg-white">
        Nome: {name}
      </div>

      <div className="border border-slate-500 px-8 py-2 m-2 text-black rounded bg-white">
        Função: {role}
      </div>

      <div className="border border-slate-500 px-8 py-2 m-2 text-black rounded bg-white">
        RG: {RG}
      </div>

      <div className="border border-slate-500 px-8 py-2 m-2 text-black rounded bg-white">
        CPF: {CPF}
      </div>

      <div className="border border-slate-500 px-8 py-2 m-2 text-black rounded bg-white">
        Data de nascimento: {formatDate(birthDate)}
      </div>

      <div className="border border-slate-500 px-8 py-2 m-2 text-black rounded bg-white">
        Data de admissão: {formatDate(admissionDate)}
      </div>

      <div className="flex flex-row-reverse gap-2 m-10 right-0">
        <DeleteButton id={id} />
        <Link href={`/edit-people/${id}`}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
}
