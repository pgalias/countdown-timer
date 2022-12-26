import {useEffect, useState} from "react";

export const useQueryParams = () => {
    const [queryParams, setQueryParams] = useState<{ title: string; date: string; lang: 'en' | 'pl' }>({ title: '', date: '', lang: 'en' });

    useEffect(() => {
        const search = new URLSearchParams(window.location.search);
        setQueryParams({
            title: search.get('title') ?? '',
            date: search.get('date') ?? '',
            lang: (search.get('lang') ?? 'en') as 'en' | 'pl',
        })
    }, []);

    return queryParams;
}
