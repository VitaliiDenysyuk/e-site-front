import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";

const ProductDetails = () => {
  //fetch slug
  const router = useRouter();
  console.log(router);
  //fetch product from strapi
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: router.query.slug },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  const product = data.products.data[0];
  console.log(product);
  const { title, price, image, descriptions } = product.attributes;
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h3>{title}</h3>
        <p>{descriptions}</p>
      </div>
      <div>
        <span>Quantity</span>
        <button>Plus</button>
        <p>0</p>
        <button>Minus</button>
      </div>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductDetails;
