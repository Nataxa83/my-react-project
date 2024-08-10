// export default function Product({ name, imgUrl, price }) {

//     return (
//         <div>
//             <h2>{name}</h2>
//             <img src = {imgUrl} alt = {name} width = "200" />
//             <p>Price: {price} credits</p>
//         </div>
//     );
// }
//////////////////

// export default function Product({
//      name,
//      imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//      price,
//     }) {
//      return (
//      <div>
//      <h2>{name}</h2>
//      <img src={imgUrl} alt={name} width="480" />
//      <p>Price: {price} credits</p>
//    </div>
//     );
//     }
///////////////////

import PropTypes from 'prop-types';

const Product = ({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price,
}) => (
  <div>
		<img src={imgUrl} alt={name} width="480" />
		<h2>{name}</h2>
    <p>Price: {price} credits</p>
  </div>
);

// Опис типів пропсів компонента 
Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default Product;

