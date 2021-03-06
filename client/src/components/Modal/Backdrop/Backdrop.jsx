import React from 'react';
import PropTypes from 'prop-types';

import styles from './Backdrop.css';

const Backdrop = ({ showModal }) => (showModal
  ? (
    <div className={styles.Background}>
      <div className={styles.Backdrop} />
    </div>
  )
  : null);

Backdrop.propTypes = {
  showModal: PropTypes.bool.isRequired,
};

export default Backdrop;
