import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = "https://min-api.cryptocompare.com/data/";

export const cryptoApiSlice = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCrypto: builder.query({
            query: ({url, params }) => ({
                url,
                params: { ...params },
                headers: {
                    Authorization: `Apikey b599fb25e2956d71e0e8cec0725d9a2076cfe82210ec012f2dec57574b0b6fad`
                }
            }),
        }),
    }),
});

export const { useGetCryptoQuery } = cryptoApiSlice;
