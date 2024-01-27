"use client"

import { useIsMounted } from "@/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select"

type TSelectOption = {
  value: string,
  label: string
}

export const CustomSelect = () => {
  const [selectedOption, setSelectedOptions] = useState<TSelectOption | null>(null);
  const router = useRouter()
  const searchParams = useSearchParams()
  const isMounted = useIsMounted()
  const currentOption = searchParams.get('test')
  const options: TSelectOption[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  useEffect(() => {
    if (currentOption) {
      const option = options.find(el => el.value === currentOption)

      option && setSelectedOptions(option)
    } else {
      setSelectedOptions(null)
    }
  }, [])

  const handleSelect = (val: SingleValue<TSelectOption>) => {
    if (!val) return

    router.push(`?test=${val.value}`)
    setSelectedOptions(val)
  }

  if (!isMounted) return null
  
  return (
    <Select options={options}  value={selectedOption}  onChange={handleSelect}/>
    
  )
}
