import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

import styled from 'react-emotion';

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
        <p>Hier kan je voorspellen wanneer de baby geboren wordt, …</p>
        <Link to={'/guess/form'}>
          <Button text={'Waag je gok'} big={true} />
        </Link>
        <Link to={'/guess/results'}>
          bekijk de voorspellingen
      </Link>
      </HalfScreen>
      <HalfScreen lighter={true}>
        <h2>The naming game</h2>
        <p>Help ons een mooie naam bedenken!</p>
        <Link to={'/'}>
          <Button text={'Under construction'} big={true} disabled={true} />
        </Link>
        <Link to={'/guess/results'}>
          Een naam toevoegen
      </Link>
      </HalfScreen>
    </div>
  )
};

export default LandingPage;
