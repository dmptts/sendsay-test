import React, { ReactElement } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ToggleButton from './ToggleButton';

interface ITogglerProps {
  children: ReactElement | ReactElement[];
  defaultValue: string | number;
  className?: string;
}

export default function Toggler({
  children,
  defaultValue,
  className,
}: ITogglerProps) {
  const [selected, setSelected] = useState(defaultValue);

  const childrenWithInjectedProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      isActive: selected === child.props.value,
      changeActive: () => {
        setSelected(child.props.value);
      },
    });
  });

  return <Root className={className}>{childrenWithInjectedProps}</Root>;
}

Toggler.Option = ToggleButton;

const Root = styled.div`
  display: flex;
  padding: 1px;

  background-color: #f3f4f6;
  border-radius: 6px;
`;
