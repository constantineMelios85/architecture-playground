import React from 'react';
import { Button } from '@mui/material';

import styles from './styles/Buttons.module.scss';

const Buttons = ({ handleNext, handlePrev, disablePrev }) => {
  return (
    <div className={styles.container}>
      <Button color="error" variant="outlined" onClick={handlePrev} disabled={disablePrev}>
        Previous
      </Button>
      <Button color="primary" variant="outlined" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default Buttons;
