import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSetOrders: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSetOrders, selectedOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentOrder = sortOrders.find(
    (order) => order.value === selectedOrder
  );

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<Icon as={BsChevronDown as React.ComponentType} />}
      >
        Order By: {currentOrder ? currentOrder.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => {
              onSetOrders(order.value);
            }}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
