import type { CanActivateFn } from '@angular/router';

/**
   * Use route guards to prevent users from navigating to parts of an application without authorization. 
   * The following route guards are available in Angular:
   * 
    * canActivate - Interface that a class can implement to be a guard deciding if a route can be activated
    * canActivateChild - Interface that a class can implement to be a guard deciding if a child route can be activated.
    * canDeactivate - Interface that a class can implement to be a guard deciding if a route can be deactivated.
    * canMatch - Interface that a class can implement to be a guard deciding if a Route can be matched.
    * resolve - Interface that classes can implement to be a data provider. A data provider class can be used with the router to resolve data during navigation. 
    * canLoad - Interface that a class can implement to be a guard deciding if children can be loaded. 
 */
export const todolistGuard: CanActivateFn = (route, state) => {
  return true;
};
