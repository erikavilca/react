
import PropTypes from 'prop-types'; 

function ItemListContainer({ nameGreeting }) {
  return (
    <div>
      <h3>¡Bienvendida {nameGreeting}!</h3>
      <p> El proximo proyecto que quiero hacer es de una tienda como Mercado Libre, obvio un poco menos Pro.  </p>
    </div>
  );
}
  ItemListContainer.propTypes = {
  nameGreeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
