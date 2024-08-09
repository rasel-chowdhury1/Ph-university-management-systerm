import { useGetAllSemisterQuery } from "../../../redux/features/admin/academicManagementApi";
import { Table, type TableColumnsType, type TableProps } from 'antd';
import { TAcademicSemister, TQueryParams } from "../../../types/academicManagement.type";
import { useState } from "react";

type TTableData = Pick<TAcademicSemister, "name" | "year" | "startMonth" | "endMonth">


const AcademicSemister = () => {
    const [params, setParams] = useState<TQueryParams[] | undefined>(undefined)
    const {data: semisterData , isLoading, isFetching} = useGetAllSemisterQuery(params);
    console.log(params)

    const tableData = semisterData?.data?.map(({_id, name, year, startMonth, endMonth}) => ({
        key: _id,
        name,
        year,
        startMonth,
        endMonth
    }))

    

    const columns: TableColumnsType<TTableData> = [
        {
          title: 'Name',
          dataIndex: 'name',
          showSorterTooltip: { target: 'full-header' },
          filters: [
            {
              text: 'Summer',
              value: 'Summer',
            },
            {
              text: 'Fall',
              value: 'Fall',
            },
            {
              text: "Autumn",
              value: "Autumn"
            }
          ],
        },
        {
          title: 'Year',
          dataIndex: 'year',
          filters: [
            {
              text: '2024',
              value: '2024',
            },
            {
              text: '2025',
              value: '2025',
            },
            {
              text: "2026",
              value: "2026"
            },
            {
              text: "2027",
              value: "2027"
            },
            {
              text: "2028",
              value: "2028"
            },
            {
              text: "2029",
              value: "2029"
            },
            {
              text: "2030",
              value: "2030"
            },
          ],
        },
        {
          title: 'Start Month',
          dataIndex: 'startMonth',
        },
        {
          title: 'End Month',
          dataIndex: 'endMonth',
        },
      ];


      const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
        console.log({filters})
        if(extra?.action === 'filter'){
           const queryParams : TQueryParams[] = [];

           filters?.name?.forEach(item => (
            queryParams.push({field: "name", value: item})
           ))

           filters?.year?.forEach(item => (
            queryParams.push({field: "year", value: item})
           ))


           setParams(queryParams)
        }

      };
      
      if(isLoading){
        return <p>Loading...</p>
      }

    return (
        <Table
        loading={isFetching}
    columns={columns}
    dataSource={tableData}
    onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />

    );
};

export default AcademicSemister;