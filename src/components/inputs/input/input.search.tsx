"use client";

import { useState } from "react";

import { Input } from "./input";
import { debounce } from "@/src/lib/utils";
import { Stack } from "../..";

interface InputSearchProps {
  children: (_args: { search: string }) => React.ReactNode;
  placeholder?: string;
}

export function InputSearch({
  children,
  placeholder = "Buscar por nombre...",
}: InputSearchProps) {
  const [search, setSearch] = useState<string>("");

  return (
    <Stack spacing="md">
      <Input
        placeholder={placeholder}
        className="max-w-72"
        onKeyUp={debounce((e) => setSearch(e.target.value), 1000)}
      />
      {children({ search })}
    </Stack>
  );
}

InputSearch.displayName = "InputSearch";
