export interface Pokemon {
  name: string;
  abilities: Ability[];
  sprites: {
    front_default: string;
  };
  stats: Stat[];
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
}
