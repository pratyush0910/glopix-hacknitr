// components/FlipCard.js
"use client"
import { useState } from 'react';
import styles from './FlipCard.module.css';


const FlipCard = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''}`} onClick={handleFlip}>
    <div className={styles.flipCardInner}>
      <div className={styles.flipCardFront}>
      <div className="content  shadow-3xl " loading="lazy">
      <img src="M669.png" className='rounded-lg h-[18rem]' alt="img" />
      
       
        
        </div>

      </div>
      <div className={styles.flipCardBack}>
     <div className="content shadow-3xl " loading="lazy">
         <img src="669.png" className='h-[18rem] rounded-lg ' alt="img" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default FlipCard;