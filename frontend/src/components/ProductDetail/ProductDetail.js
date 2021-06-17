import { formatAmount, formatDate } from "../../utils/format";
import "./ProductDetail.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
/*
 - Fragment tags as return only returns one thing<> </>*/
export default function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchProductById = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:3001/bank/products/${productId}`
        );
        if (res?.data?.product) setProduct(res.data.product);
      } catch (err) {
        setError(err);
      }

      setIsLoading(false);
    };
    fetchProductById();
  }, [productId]);
  const renderProductContent = () => {
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <p className="description">No product found</p>;

    return (
      <>
        <p className="description">{product?.description}</p>
        <div className="meta">
          <p className={`price ${product?.price < 0 ? "minus" : ""}`}>
            {formatAmount(product?.price)}
          </p>
          <p className="date">{formatDate(product?.postedAt)}</p>
        </div>
      </>
    );
  };

  return (
    <div className="productDetail">
      <div className="card">
        <div className="title">
          <h3>product #{productId}</h3>
          <p className="category">{product?.category}</p>
        </div>

        {renderProductContent()}
      </div>
    </div>
  );
}
