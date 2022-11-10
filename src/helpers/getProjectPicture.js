import React from 'react';
import School from '../theme/images/online-english-school.jpg';
import Billing from '../theme/images/billing-system.jpg';
import Weather from '../theme/images/weather.jpg';
import Tips from '../theme/images/tips-and-tricks.jpg';
import Kanban2 from '../theme/images/kanban-2.jpg';
import Kanban1 from '../theme/images/kanban-1.jpg';
import Memo from '../theme/images/memo.jpg';
import Records from '../theme/images/record-system.jpg';
import Todo2 from '../theme/images/to-do-list-2.jpg';
import Shoping from '../theme/images/shopping-list.jpg';
import Todo from '../theme/images/to-do-list.jpg';

export default function getProjectPicture(id) {
  const pictures = {
    100: <img src={School} alt="feedback" />,
    200: <img src={Billing} alt="feedback" />,
    300: <img src={Weather} alt="feedback" />,
    400: <img src={Tips} alt="feedback" />,
    500: <img src={Kanban2} alt="feedback" />,
    600: <img src={Kanban1} alt="feedback" />,
    700: <img src={Memo} alt="feedback" />,
    800: <img src={Records} alt="feedback" />,
    900: <img src={Todo2} alt="feedback" />,
    1000: <img src={Shoping} alt="feedback" />,
    1100: <img src={Todo} alt="feedback" />,
  };
  return pictures[id];
}
