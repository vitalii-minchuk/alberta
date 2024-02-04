'use client'

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import type { TSelectOption } from "@/components/ui/select/types";
import { CustomSelect } from "@/components/ui"

export const SortingSelect = () => { 
   const [selectedSorting, setSelectedSorting] = useState<TSelectOption | null>(null);
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentSorting = searchParams.get('sorting')
  const currentProviderId = searchParams.get('providerId')

  const options: TSelectOption[] = useMemo(() => [
    { value: '11', label: 'Test 4' },
    { value: '22', label: 'Test 5' },
    { value: '33', label: 'Test 6' }
  ], [])

  useEffect(() => {
    if (currentSorting) {
      const option = options.find(el => el.value === currentSorting)

      option && setSelectedSorting(option)
    } else {
      setSelectedSorting(null)
    }
  }, [currentSorting, options])

  const handleSelect = (sorting: string) => {
    const providerId = currentProviderId ? `&providerId=${currentProviderId}` : ''
    const path = `?sorting=${sorting}` + providerId
    router.push(path)
  }

  return (
     <CustomSelect options={options} value={selectedSorting} onSelect={handleSelect} />
  )
}