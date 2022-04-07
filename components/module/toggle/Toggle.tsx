import React, {
  FC, useRef, useEffect, useState,
} from 'react';
import styles from './Toggle.module.scss';

interface Props {
  button: JSX.Element
  content: JSX.Element
}

const Toggle: FC<Props> = ({ button, content }) => {
  const buttonEl = useRef<HTMLButtonElement>(null);
  const contentEl = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const [open, setOpen] = useState(false);
  let height = 0;

  const displayChange = () => {
    if (buttonEl.current && contentEl.current) {
      buttonEl.current.setAttribute('aria-expanded', `${open}`);

      if (open) {
        toggleOpen();
      } else {
        toggleClose();
      }
    }
  };

  const toggleOpen = () => {
    contentEl.current?.style?.setProperty('display', 'block');
    height = contentEl.current ? contentEl.current.clientHeight : 0;
    contentEl.current?.style?.setProperty('height', '0');

    setTimeout(() => {
      contentEl.current?.style?.setProperty('height', `${height}px`);
    }, 10);
  };

  const toggleClose = () => {
    if (contentEl.current) {
      contentEl.current.style.height = `${contentEl.current.clientHeight}px`;
    }

    setTimeout(() => {
      contentEl.current?.style?.setProperty('height', '0');
    }, 10);
  };

  const handleClick = () => setOpen(!open);

  useEffect(() => {
    if (buttonEl.current && contentEl.current) {
      buttonEl.current.setAttribute('aria-expanded', 'false');
      contentEl.current.style.display = 'none';

      if (contentEl.current.id === '') {
        contentEl.current.id = `js-toggle__${Math.random().toString().substring(2)}`;
      }

      buttonEl.current.setAttribute('aria-controls', contentEl.current.id);

      contentEl.current.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'height') {
          if (buttonEl.current?.getAttribute('aria-expanded') === 'false') {
            contentEl.current?.style?.setProperty('display', 'none');
          }
          contentEl.current?.style?.setProperty('height', '');
        }
      });
    }
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    displayChange();
  }, [open]);

  return (
    <>
      <button type="button" ref={buttonEl} onClick={handleClick}>{button}</button>
      <div ref={contentEl} className={styles.content}>{content}</div>
    </>
  );
};

export default Toggle;
