declare module '@heroicons/react/solid' {
    import { ComponentType, SVGProps } from 'react';
    export const UserIcon: ComponentType<SVGProps<SVGSVGElement>>;
    // Add other icons you need here...
  }
  
  declare module '@heroicons/react/outline' {
    import { ComponentType, SVGProps } from 'react';
    export const UserIcon: ComponentType<SVGProps<SVGSVGElement>>;
    // Add other icons you need here...
  }
  
  declare module '@heroicons/react' {
    export * from '@heroicons/react/solid';
    export * from '@heroicons/react/outline';
  }
  