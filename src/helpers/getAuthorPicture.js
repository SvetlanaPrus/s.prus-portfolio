import React from 'react';
import Kim from '../theme/images/kim.jpg';
import William from '../theme/images/william.jpg';
import Dmytro from '../theme/images/dmytro.jpg';
import Anuradha from '../theme/images/Anuradha.jpg';
import Ivan from '../theme/images/ivan.jpg';
import Gala from '../theme/images/galja.jpg';

export default function getAuthorPicture(name) {
  const pictures = {
    Kim: <img src={Kim} alt="feedback" />,
    William: <img src={William} alt="feedback" />,
    Dmytro: <img src={Dmytro} alt="feedback" />,
    Anuradha: <img src={Anuradha} alt="feedback" />,
    Ivan: <img src={Ivan} alt="feedback" />,
    Gala: <img src={Gala} alt="feedback" />,
  };
  return pictures[name];
}
