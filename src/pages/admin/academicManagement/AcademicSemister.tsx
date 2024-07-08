import { useGetAllSemisterQuery } from "../../../redux/features/academicSemister/academicSemisterApi";


const AcademicSemister = () => {
    const {data} = useGetAllSemisterQuery(undefined);
    console.log({data})
    return (
        <div>
            <h1>this is academic semister</h1>
        </div>
    );
};

export default AcademicSemister;