import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {axiosGeneral} from "../config/globals";


const Wrapper = styled.div`
  background-color: yellow;
  padding: 30px;
`;

const Title = styled.h1`
  color: green;
`;

const NewsItem = styled.a`
  background-color: ${({backgroundColor}) => backgroundColor || "gray" };
  padding: 20px;
  display: block;
  ${({noBorder}) => {
    if (!noBorder) {
      return "border-bottom: 1px solid black;";
    }
  }}
`;
const NewsItemTitle = styled.h4`
  margin: 0;
  padding: 0;
`;
const NewsItemDate = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

const News = ({
  label,
  name
}) => {
  const [news, setNews] = useState([]);

  useEffect(()=> {
    fetchNewsAsync();
  }, []);

  const fetchNewsAsync = async () => {
    try {
      const response = await axiosGeneral.get('/news');
      const {data,status} = response;
      if(status === 200)
        setNews(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  
  return (
    <Wrapper>
      <Title>News</Title>
      {news.map((item, index) => (
        <NewsItem key={index}>
          <NewsItemTitle>{item.title}</NewsItemTitle>
          <NewsItemDate>{item.date}</NewsItemDate>
        </NewsItem>
      ))}
    </Wrapper>
  )
};

export default News;
