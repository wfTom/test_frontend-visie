'use client';

import { HiOutlineTrash } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

export default function DeleteButton({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm('Você tem certeza?');

    if (confirmed) {
      const res = await fetch(`http://localhost:3001/api/pessoas/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.refresh();
        router.push('/');
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
