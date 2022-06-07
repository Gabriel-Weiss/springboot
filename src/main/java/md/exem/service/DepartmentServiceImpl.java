package md.exem.service;

import md.exem.entity.Department;
import md.exem.error.DepartmentNotFound;
import md.exem.repository.DepartmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class DepartmentServiceImpl implements DepartmentService{

    private final DepartmentRepository departmentRepository;

    public DepartmentServiceImpl(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @Override
    public List<Department> saveDepartments(List<Department> departments) {
        return departmentRepository.saveAll(departments);
    }

    @Override
    public List<Department> fetchDepartments() {
        return departmentRepository.findAll();
    }

    @Override
    public Department saveDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public Department fetchDepartmentById(Long id) throws DepartmentNotFound {
        return departmentRepository.findById(id).orElseThrow(
                () -> new DepartmentNotFound("Department not existent")
        );
    }

    @Override
    public void deleteDepartmentById(Long id) {
        departmentRepository.deleteById(id);
    }

    @Override
    public Department updateDepartment(Long id, Department department) throws DepartmentNotFound {
        Department departmentById = fetchDepartmentById(id);

        if(Objects.nonNull(department.getName()) &&
        !"".equalsIgnoreCase(department.getName())){
            departmentById.setName(department.getName());
        }
        if(Objects.nonNull(department.getAddress()) &&
        !"".equalsIgnoreCase(department.getAddress())){
            departmentById.setAddress(department.getAddress());
        }
        if(Objects.nonNull(department.getCode()) &&
        !"".equalsIgnoreCase(department.getCode())){
            departmentById.setCode(department.getCode());
        }

        return departmentRepository.save(departmentById);
    }

    @Override
    public Department fetchDepartmentByName(String departmentName) {
        return departmentRepository.findByNameIgnoreCase(departmentName);
    }

}
