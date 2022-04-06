import React, {
  FC, useRef, useEffect, useState,
} from 'react';

interface Props {
  button: JSX.Element
  content: JSX.Element
}

const Toggle: FC<Props> = ({ button, content }) => {
  const buttonEl = useRef<HTMLButtonElement>(null);
  const contentEl = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const displayChange = () => {
    if (buttonEl.current && contentEl.current) {
      buttonEl.current.setAttribute('aria-expanded', `${open}`);
      contentEl.current.style.display = open ? 'block' : 'none';
    }
  };

  const handleClick = () => {
    setOpen(!open);
    displayChange();
  };

  useEffect(() => {
    if (buttonEl.current && contentEl.current) {
      buttonEl.current.setAttribute('aria-expanded', 'false');
      contentEl.current.style.display = 'none';
    }
  }, []);

  return (
    <>
      <button type="button" ref={buttonEl} onClick={handleClick}>{button}</button>
      <div ref={contentEl}>
        {content}
      </div>
    </>
  );
};

export default Toggle;
