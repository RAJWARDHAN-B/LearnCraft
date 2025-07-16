// Centralized course data for Learncraft
import dataScience from '../assets/data-science.jpg';
import digitalMarketing from '../assets/digital-marketing.jpg';
import civilEngineering from '../assets/civil-engineering.jpg';

const courses = [
  {
    id: 1,
    title: 'Data Science',
    author: 'Colt stelle',
    rating: 4.4,
    reviews: 4,
    price: 20,
    classes: 12,
    students: 150,
    image: dataScience,
    bestSeller: true,
    category: 'data-science',
  },
  {
    id: 2,
    title: 'Digital Marketing',
    author: 'Colt stelle',
    rating: 4.5,
    reviews: 4.5,
    price: 20,
    classes: 12,
    students: 130,
    image: digitalMarketing,
    bestSeller: true,
    category: 'digital-marketing',
  },
  {
    id: 3,
    title: 'Civil Engineering',
    author: 'Colt stelle',
    rating: 5,
    reviews: 5,
    price: 20,
    classes: 12,
    students: 120,
    image: civilEngineering,
    bestSeller: true,
    category: 'civil-engineering',
  },
  // Add more courses as needed
];

export default courses; 