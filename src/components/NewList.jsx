import React from 'react';
import { addIndex } from '../helpers';
import NewItem from './NewItem';

const NewsList = ({ data }) => {
  if (data.loading) return <p>Loading...</p>;
  if (data.error) return <p>{data.error}</p>;

  const newData = addIndex(data.results.articles);
  const itemsList = newData.map(({ id, title, author, url, urlToImage }) => (
    <NewItem
      key={id}
      title={title}
      author={author}
      url={url}
      image={urlToImage}
    />
  ));

  return (
    <section className='main-body'>
      {newData.length > 0 ? (
        <ul>{itemsList}</ul>
      ) : (
        <h1 className='loading'>No Results Found!!</h1>
      )}
    </section>
  );
};

export default NewsList;