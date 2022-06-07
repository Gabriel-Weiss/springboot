package md.exem.service;

import md.exem.entity.Department;
import md.exem.error.DepartmentNotFound;

import java.util.List;

public interface DepartmentService {

    List<Department> saveDepartments(List<Department> departments);

    List<Department> fetchDepartments();

    Department saveDepartment(Department department);

    Department fetchDepartmentById(Long departmentId) throws DepartmentNotFound;

    void deleteDepartmentById(Long departmentId);

    Department updateDepartment(Long departmentId, Department department) throws DepartmentNotFound;

    Department fetchDepartmentByName(String departmentName);
}
