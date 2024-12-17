import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Resenhas = () => {
    const [resenhas, setResenhas] = useState([]);

    useEffect(() => {
        console.log("Requisição iniciada...");
        axios.get("http://localhost:8080/v1/book")
            .then(response => {
                console.log("Resposta recebida:", response.data);
                setResenhas(response.data);
            })
            .catch(error => console.error("Error ao consultar as resenhas", error));
    }, []);

    return (
        <div className="container mx-auto p-6 bg-gray-100">
            <h1 className="text-3xl font-semibold text-center mb-8">Resenhas</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    resenhas.map(resenha => (
                        <div key={resenha.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <Link to={`/visualiza-resenha/${resenha.id}`} className="block hover:bg-gray-50">
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold text-gray-800 truncate">{resenha.tituloLivro}</h2>
                                    <h3 className="text-md text-gray-600 mt-1">{resenha.autor.name}</h3>
                                    <p className="text-sm text-gray-500 mt-2">{resenha.resumo}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Resenhas;
