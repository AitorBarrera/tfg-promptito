import { useState } from "react";
import type { Filters } from "~/interfaces";

export const useFilters = (initialForm: Filters) => {
  const [filterState, setFilterState] = useState(initialForm);

  const onInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name } = event.target;
    let value: string | boolean = event.target.value;

    if (
      event.target.type === "checkbox" &&
      event.target instanceof HTMLInputElement
    ) {
      value = event.target.checked;
    }

    setFilterState({
      ...filterState,
      [name]: value,
    });
  };

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const select = event.target;

    const name = select.name;
    const value = select.options[select.selectedIndex].value;

    setFilterState({
      ...filterState,
      [name]: value,
    });
  };

  const onResetFilter = (event: Event) => {
    setFilterState(initialForm);
  };

  return {
    ...filterState,
    filterState: filterState,
    onInputChange,
    onSelectChange,
    onResetFilter,
  };
};
