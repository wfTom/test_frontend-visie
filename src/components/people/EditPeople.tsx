'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cpfMask, formatDateToInput, rgMask } from '@/helpers/utils';

export default function EditPeopleForm({
  id,
  name,
  RG,
  CPF,
  admissionDate,
  birthDate,
  role,
}) {
  const [newName, setNewName] = useState(name);
  const [newRG, setNewRG] = useState(RG);
  const [newCPF, setNewCPF] = useState(CPF);
  const [newAdmissionDate, setNewAdmissionDate] = useState(
    formatDateToInput(admissionDate)
  );
  const [newBirthDate, setNewBirthDate] = useState(
    formatDateToInput(birthDate)
  );
  const [newRole, setNewRole] = useState(role);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3001/api/pessoas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          nome: newName,
          rg: newRG,
          cpf: newCPF,
          data_admissao: newAdmissionDate,
          data_nascimento: newBirthDate,
          funcao: newRole,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to update topic');
      }

      router.refresh();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className="px-8 py-1">Nome:</label>
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-500 px-8 py-2 text-black rounded"
        type="text"
      />

      <label className="px-8 py-1">Função:</label>
      <input
        onChange={(e) => setNewRole(e.target.value)}
        value={newRole}
        className="border border-slate-500 px-8 py-2 text-black rounded"
        type="text"
        placeholder="Função"
      />

      <label className="px-8 py-1">RG:</label>
      <input
        onChange={(e) => setNewRG(e.target.value)}
        value={rgMask(newRG)}
        className="border border-slate-500 px-8 py-2 text-black rounded"
        type="text"
      />

      <label className="px-8 py-1">CPF:</label>
      <input
        onChange={(e) => setNewCPF(e.target.value)}
        value={cpfMask(newCPF)}
        className="border border-slate-500 px-8 py-2 text-black rounded"
        type="text"
      />

      <label className="px-8 py-1">Data de nascimento:</label>
      <input
        onChange={(e) => setNewBirthDate(e.target.value)}
        value={newBirthDate}
        className="border border-slate-500 px-8 py-2 text-black rounded"
        type="date"
      />

      <label className="px-8 py-1">Data de admissão:</label>
      <input
        onChange={(e) => setNewAdmissionDate(e.target.value)}
        value={newAdmissionDate}
        className="border border-slate-500 px-8 py-2 text-black rounded"
        type="date"
      />

      <div className="flex flex-row-reverse">
        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit rounded">
          Atualizar Pessoa
        </button>
      </div>
    </form>
  );
}
