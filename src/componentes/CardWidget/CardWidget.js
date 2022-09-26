import cart from  './Assets/cart.svg';

const CardWidget = () => {
    return(
        <div>
            <img src={cart} alt="carrito" width="30" height="30"/>
        </div>
    );
}

export default CardWidget;