import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching random cat facts from the CatFact API.
 *
 * Handles API requests and exposes the fetched fact
 * as component state.
 *
 * @returns {{
 *   catFact: string,
 *   fetchCatFact: () => Promise<void>
 * }} Cat fact state and fetch function.
 */
export default function useCatFact() {

    const [catFact, setCatFact] = useState("");

    async function fetchCatFact() {
        const res = await fetch("https://catfact.ninja/fact");
        const data = await res.json();
        console.log("Fetched data", data);
        setCatFact(data.fact);
    }

    useEffect(() => {
        fetchCatFact();
    }, []);

    return { catFact, fetchCatFact }
}