import { z } from "zod";

 export const academicSemisterSchema = z.object({
    name: z.string({required_error: "Please select a name"}),
    year: z.string({required_error: "Please select a year"}),
    start: z.string({required_error: "Please select a start month"}),
    end: z.string({required_error: "Please select a end month"}),

})