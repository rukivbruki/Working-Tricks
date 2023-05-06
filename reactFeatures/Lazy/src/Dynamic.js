import React, {lazy, Suspense} from 'react';

export default function Dynamic() {
    const Component = lazy(() => import("./SimpleComponentForDynamic"))
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component/>
        </Suspense>
    )
}

