// pages/index.js
import styles from '../styles/Home.module.css';
import Carousel from '../components/Carousel';
import Experiences from '../components/Experiences';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del proyecto 2.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción del proyecto 3.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Proyecto 4',
    description: 'Descripción del proyecto 4.',
    image: 'https://via.placeholder.com/300',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenidos al Semillero de Proyectos</h1>
      <p className={styles.description}>Explora los proyectos y contribuye con el tuyo.</p>
      <div className="margin-bottom">
        <Carousel projects={projects} />
      </div>
      <Experiences />
    </div>
  );
}
