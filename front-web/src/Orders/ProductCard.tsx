import { Product } from './types';
import { formatPrice } from './helpers';


type Props = {
    product: Product;
    onSelectProduct: (product: Product) => void;
    isSelected: boolean;
}


function ProductCard( { product, onSelectProduct, isSelected }: Props ) {

    const { name, price, description, imageUri } = product

    return (
        <div className={`order-card-container ${isSelected ? 'selected' : ''}`} 
        onClick={_ => onSelectProduct(product) } >
            <h3 className="order-card-title">
                {name}
            </h3>
            <img src={imageUri} alt="Imagem ilustrativa da comida." className="order-card-image"/>

                <h3 className="order-card-price">
                    {formatPrice(price)}
                </h3>
                <div className="order-card-description">
                    <h3>Descrição</h3>
                    <p>
                        {description}
                    </p>
                </div>
        </div>
    )
}

export default ProductCard;