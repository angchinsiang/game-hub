import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

export interface Props {
  onSearch: (search: string | undefined) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(ref.current?.value || undefined);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <Icon as={BsSearch as React.ComponentType} color="gray.300" />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
