import { useEffect, useRef, useState } from "react";
import { Collection, SearchResultEntity } from "../types";
import { HOST_ADDRESS } from "../config/config";
import { useOpen } from "./useOpen";

export interface SearchResult {
    amount: number;
    data: SearchResultEntity[];
    error: string | null;
    loading: boolean;
    value: string;
    isOpen: boolean;
    close: () => void;
    open: () => void;
    handleValueChange: (value: string) => void;
}

export function useSearch(collection: Collection): SearchResult {

    const timeoutId = useRef<NodeJS.Timeout | null>(null);
    const debounceId = useRef<NodeJS.Timeout | null>(null);
    const { close, isOpen, open } = useOpen();

    const [amount, setAmount] = useState(0);
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');

    const handleValueChange = (value: string) => {
        setValue(value);
    };

    useEffect(() => {
        if (debounceId.current) {
            clearTimeout(debounceId.current);
        }
        if (!value) return close();
        debounceId.current = setTimeout(() => {
            open();
            setData([]);
            setError(null);
            setLoading(true);

            const startTime = new Date().valueOf();
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
            fetch(`${HOST_ADDRESS}/${collection}?search=${encodeURIComponent(value)}`)
                .then(res => res.json())
                .then(res => {
                    const endTime = new Date().valueOf();
                    timeoutId.current = setTimeout(() => {
                        setData(res);
                        setAmount(res.length);
                        setLoading(false);
                    }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
                })
                .catch(e => {
                    const endTime = new Date().valueOf();
                    timeoutId.current = setTimeout(() => {
                        setLoading(false);
                        setError(e.message);
                    }, endTime - startTime < 500 ? 500 - (endTime - startTime) : 0);
                });
        }, 500);
    }, [value]);
        
    return { amount, close, data, error, handleValueChange, isOpen, loading, open, value };
}