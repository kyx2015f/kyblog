import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '日誌',
    Img: require('@site/static/img/blog.jpg').default,
    description: (
      <>
        紀錄日常想法與當下興趣
      </>
    ),
  },
  {
    title: '筆記',
    Img: require('@site/static/img/note.jpg').default,
    description: (
      <>
        任何學習筆記都會在這裡
      </>
    ),
  },
  {
    title: '其他',
    Img: require('@site/static/img/else.jpg').default,
    description: (
      <>
        雜七雜八東東都可能出現
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
