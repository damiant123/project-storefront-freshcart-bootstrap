export interface FreshProductsDetailedQueryModel {
  readonly name: string;
  readonly price: number;
  readonly imageUrl: string;
  readonly rating: {
    readonly value: number;
    readonly starsValues: number[];
    readonly ratingCount: number;
  };
}
