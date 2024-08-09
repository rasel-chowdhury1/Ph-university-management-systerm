import { baseApi } from "../../api/baseApi";


const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // getAllSemister: builder.query({
        //     query: (args) => {
        //         console.log({args})
        //         const params = new URLSearchParams();
        //         if(args){
        //           args.forEach(item => (
        //             params.append(item.field, item.value)
        //           ))
        //         }
        //         console.log({params})
        //         return {
        //             url: "/academicSemister",
        //             method: "GET",
        //             params: params
        //         }
        //     },
        //     transformResponse: (response: TResponseRedux<TAcademicSemister[]>) => {
        //         console.log(response)
        //         return {
        //             data: response.data
        //         }
        //     }
        // }),
        addStudent: builder.mutation({
            query: (data) => ({
                url: "/users/create-student",
                method: "POST",
                body: data
            })
        })
    })
})


export const {useAddStudentMutation} = userManagementApi;