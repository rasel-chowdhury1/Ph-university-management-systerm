import { TQueryParams, TResponseRedux, TStudent } from "../../../types";
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
        getAllStudents: builder.query({
            query: (args) => {
              console.log(args);
              const params = new URLSearchParams();
      
              if (args) {
                args.forEach((item: TQueryParams) => {
                  params.append(item.name, item.value as string);
                });
              }
      
              return {
                url: '/students',
                method: 'GET',
                params: params,
              };
            },
            transformResponse: (response: TResponseRedux<TStudent[]>) => {
              return {
                data: response.data,
                meta: response.meta,
              };
            },
          }),

          getAllFaculties: builder.query({
            query: (args) => {
              console.log(args);
              const params = new URLSearchParams();
      
              if (args) {
                args.forEach((item: TQueryParams) => {
                  params.append(item.name, item.value as string);
                });
              }
      
              return {
                url: '/faculties',
                method: 'GET',
                params: params,
              };
            },
            transformResponse: (response: TResponseRedux<TStudent[]>) => {
              return {
                data: response.data,
                meta: response.meta,
              };
            },
          }),
      
        addStudent: builder.mutation({
            query: (data) => ({
                url: "/users/create-student",
                method: "POST",
                body: data
            })
        }),

        changePassword: builder.mutation({
          query: (data) => ({
            url: '/auth/change-password',
            method: 'POST',
            body: data,
          }),
        }),
    })
})


export const { 
  useGetAllStudentsQuery, 
  useGetAllFacultiesQuery, 
  useAddStudentMutation,
  useChangePasswordMutation
} = userManagementApi;