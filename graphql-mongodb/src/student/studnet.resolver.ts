import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './studnet.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<StudentType> {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query((returns) => [StudentType])
  async students(): Promise<StudentType[]> {
    return this.studentService.getStudents();
  }

  @Query((returns) => StudentType)
  async studnet(@Args('id') id: string): Promise<StudentType> {
    return this.studentService.getStudent(id);
  }
}
