"use client";

import { useEffect, useState } from "react";

const images = [
  "/cais.jpg",
  "/fralda.jpg",
  "/jarra.jpg",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#FBEACB] text-[#3F2D26]">
      <div className="max-w-2xl w-full bg-[#F9FAFB] p-8 rounded-2xl shadow-lg">
        {/* Carrossel */}
        <div className="w-full aspect-[4/3] overflow-hidden rounded-xl relative mb-6">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Imagem ${i + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <h1 className="text-3xl font-bold mb-4 text-center text-[#D46C45]">
          Rifa Online | Fraldas do Amor
        </h1>
        <p className="mb-4">
          Ajude o grupo de gestantes em situação de vulnerabilidade do CSF Curitiba 1! Essa rifa solidária tem como objetivo arrecadar fundos para a compra de fraldas descartáveis para gestantes em situação de vulnerabilidade social.
        </p>
        <p className="mb-4">
          Cada bilhete comprado é um gesto de amor e cuidado que fará toda a diferença na vida dessas famílias.
        </p>

        <div className="bg-[#B4D3A7] p-4 rounded-lg mb-4">
          <p><strong>Prêmio:</strong> Jarra Elétrica Electrolux</p>
          <p><strong>Valor do bilhete:</strong> R$10,00</p>
          <p><strong>Sorteio:</strong> 26/05/2025, ao vivo no Instagram</p>
        </div>

        <div className="flex flex-col gap-4 mb-4">
          <a
            href="https://biolivre.com.br/doacaocsfcuritiba"
            className="bg-[#D46C45] text-white py-2 px-4 rounded-lg text-center hover:bg-[#b45332]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comprar Bilhete / Doar
          </a>
          <a
            href="https://wa.me/5562984306703"
            className="text-[#D46C45] underline text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Doar mantimentos via WhatsApp
          </a>
          <a
            href="https://www.instagram.com/fabiacarvalhoferreira/"
            className="text-[#D46C45] underline text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Siga no Instagram para acompanhar a live
          </a>
        </div>

        <p className="text-sm text-center text-gray-600">
          Toda ajuda é bem-vinda. Obrigado por fazer parte dessa corrente do bem!
        </p>
      </div>
    </main>
  );
}

