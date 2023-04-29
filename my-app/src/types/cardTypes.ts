export type CardType = {
  id: number;
  name: string;
  gender: 'male' | 'female';
  house: 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff' | '';
  ancestry: string;
  patronus: string;
  image: string;
};

export type ApiRes = CardType[];
