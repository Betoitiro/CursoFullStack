import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VisualizaResenha = () => {
  const { id } = useParams();
  const [resenha, setResenha] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/v1/book/${id}`)
      .then((response) => {
        console.log(response.data);
        setResenha(response.data);
      })
      .catch((error) => console.error('Erro ao carregar a resenha ', error));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Capa Modernista */}
        <div className="relative h-64 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold drop-shadow-lg">
            {resenha.titulo || 'Título da Resenha'}
          </h1>
          <div className="absolute bottom-0 w-full h-12 bg-white rounded-t-lg"></div>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Detalhes da Resenha</h2>

          <div className="mb-4">
            <p className="text-gray-600">
              <span className="font-semibold">Por:</span> {resenha.autor?.name || 'Autor Desconhecido'}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Registro:</span> {resenha.autor?.registro || 'N/A'}
            </p>
          </div>

          <div className="text-gray-700 leading-relaxed border-t pt-4">
            <p>{resenha.conteudo || 'Conteúdo da resenha indisponível no momento.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualizaResenha;
