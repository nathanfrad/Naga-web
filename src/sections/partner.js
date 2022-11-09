/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import Partner from 'assets/partner.png';

const data = {
  subTitle: 'Rapport de recherche de fuite d\'eau',
  title: 'Générez vos fiches d\'interventions facilement',
  description:
    'Les fiches d’interventions sont créées automatiquement et dynamiquement pour un gain de temps dans la saisie des bons d’interventions.',
  btnName: 'Demander une démo',
  btnURL: '#',
};

export default function PartnerSection() {
  return (
    <section sx={{ variant: 'section.partner' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={{ px: [0, null, '40px', 0] }}>
          <Image src={Partner} alt="Partner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    mx: 'auto',
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
};
