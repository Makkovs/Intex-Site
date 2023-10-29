import { useEffect } from "react";

import { IMerch } from "../types/merchTypes";

const useFilteredMerch = (
    searchFilter: string, categoryFilters: number[], companyFilters: number[],
    merch: IMerch[], priceSort: string, setFilteredMerch: (newState: any) => void
) => {
    
    useEffect(() => {
        let filteredMerch = [...merch];

        if (searchFilter.length > 0) {
            filteredMerch = filteredMerch.filter((merch: IMerch) =>
                merch.name.toLowerCase().includes(searchFilter.toLowerCase())
            );
        };

        if (categoryFilters.length > 0) {
            filteredMerch = filteredMerch.filter((merch: IMerch) =>
                categoryFilters.includes(merch.categoryId)
            );
        };

        if (companyFilters.length > 0) {
            filteredMerch = filteredMerch.filter((merch: IMerch) =>
                companyFilters.includes(merch.companyId)
            );
        };

        if (priceSort === "CHEAP") {
            filteredMerch.sort((a, b) => a.price - b.price);
        };
        
        if (priceSort === "EXPANSIVE") {
            filteredMerch.sort((a, b) => b.price - a.price);
        };

        setFilteredMerch(filteredMerch);
    }, [searchFilter, priceSort, categoryFilters, companyFilters]);
};

export default useFilteredMerch;