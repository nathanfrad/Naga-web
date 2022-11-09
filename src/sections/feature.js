/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Smart',
    title: 'Fonctionnalités intelligentes',
    text:
      'Des rapports téléchargeable et modifiable après export.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Performance',
    title: 'Performances rapides',
    text:
      ' Une application performante pour augmenter la productivité des collaborateurs.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Content',
    title: 'Contenu illimité',
    text:
      'Création de rapport sans limite.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Customization',
    title: 'Personnalisation illimitée',
    text:
      'Choisisez le type d\'étapes, les couleurs du rapport, etc ... ',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Productivity',
    title: 'Booster la productivité',
    text:
      'Moins de temps consacré a l’édition des rapport de fuite, et plus de temps sur le terrain.',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'Service client',
    text:
      'Notre équipe est disponible et réactive a vos demandes.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Tout en main"
          title="Découvrez les fonctionnalités passionnante de l'application"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
