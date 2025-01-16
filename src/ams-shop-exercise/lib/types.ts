export interface Product {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  reviews?: ProductReview[];
  thumbnail?: string;
}

interface ProductReview {
  comment: string;
  reviewerEmail: string;
  reviewerName: string;
}
