import { DesignationModel } from "./designation.data";
import { DepartmentModel } from "./department.data";

export class TeacherModel
{ 
    public  id;

	public  first_name;

	public  last_name;

	public  email;
	
	public designation :DesignationModel ;

	public department :DepartmentModel;
	
	
}
