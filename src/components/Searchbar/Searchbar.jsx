import styles from './Searchbar.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const Searchbar = ({ onSubmit }) => {
  const { form, input, button, searchbar, label } = styles;

  return (
    <header className={searchbar}>
      <form className={form} onSubmit={onSubmit}>
        <button type="submit" className={button}>
          <span className={label}>Search</span>
        </button>
        <input
          key={nanoid()}
          name="queryInput"
          className={input}
          type="text"
          autoComplete="off"
          placeholder="Search images..."
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};