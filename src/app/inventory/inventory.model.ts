export interface UpdateStockDetail {
  description: string;
  updateNumber: number;
}

export interface InventoryDetails {
  id: string;
  name: string;
  category: string;
  currentStock: number;
  sellingPrice: number;
  status: boolean;
}
