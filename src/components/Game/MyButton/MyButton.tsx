import React from 'react';
import './MyButton.css';

interface Props extends React.PropsWithChildren {
  onButtonCLick: React.MouseEventHandler;
}

const MyButton: React.FC<Props> = ({onButtonCLick, children}) => {
  return (
    <button className="MyButton" type="button" onClick={onButtonCLick}>{children}</button>
  );
};

export default MyButton;