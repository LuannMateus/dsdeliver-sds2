import { Product } from './types';

import ProductCard from './ProductCard';
import { checkIsSelected } from './helpers';

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductsList( { products, onSelectProduct, selectedProducts }: Props) {

    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => {
                    return <ProductCard 
                                key={product.id} 
                                product={product}
                                onSelectProduct={onSelectProduct}
                                isSelected={checkIsSelected(selectedProducts, product)} 
                    />
                } )}
                

            </div>

        </div>
    )
}

export default ProductsList;