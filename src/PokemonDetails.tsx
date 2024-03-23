import React from 'react';
import { useGetPokemonByNameQuery } from './services/pokemonApi';
import { useTranslation } from 'react-i18next'; // Импортируем библиотеку для перевода

interface PokemonDetailsProps {
  pokemonName: string;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemonName }) => {
  const { t } = useTranslation(); // Инициализируем хук перевода
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);

  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>{data?.name}</h2>
      <img src={data?.sprites.front_default} alt={data?.name} />
      <h3>{t('Abilities')}</h3> {/* Используем перевод для заголовка */}
      <ul>
        {data?.abilities.slice(0, 4).map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>{t('Stats')}</h3> {/* Используем перевод для заголовка */}
      <ul>
        {data?.stats.slice(0, 4).map((stat) => (
          <li key={stat.stat.name}>
            {t(stat.stat.name)}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetails;
