import { Subject } from "@/types";
import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";


const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "A foundational course covering basic programming concepts, algorithms, and computational thinking. Students learn the fundamentals of software development and problem-solving techniques.",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description: "Advanced calculus covering integration techniques, differential equations, and series. This course builds upon Calculus I and prepares students for advanced mathematical analysis.",
  },
  {
    id: 3,
    code: "PHY150",
    name: "Physics for Engineers",
    department: "Physics",
    description: "A comprehensive introduction to classical mechanics, thermodynamics, and waves. Designed for engineering students with emphasis on practical applications and laboratory work.",
  },
];

export const dataProvider: DataProvider ={
  getList: async <Tdata extends BaseRecord = BaseRecord>({resource}:
    GetListParams): Promise<GetListResponse<Tdata>> => {
      if(resource !== 'subjects') return {
        data: [] as Tdata[],
        total: 0
      } 
      return {
        data: mockSubjects as unknown as Tdata[],
        total: mockSubjects.length
      }
    },
    getOne: async () => {throw new Error('this function is not implemented')},
    create: async () => {throw new Error('this function is not implemented')},
    update: async () => {throw new Error('this function is not implemented')},
    deleteOne: async () => {throw new Error('this function is not implemented')}, 

    getApiUrl: () => '',
}

