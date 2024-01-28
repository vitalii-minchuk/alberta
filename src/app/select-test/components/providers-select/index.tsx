'use client'

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import type { TSelectOption } from "@/components/ui/select/types";
import { CustomSelect } from "@/components/ui"

export const ProvidersSelect = () => {  
  const [selectedProvider, setSelectedProvider] = useState<TSelectOption | null>(null);
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentProviderId = searchParams.get('providerId')
  const currentSorting = searchParams.get('sorting')

  const options: TSelectOption[] = useMemo(() => [
    { value: '1', label: 'Test 1' },
    { value: '2', label: 'Test 2' },
    { value: '3', label: 'Test 3' }
  ], [])

  useEffect(() => {
    if (currentProviderId) {
      const option = options.find(el => el.value === currentProviderId)

      option && setSelectedProvider(option)
    } else {
      setSelectedProvider(null)
    }
  }, [currentProviderId, options])

  const handleSelect = (providerId: string) => {
    const sorting = currentSorting ? `&sorting=${currentSorting}` : ''
    const path = `?providerId=${providerId}` + sorting
    router.push(path)
  }
  
  return (
    <CustomSelect options={options} value={selectedProvider} onSelect={handleSelect} />
  )
}
