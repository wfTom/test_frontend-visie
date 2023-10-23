'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cpfMask, rgMask } from '@/helpers/utils';

export default function AddPerson() {
  const [name, setName] = useState('');
  const [RG, setRG] = useState('');
  const [CPF, setCPF] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [role, setRole] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !RG || !CPF || !admissionDate || !birthDate) {
      alert(
        'Nome, RG, CPF, Data de admissão e data de nascimento são obrigatórios.'
      );
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/api/pessoas', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          nome: name,
          rg: RG,
          cpf: CPF,
          data_admissao: new Date(admissionDate).toISOString(),
          data_nascimento: new Date(birthDate).toISOString(),
          funcao: role,
        }),
      });

      if (res.ok) {
        router.push('/');
      } else {
        throw new Error('Failed to create a person');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className="px-8 py-1">Nome:</label>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2 text-black rounded"
        type="text"
        placeholder="Nome"
        required
      />

      <label className="px-8 py-1">Função:</label>
      <input
        onChange={(e) => setRole(e.target.value)}
        value={role}
        className="border border-slate-500 px-8 py-2 text-black rounded"
        type="text"
        placeholder="Função"
      />

      <label className="px-8 py-1">RG:</label>
      <input
        onChange={(e) => setRG(e.target.value)}
        value={rgMask(RG)}
        className="border border-slate-500 px-8 py-2 text-black rounded"
        type="text"
        placeholder="RG"
        required
      />

      <label className="px-8 py-1">CPF:</label>
      <input
        onChange={(e) => setCPF(e.target.value)}
        value={cpfMask(CPF)}
        className="border border-slate-500 px-8 py-2 text-black rounded"
        type="text"
        placeholder="CPF"
        required
      />

      <label className="px-8 py-1">Data de nascimento:</label>
      <input
        onChange={(e) => setBirthDate(e.target.value)}
        value={birthDate}
        className="border border-slate-500 px-8 py-2 text-black rounded"
        type="date"
        placeholder=""
        required
      />

      <label className="px-8 py-1">Data de admissão:</label>
      <input
        onChange={(e) => setAdmissionDate(e.target.value)}
        value={admissionDate}
        className="border border-slate-500 px-8 py-2 text-black rounded"
        type="date"
        placeholder=""
        required
      />

      <div className="flex flex-row-reverse">
        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit rounded"
        >
          Adicionar
        </button>
      </div>
    </form>
  );
}
