import EditPeopleForm from '@/components/people/EditPeople';

const getPeopleById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3001/api/pessoas/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch topic');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditPeople({ params }) {
  const { id } = params;
  const { nome, rg, cpf, data_admissao, data_nascimento, funcao } =
    await getPeopleById(id);

  return (
    <EditPeopleForm
      id={id}
      name={nome}
      RG={rg}
      CPF={cpf}
      admissionDate={data_admissao}
      birthDate={data_nascimento}
      role={funcao}
    />
  );
}
