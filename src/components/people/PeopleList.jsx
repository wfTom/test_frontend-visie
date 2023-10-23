import Link from 'next/link';
import DeleteButton from './DeleteButton';
import { HiPencilAlt } from 'react-icons/hi';
import { formatDate } from '../../helpers/utils';

const getPeople = async () => {
  try {
    const res = await fetch('http://localhost:3001/api/pessoas', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch people');
    }

    return res.json();
  } catch (error) {
    console.log('Error loading people: ', error);
  }
};

export default async function PeopleList() {
  const people = await getPeople();

  return (
    <>
      {people.map((p) => (
        <div
          key={p.id_pessoa}
          className="p-4 border border-slape-300 my-3 flex justify-between gap-5 items-start rounded"
        >
          <div>
            <Link
              className="font-bold text-2xl"
              href={`/person/${p.id_pessoa}`}
            >
              {p.nome}
            </Link>
            <div>Data de admissão: {formatDate(p.data_admissao)}</div>
          </div>

          <div className="flex gap-2">
            <DeleteButton id={p.id_pessoa} />
            <Link href={`/edit-people/${p.id_pessoa}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
      <div className="flex flex-row-reverse">
        <Link
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit rounded flex"
          href={'/add-people'}
        >
          Adicionar Pessoa
        </Link>
      </div>
    </>
  );
}
