import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_building_websites.svg').default,
    description: (
      <>
        OpenAPI was designed from the ground up with standard technologies
        to be easily used to get your API up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_complete_design.svg').default,
    description: (
      <>
        OpenAPI lets you focus on your API, and does the hard work for you.
        All you need is a single document describing your API.
      </>
    ),
  },
  {
    title: 'Make it Your Own',
    Svg: require('../../static/img/undraw_checking_boxes.svg').default,
    description: (
      <>
        Extend or customize your API. OpenAPI can be extended
        with different user interfaces for docs, code generation and more.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
