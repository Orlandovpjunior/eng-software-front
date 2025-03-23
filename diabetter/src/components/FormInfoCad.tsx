'use client';

import { useState } from "react";

interface FormData {
  dataNascimento: string;
  sexo: string;
  peso: string;
  altura: string;
  tipoDiabetes: string;
  tipoInsulina: string;
  quantidadeInsulina: string;
  glicemia: string;
  comorbidades: string;
  horarios: string[];
  novoHorario: string; 
}

export default function Perfil() {
  const [formData, setFormData] = useState<FormData>({
    dataNascimento: "",
    sexo: "",
    peso: "",
    altura: "",
    tipoDiabetes: "",
    tipoInsulina: "",
    quantidadeInsulina: "",
    glicemia: "",
    comorbidades: "",
    horarios: [],
    novoHorario: "", 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const adicionarHorario = () => {
    if (formData.novoHorario) {
      setFormData({
        ...formData,
        horarios: [...formData.horarios, formData.novoHorario],
        novoHorario: "",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados salvos:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-[#f9f9f9] shadow-[0px_10px_20px_rgba(0,0,0,0.2)] rounded-xl p-8 w-full max-w-3xl">

        <h2 className="text-center text-2xl font-bold mb-6">Complete seu perfil:</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold">Data de Nascimento</label>
              <input
                type="date"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
                className="border p-2 rounded w-full bg-gray-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Sexo</label>
              <select
                name="sexo"
                value={formData.sexo}
                onChange={handleChange}
                className="border p-2 rounded w-full bg-gray-200"
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outros">Outros</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold">Peso</label>
              <input
                type="text"
                name="peso"
                value={formData.peso}
                onChange={handleChange}
                className="border p-2 rounded w-full bg-gray-200"
                placeholder="kg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold">Altura</label>
              <input
                type="text"
                name="altura"
                value={formData.altura}
                onChange={handleChange}
                className="border p-2 rounded w-full bg-gray-200"
                placeholder="cm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Tipo de diabetes</label>
              <input
                type="text"
                name="tipoDiabetes"
                value={formData.tipoDiabetes}
                onChange={handleChange}
                className="border p-2 rounded w-full bg-gray-200"
                
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-semibold">Tipo de insulina</label>
              <input
                type="text"
                name="tipoInsulina"
                value={formData.tipoInsulina}
                onChange={handleChange}
                className="border p-2 rounded w-full bg-gray-200"
                
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Quantidade (UI)</label>
              <input
                type="text"
                name="quantidadeInsulina"
                value={formData.quantidadeInsulina}
                onChange={handleChange}
                className="border p-2 rounded w-full bg-gray-200"
                placeholder="UI"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold">Glicemia atual (mg/dl)</label>
            <input
              type="text"
              name="glicemia"
              value={formData.glicemia}
              onChange={handleChange}
              className="border p-2 rounded w-full bg-gray-200"
              placeholder="mg/dL"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Possui outras comorbidades?</label>
            <input
              type="text"
              name="comorbidades"
              value={formData.comorbidades}
              onChange={handleChange}
              className="border p-2 rounded w-full bg-gray-200"
              placeholder="Ex: Hipertensão, Colesterol elevado..."
            />
          </div>
          <div className="text-center">
            <label className="block font-semibold">Horários de controle diário:</label>
            <div className="flex justify-center gap-3">
              
              <button type="button" onClick={adicionarHorario} className="bg-gray-200 px-4 py-2 rounded font-semibold">
                <input
                type="time"
                name="novoHorario"
                value={formData.novoHorario}
                onChange={handleChange}
                className=" p-2 rounded text-center bg-gray-200"
                />
                +</button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {formData.horarios.map((horario, index) => (
                <div
                key={index}
                className="bg-gray-300 px-4 py-2 rounded text-lg font-semibold text-center"
                style={{ flexBasis: 'calc(25% - 0.5rem)', maxWidth: 'calc(25% - 0.5rem)' }}
                >
                {horario}
                </div>
            ))}
            </div>

          <div className="flex justify-end mt-6">
            <button type="submit" className=" bg-teal-600 text-white px-6 py-2 rounded-lg text-lg font-semibold">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}