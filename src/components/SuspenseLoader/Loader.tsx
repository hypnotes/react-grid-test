import { Suspense } from "react";
import SuspenseLoader from ".";

const Loader =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Component: React.ComponentType<any>) => (props: JSX.IntrinsicAttributes) =>
    (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
      </Suspense>
    );

export default Loader;
