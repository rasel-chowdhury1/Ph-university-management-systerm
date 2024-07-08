import { baseApi } from "../../api/baseApi";


const academicSemisterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemister: builder.query({
            query: () => ({
                url: "/academicSemister",
                method: "GET"
            })
        })
    })
})


export const {useGetAllSemisterQuery} = academicSemisterApi;