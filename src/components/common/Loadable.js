// "use client"
import { Suspense } from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const LoadingSpinner = () => {
    return (
      <div className='w-[100%] flex justify-center items-center h-[100vh]'>
          <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
      </div>
    )
}
  
const Loadable = (Component) => {
  const LoadableComponent = (props) => (
    <Suspense fallback={ <LoadingSpinner />}>
      <Component {...props} />
    </Suspense>
  );

  // Set the display name for easier identification in React DevTools
  const componentName =
    Component.displayName || Component.name || "Component";
  LoadableComponent.displayName = `Loadable(${componentName})`;

  return LoadableComponent;
}

export default Loadable;
