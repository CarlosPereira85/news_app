import React from 'react';

const NewsItem = ({ title, author, url, image }) => {
  return (
    <a className='news-item' rel='noreferrer' target='_blank' href={url}>
      <li>
        <p>{title}</p>
        <p className='author'>{author}</p>
        <img src={image} alt={title} />
      </li>
    </a>
  );
};

export default NewsItem;