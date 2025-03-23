import React from "react";
import Image from "next/image";

export default function FormCadastro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#B4E4E2] to-[#E7F5F4]">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-[400px]">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/img/logo.png"
            alt="Diabetter Logo"
            width={200}
            height={50}
            className="mb-2"
          />
          <span className="text-gray-500 text-sm">Keep your glucose under control</span>
        </div>

        <h2 className="text-2xl font-medium mb-6 text-center">Cadastre-se</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-800 mb-1">Nome Completo</label>
            <input
              type="text"
              className="w-full p-2.5 bg-gray-100 rounded-md border-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2.5 bg-gray-100 rounded-md border-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-1">Senha</label>
            <input
              type="password"
              className="w-full p-2.5 bg-gray-100 rounded-md border-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-1">Confirme sua senha</label>
            <input
              type="password"
              className="w-full p-2.5 bg-gray-100 rounded-md border-none"
            />
          </div>

          

          <button
            type="submit"
            className="w-full p-2.5 bg-[#38B2AC] text-white rounded-md hover:bg-[#2C9A94] transition-colors mt-8"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
} 