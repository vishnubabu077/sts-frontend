import { CourseModel } from "./course.data";
import { DepartmentModel } from "./department.data";
export class StudentModel
{ 
    public  id;

	public  name;

    public  dob;

    public  address;

    // public  gender;

    public department :DepartmentModel;

    public course :CourseModel ;

    // public fName;

    // public fNumber;

    // public mName;

    // public mNumber;

    // public bloodGroup;

    public email;




}