import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

import styled, { css } from 'react-emotion';

const P = styled('p')`
  margin: 4px 0 0 0;
`;

const buttonMargins = css(`
          margin: 44px 0 20px;
        `);

const HalfScreen = styled('div')(`
  height: 50vh;
  min-height: 200px;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`, ({ lighter }: { lighter?: boolean }) => ({
    background: lighter ? 'rgba(241,96,173,.12)' : 'none',
  }))
// interface ILandingPageProps {
// }

const LandingPage: React.SFC<{}> = () => {
  return (
    <div>
      <HalfScreen>
        <h2>The guessing game</h2>
        <P>Hier kan je voorspellen wanneer de baby geboren wordt, …</P>
        <Link to={'/guess/form'} className={buttonMargins}>
          <Button text={'Waag je gok'} big={true} />
        </Link>
        <Link to={'/guess/results'}>
          bekijk alle voorspellingen
      </Link>
      </HalfScreen>
      <HalfScreen lighter={true}>
        <h2>The naming game</h2>
        <P>Help ons een mooie naam bedenken!</P>
        <Link to={'/'} className={buttonMargins}>
          <Button text={'Under construction'} big={true} disabled={true} />
        </Link>
        <Link to={'/the-naming-game/create-name'}>
          Voeg een naam toe
      </Link>
      </HalfScreen>
    </div>
  )
};

export default LandingPage;
