import { ReactComponent as Pizza } from './pizza.svg'
import { Product } from './types';

type Props = {
    product: Product;
}

function formatPrice(price: number) {

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return formatter.format(price);
}

function ProductCard( { product }: Props ) {

    const { name, price, description, imageUri } = product

    return (
        <div className="order-card-container">
            <h3 className="order-card-title">
                {name}
            </h3>
            <img src={imageUri} alt="Image ilustrativa" className="order-card-image"/>

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