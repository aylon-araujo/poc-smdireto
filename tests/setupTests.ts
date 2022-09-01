import { render } from '@testing-library/react';
import UserEvents from '@testing-library/user-event';

export function userEventTestsSetup(component: JSX.Element) {
  return {
    userEvents: UserEvents.setup(),
    ...render(component),
  };
}
