import { AppModes } from '../const';
import ToggleButton from './ToggleButton';
import Toggler from './Toggler';
import { ReactComponent as EyeIcon } from './../img/icon-eye.svg';
import { ReactComponent as ChevronIcon } from './../img/icon-chevron.svg';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { changeMode } from '../store/appModeSlice';

interface IAppModeTogglerProps {
  className?: string;
}

export default function AppModeToggler({ className }: IAppModeTogglerProps) {
  const dispatch = useAppDispatch();
  const appMode = useAppSelector((state) => state.appMode.mode);

  return (
    <Toggler defaultValue={appMode} className={className}>
      <ToggleButton
        value={AppModes.RUNTIME}
        callback={() => dispatch(changeMode(AppModes.RUNTIME))}
      >
        <StyledEyeIcon />
        Runtime
      </ToggleButton>
      <ToggleButton
        value={AppModes.CONSTRUCTOR}
        callback={() => dispatch(changeMode(AppModes.CONSTRUCTOR))}
      >
        <StyledChevronIcon />
        Constructor
      </ToggleButton>
    </Toggler>
  );
}

const StyledEyeIcon = styled(EyeIcon)`
  width: 20px;
  height: 20px;
`;

const StyledChevronIcon = styled(ChevronIcon)`
  width: 20px;
  height: 20px;
`;
