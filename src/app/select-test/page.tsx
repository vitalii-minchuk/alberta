import { ProvidersSelect, SortingSelect } from "./components";

import { Suspense } from 'react'
export default function SelectTestPage() {
    return (
        <div style={{minHeight: '90px'}}>
 <Suspense>
        <ProvidersSelect />
        <SortingSelect />
            </Suspense>
        </div>
    )
}