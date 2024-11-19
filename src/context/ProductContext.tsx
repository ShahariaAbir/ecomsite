import React, { createContext, useContext, useReducer } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  filters: {
    category: string;
    priceRange: [number, number];
    sortBy: string;
  };
}

type ProductAction =
  | { type: 'SET_FILTER'; payload: { key: string; value: any } }
  | { type: 'RESET_FILTERS' }
  | { type: 'SORT_PRODUCTS'; payload: string };

const initialState: ProductState = {
  products: [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      description: "Experience crystal-clear sound with our premium noise-cancelling headphones.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Watch Elite",
      price: 399.99,
      description: "Stay connected with style using our latest smartwatch technology.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Professional Camera Kit",
      price: 1299.99,
      description: "Capture life's moments in stunning detail with our professional camera.",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=1000",
      category: "Electronics"
    },
    {
      id: 4,
      name: "Luxury Watch Collection",
      price: 2499.99,
      description: "Timeless elegance meets modern sophistication.",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=1000",
      category: "Fashion"
    },
    {
      id: 5,
      name: "Designer Sunglasses",
      price: 199.99,
      description: "Premium protection with unmistakable style.",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=1000",
      category: "Accessories"
    }
  ],
  filteredProducts: [],
  filters: {
    category: 'all',
    priceRange: [0, 5000],
    sortBy: 'newest'
  }
};

const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value
        }
      };
    case 'RESET_FILTERS':
      return {
        ...state,
        filters: initialState.filters
      };
    case 'SORT_PRODUCTS':
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: action.payload
        }
      };
    default:
      return state;
  }
};

const ProductContext = createContext<{
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
}>({ state: initialState, dispatch: () => null });

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);