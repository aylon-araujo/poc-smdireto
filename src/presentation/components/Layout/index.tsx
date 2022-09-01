import { useEffect, useState } from 'react';

import PersistentDrawerLeft from './Layout';

type ItemOpenState = {
  report: boolean | string;
  system: boolean | string;
};

const Layout: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [itemOpen, setItemOpen] = useState<ItemOpenState>({
    report: false,
    system: false,
  });

  const [width, setWidth] = useState<number>(window.innerWidth);
  const isMobile = width <= 768;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (name: string) => {
    if (name === 'report' || name === 'system') {
      setItemOpen(() => ({
        ...itemOpen,
        [name]: !itemOpen[name],
      }));
    }
  };

  return (
    <PersistentDrawerLeft
      open={open}
      itemOpen={itemOpen}
      isMobile={isMobile}
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
      handleClick={handleClick}
    />
  );
};

export default Layout;
