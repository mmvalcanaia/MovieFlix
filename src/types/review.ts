export type Review = {
  id: number;
  text: string;
  user: {
    id: number;
    name: string;
  };
};
