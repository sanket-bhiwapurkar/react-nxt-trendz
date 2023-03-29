import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartCount = cartList.length
      const prices = cartList.map(item => item.price * item.quantity)
      const bill = prices.reduce((a, b) => a + b)
      return (
        <div className="cart-summary">
          <div className="total">
            <h1 className="order-total">
              Order Total: <span className="bill"> Rs {bill}/-</span>{' '}
            </h1>
          </div>
          <p className="count">{cartCount} items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
