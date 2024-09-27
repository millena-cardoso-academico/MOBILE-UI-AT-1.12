import { useState } from 'react';
import ListaDeCompras from './ListaDeCompras';

const App = () => {
  const [itens, setItens] = useState([
    {
      id: 1,
      nome: 'Estátua Naruto Uzumaki - Edição Limitada',
      descricao: 'Figura colecionável de Naruto em modo Sábio, altamente detalhada, feita de resina, com edição limitada a 500 unidades no mundo.',
      valorUnitario: 1200.00,
      quantidade: 1,
      avaliacao: 4.8,
    },
    {
      id: 2,
      nome: 'Action Figure Goku Super Saiyajin - Dragon Ball Z',
      descricao: 'Action figure de Goku transformado em Super Saiyajin 2, com detalhes precisos e 30 pontos de articulação.',
      valorUnitario: 350.00,
      quantidade: 3,
      avaliacao: 4.7,
    },
    {
      id: 3,
      nome: 'Poster Autografado - Attack on Titan',
      descricao: 'Poster exclusivo de Attack on Titan, autografado pelo criador Hajime Isayama, edição especial de colecionador.',
      valorUnitario: 850.00,
      quantidade: 1,
      avaliacao: 5.0,
    },
    {
      id: 4,
      nome: 'Blu-ray Box Completo - Fullmetal Alchemist Brotherhood',
      descricao: 'Coleção completa em Blu-ray da série Fullmetal Alchemist Brotherhood, incluindo todos os 64 episódios remasterizados.',
      valorUnitario: 500.00,
      quantidade: 2,
      avaliacao: 4.9,
    },
    {
      id: 5,
      nome: 'Funko Pop! - Luffy Gear Fourth - One Piece',
      descricao: 'Funko Pop exclusivo do personagem Luffy em sua forma Gear Fourth, de One Piece. Edição limitada.',
      valorUnitario: 150.00,
      quantidade: 4,
      avaliacao: 4.5,
    },
  ]);

  const handleQuantidadeChange = (id, quantidade) => {
    const novosItens = itens.map(item =>
      item.id === id ? { ...item, quantidade: Math.max(quantidade, 0) } : item
    );
    setItens(novosItens);
  };

  const handleRemoverItem = id => {
    const novosItens = itens.filter(item => item.id !== id);
    setItens(novosItens);
  };

  const valorTotalCompra = itens.reduce(
    (acc, item) => acc + item.valorUnitario * item.quantidade,
    0
  );

  return (
    <div>
      <ListaDeCompras
        itens={itens}
        valorTotalCompra={valorTotalCompra}
        onQuantidadeChange={handleQuantidadeChange}
        onRemoverItem={handleRemoverItem}
      />
    </div>
  );
};

export default App;
