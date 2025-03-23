import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const datasApi = createApi({
    reducerPath: "data",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://metanoia.community/",
    }),
    tagTypes: ["Data"],
    endpoints(builder) {
        return {
            // fetch Media data
            fetchMedia: builder.query({
                providesTags: ["Data"],
                query: () => {
                    return {
                        url: "media",
                        method: "GET"
                    };
                },
            }),
            // fetch Colors data
            fetchColors: builder.query({
                providesTags: ["Data"],
                query: () => {
                    return {
                        url: "colorsTheme",                        
                        method: "GET"
                    };
                },
            }),

        };
    },
});

export const { useFetchMediaQuery, useFetchColorsQuery } = datasApi;
export { datasApi };