package md.exem.repository;

import md.exem.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {

    Department findByNameIgnoreCase(String departmentName);
}
