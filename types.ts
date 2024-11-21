interface IGetParams {
  category: string;
  fields: Array<Field>;
}

type Field = keyof Item;

type Enclosure = {
  link: string;
  type: "image/jpeg" | "image/jpg" | "image/png";
};

type Item = {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  author: string;
  enclosure: Enclosure;
};

type NewsResponse = {
  status: string;
  feed: object;
  items: Item[];
};

export { IGetParams, NewsResponse, Field };
