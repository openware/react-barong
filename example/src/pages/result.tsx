import React from 'react';
import { useLocation } from 'react-router-dom';
import { ParseOptions, parse } from 'query-string';
import { Layout } from '../lib/layout';

function useQuery<T = ParseOptions>(): T {
    const location = useLocation();
    return parse(location.search) as any;
}

export const ResultPage: React.FC = () => {
    const { t } = useQuery<{ t: string | undefined }>();

    return (
        <Layout>
            <h3>{t}</h3>
        </Layout>
    );
};
