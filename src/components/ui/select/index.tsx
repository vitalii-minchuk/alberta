"use client"

import type { SingleValue } from "react-select";
import Select from "react-select"

import { useIsMounted } from "@/hooks";
import { TSelectOption } from "./types";

interface Props {
  options: TSelectOption[];
  value: TSelectOption | null;
  onSelect: (val: string) => void
}

export const CustomSelect = (props: Props) => {
  const {options, value, onSelect} = props
  const isMounted = useIsMounted()

  const onChange = (val: SingleValue<TSelectOption>) => {
    if (!val) return

    onSelect(val.value)
  }

  if (!isMounted) return null

  return (
    <Select 
    className="react-select-container"
    classNamePrefix="react-select" options={options} value={value} onChange={onChange} />
  )
}
