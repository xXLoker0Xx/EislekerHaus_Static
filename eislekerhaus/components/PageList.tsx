import React, { useEffect, useState } from 'react';
import { loadPages } from '@/utilities/DBloadUtils';
import { Page } from '@/utilities/interfacesUtils'; // Adjust the import as needed

const PageList: React.FC = () => {
    const [pages, setPages] = useState<Page[]>([]); // Change to Page[]
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPages = async () => {
            const loadedPages = await loadPages();
            setPages(loadedPages);
            setLoading(false);
        };

        fetchPages();
    }, []);

    if (loading) return <div>Cargando...</div>;

    return (
        <div>
            <h1>Lista de Páginas</h1>
            <ul>
                {pages.map((page, index) => (
                    <li key={index}>{page.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PageList;
