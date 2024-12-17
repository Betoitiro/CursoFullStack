import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Entre em Contato</h3>
          <p>Email: contato@bookspot.com</p>
          <p>Telefone: (11) 1234-5678</p>
          <p>Endereço: Rua Fictícia, 123 - São Paulo</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Nos siga</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              Instagram
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              Twitter
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Sobre</h3>
          <p>
            BookSpot é um site dedicado a compartilhar resenhas e análises de livros para entusiastas da leitura. Explore nossas avaliações e encontre seu próximo livro favorito!
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} BookSpot. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
