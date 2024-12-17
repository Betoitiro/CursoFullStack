import React from 'react';

const Inicial = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-12 px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bem-vindo ao <span className="text-indigo-600">BookSport</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Descubra resenhas incríveis de livros, leia as opiniões de outros leitores e compartilhe sua experiência!
        </p>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Explore nossas categorias:
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li><a href="/resenhas" className="text-indigo-600 hover:underline">Resenhas de Livros Recentes</a></li>
            <li><a href="/sobre-nos" className="text-indigo-600 hover:underline">Sobre Nós</a></li>
            <li><a href="/contato" className="text-indigo-600 hover:underline">Fale Conosco</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inicial;
