export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
  likes: number;
  user: {
    name: string;
  };
}

export interface FetchImagesResponse {
  results: Image[];
  total: number;
}
