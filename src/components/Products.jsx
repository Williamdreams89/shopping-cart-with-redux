import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { images } from "../components/images";
import TagsButton from "./TagsButton";

const StyledProducts = styled.div`
  width: 95vw;
  text-align: center;
  margin: auto;

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
    width: 80%;
    height: 450px;
    margin: 1rem auto;
    position: relative;
    background-color: orangered;
    border-radius: 5%;
    img {
      width: 90%;
      height: 250px;
      padding-top: 1rem;
    }
  }

  .detail__button{
    width: 97%;
    display: flex;
    justify-content: flex-end;

  }

  .product__detail {
    width: 90%;
    margin: 10px auto;
    height: 120px;
    color: white;
    display: flex;
    flex-direction: column;

    a {
      color: white;
      text-decoration: none;
      padding: 5px;
      font-size: 12px;
      background-color: #333;
      border-radius: 5px;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    .all__products {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .card {
      height: max-content;
    }
  }

  @media screen and (min-width: 801px) {
    .all__products {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .card {
      img {
        height: 66%;
      }
    }

    .search__container{
      max-width: 60vw;
      
    }
  }

  .search__container {
    display: flex;
    margin-bottom: 1rem !important;
    justify-content: flex-end;
    gap: 1rem;
    width: 80%;
    margin: auto;

    input {
      flex-grow: 3;
      padding: 10px;
      text-transform: capitalize;
      border-radius: 10px;
      border: 1px solid blue;
      outline: none;

      &:focus {
        border: none;
        box-shadow: -2px -2px 5px orangered, 2px 2px 5px orangered;
        font-weight: bolder;
      }
    }

    button:nth-of-type(1){
      flex-grow: .41;
      background-color: orangered;
      border: none;
      border-radius: 6px;
      color: lightgrey;
      font-weight: bold;
      cursor: pointer;
    }
    
    button:nth-of-type(2){
      cursor: pointer;
      flex-grow: .41;
      background-color: white;
      border: 1px solid #333;
      border-radius: 6px;
      color: black;
      font-weight: bold;

      &:hover{
        background-color: #333;
        color: white;
      }
    }
  }
`;

export default function Products() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  const handleSearch = async (event) =>{
    event.preventDefault();

  }

  const handleClearSearch = async (event) =>{
    event.preventDefault();
  }

  return (
    <StyledProducts id="#products">
      <h2>Products</h2>
      <div className="search__container">
        <input
          type="text"
          placeholder="search a product ..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" onClick={()=> handleSearch()}>Search</button>
        <button type="submit" onClick={()=> handleClearSearch()}>Clear Search</button>
      </div>
      <div className="buttons">
        <TagsButton name="all" setTag={setTag} tag={tag} />
        <TagsButton name="fashion" setTag={setTag} tag={tag} />
        <TagsButton name="home" setTag={setTag} tag={tag} />
        <TagsButton name="technology" setTag={setTag} tag={tag} />
      </div>
      <div className="all__products">
        {filteredImages.map((image) => (
          <div key={image.id} className="card">
            <img src={`../images/${image.imageName}`} alt={image.imageName} />
            <div className="product__detail">
              <h4>{image.title}</h4>
              <p>
                Lorem ipsum dolor minima, qui aspernatur maxime ea explicabo,
                quasi doloribus rem ullam?
              </p>
              <div style={{ marginTop: "10px" }} className="detail__button">
                <a href="#index">View Detail</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyledProducts>
  );
}
