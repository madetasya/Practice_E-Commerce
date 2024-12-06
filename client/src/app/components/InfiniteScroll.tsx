import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../components/ProductCard";
import { ProductType } from "../types";

interface ProductProps {
  data: ProductType[];
}

const Scroll: React.FC<ProductProps> = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState<ProductType[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setVisibleItems(data.slice(0, 10));
  }, [data]);

  const fetchData = () => {
    if (visibleItems.length >= data.length) {
      setHasMore(false);
      return;
    }

    const nextItems = data.slice(
      visibleItems.length,
      visibleItems.length + 5
    );
    setVisibleItems((prevItems) => [...prevItems, ...nextItems]);
  };

  return (
    <InfiniteScroll
      dataLength={visibleItems.length}
      next={fetchData}
      hasMore={hasMore}
      loader={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <h4
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              color: "#6A0DAD",
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "1.5px",
              animation: "pulse 1.5s infinite",
            }}
          >
            Matte kudasai UwU
          </h4>
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "5px solid #6A0DAD",
              borderTop: "5px solid transparent",
              borderRadius: "50%",
              marginTop: "20px",
              animation: "spin 1s linear infinite",
            }}
          ></div>
        </div>
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-screen-lg">
          {visibleItems.map((product: ProductType, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default Scroll;
