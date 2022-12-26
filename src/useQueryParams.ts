import {useEffect, useState} from "react";

export const useQueryParams = () => {
    const [queryParams, setQueryParams] = useState<{ title: string; date: string; }>({ title: '', date: '' });

    useEffect(() => {
        const search = new URLSearchParams(window.location.search);
        setQueryParams({
            title: search.get('title') ?? '',
            date: search.get('date') ?? '',
        })
    }, []);

    return queryParams;
}
