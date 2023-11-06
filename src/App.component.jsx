import { AppStyle } from './App.style';
import { Timeline } from 'components/Timeline/Timeline.component';

const { Main } = AppStyle;

export const App = () => {
  return (
    <Main>
      <Timeline />
    </Main>
  );
}

