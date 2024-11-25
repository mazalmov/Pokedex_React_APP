
//USE Type:
//components/pokemonTypeColor.ts
type PokemonType = 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'normal' | 'ice' | 'fighting' | 'poison' | 'ground' | 'flying' | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel'  | 'fairy'     ;
 
export const PokemonTypeColor: Record<PokemonType, string> = {

	normal:   '#A8A77A',
	fire:   '#EE8130',
	water:   '#6390F0',
	electric:   '#F7D02C',
	grass:   '#7AC74C',
	ice:   '#96D9D6',
	fighting:   '#C22E28',
	poison:   '#A33EA1',
	ground:   '#E2BF65',
	flying:   '#A98FF3',
	psychic:   '#F95587',
	bug:   '#A6B91A',
	rock:   '#B6A136',
	ghost:   '#735797',
	dragon:   '#6F35FC',
	dark:   '#705746',
	steel:   '#B7B7CE',
	fairy:   '#D685AD',

};

// const fireColor = PokemonTypeColor['fire']; // מחזיר '#F08030'

//ENUM:
// enum PokemonType {
//     Fire = 'fire',
//     Water = 'water',
//     Grass = 'grass',
//     Electric = 'electric',
//     Psychic = 'psychic',
//   }
  
//   const pokemonTypeColor: Record<PokemonType, string> = {
//     [PokemonType.Fire]: '#F08030',
//     [PokemonType.Water]: '#6890F0',
//     [PokemonType.Grass]: '#78C850',
//     [PokemonType.Electric]: '#F8D030',
//     [PokemonType.Psychic]: '#F85888',
//   };
  
//   // שימוש:
//   const waterColor = pokemonTypeColor[PokemonType.Water]; // מחזיר '#6890F0'
  