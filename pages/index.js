import Head from "next/head";
import Link from "next/link";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import Product from "../components/Products";
import { Gallery } from "../styles/Gallery";

export default function Home() {
  //fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  const products = data.products.data;
  console.log(products);

  return (
    <div>
      <Head>
        <title>Styled homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>hello Next</h1>
        <Gallery>
        {products.map((product, ind) => (
          <Product key = {product.attributes.slug} product={product} />
        ))}
        </Gallery>
      </main>
    </div>
  );
}
