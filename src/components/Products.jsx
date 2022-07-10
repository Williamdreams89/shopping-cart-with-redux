import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { images } from "../components/images";
import TagsButton from "./TagsButton";

const StyledProducts = styled.div`
  width: 100vw;
  text-align: center;

  h2 {
    color: orangered;
    margin-bottom: 2rem;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    height: 3rem;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .card {
    display: grid;
    width: 90%;
    height: 400px;
    margin: 0 auto;
    position: relative;
    img {
      width: 100%;
      height: 250px;
    }

    
  }
`;

export default function Products() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter(async(image) => image.tag === tag));
  }, [tag]);

  return (
    <StyledProducts>
      <h2>Products</h2>
      <div className="buttons">
        <TagsButton name="all" setTag={setTag} />
        <TagsButton name="fashion" setTag={setTag} />
        <TagsButton name="home" setTag={setTag} />
        <TagsButton name="technology" setTag={setTag} />
      </div>
      <div>
        {filteredImages.map((image) => (
          <div key={image.id} className="card">
            <img src={`../images/${image.imageName}`} alt={image.imageName} />
            <div className="product__detail">
              <h5>{image.title}</h5>
              <a href="#index">View Detail</a>
            </div>
          </div>
        ))}
      </div>
    </StyledProducts>
  );
}
