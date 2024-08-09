import { TAcademicSemister } from "../../../types/academicManagement.type";
import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";


const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemister: builder.query({
            query: (args) => {
                console.log({args})
                const params = new URLSearchParams();
                if(args){
                  args.forEach(item => (
                    params.append(item.field, item.value)
                  ))
                }
                console.log({params})
                return {
                    url: "/academicSemister",
                    method: "GET",
                    params: params
                }
            },
            transformResponse: (response: TResponseRedux<TAcademicSemister[]>) => {
                console.log(response)
                return {
                    data: response.data
                }
            }
        }),
        addAcademicSemister: builder.mutation({
            query: (data) => ({
                url: "/academicSemister/create-academic-semister",
                method: "POST",
                body: data
            })
        })
    })
})

export const {useGetAllSemisterQuery, useAddAcademicSemisterMutation} = academicManagementApi;