import { useEffect } from "react";

import { IMerch } from "../types/merchTypes";

const useFilteredMerch = (
    searchFilter: string, categoryFilters: number[], companyFilters: number[],
    merch: IMerch[], priceSort: string, setFilteredMerch: (newState: any) => void
) => {

    useEffect(() => {
        setFilteredMerch(
            searchFilter.length > 0
                ? merch.filter((merch: IMerch) => merch.name.toLowerCase()
                    .includes(searchFilter.toLowerCase()))
                    .sort((a: IMerch, b: IMerch) => a.price < b.price ? 1 : -1)
                : merch.sort((a: IMerch, b: IMerch) => a.price < b.price ? 1 : -1)
        );
        if (categoryFilters.length > 0) {
            setFilteredMerch(
                (state: IMerch[]) =>
                    state.filter((merch: IMerch) => categoryFilters.includes(merch.categoryId))
            );
        }
        if (companyFilters.length > 0) {
            setFilteredMerch(
                (state: IMerch[]) =>
                    state.filter(merch => companyFilters.includes(merch.companyId))
            );
        }
        if (priceSort == "CHEAP") {
            setFilteredMerch(
                (state: IMerch[]) =>
                    state.sort((a: IMerch, b: IMerch) => a.price < b.price ? 1 : -1)
            );
        } else if (priceSort == "EXPANSIVE") {
            setFilteredMerch(
                (state: IMerch[]) =>
                    state.sort((a: IMerch, b: IMerch) => a.price > b.price ? 1 : -1)
            );
        };
    }, [searchFilter, priceSort, categoryFilters, companyFilters]);
};

export default useFilteredMerch;