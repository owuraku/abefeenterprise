export interface ProductDetails {
  id: string;
  name: string;
  category: number;
  sellingPrice: number;
  costPrice: number;
  currentStock: number;
  status: boolean;
}

export interface EditProductDetails {
  name: string;
  category: number;
  sellingPrice: number;
  costPrice: number;
  status: boolean;
}
