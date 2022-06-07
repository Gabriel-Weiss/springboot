package md.exem.controller;

import md.exem.entity.Department;
import md.exem.error.DepartmentNotFound;
import md.exem.service.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController()
@RequestMapping("/department")
@CrossOrigin(origins = {"http://localhost:3000"})
public class DepartmentController {

    private final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @PostMapping("/add")
    public ResponseEntity<Department> saveDepartment(@Valid @RequestBody Department department){
        Department saveDepartment = departmentService.saveDepartment(department);
        return new ResponseEntity<>(saveDepartment, HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Department>> fetchDepartments(){
        List<Department> departmentList = departmentService.fetchDepartments();
        return ResponseEntity.ok(departmentList);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<Department> fetchDepartmentById(@PathVariable("id") Long departmentId) throws DepartmentNotFound {
        Department department = departmentService.fetchDepartmentById(departmentId);
        return ResponseEntity.ok(department);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteDepartmentById(@PathVariable("id") Long departmentId) throws DepartmentNotFound {
        Department departmentById = departmentService.fetchDepartmentById(departmentId);
        if (departmentById == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            departmentService.deleteDepartmentById(departmentById.getId());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public String updateDepartment(@PathVariable("id") Long departmentId, @RequestBody Department department) throws DepartmentNotFound {
        Department updateDepartment = departmentService.updateDepartment(departmentId, department);
        return "Department " + updateDepartment.getName() + " updated successfully";
    }

    @GetMapping("/list/name/{name}")
    public ResponseEntity<Department> fetchDepartmentByName(@PathVariable("name") String departmentName){
        Department departmentByName = departmentService.fetchDepartmentByName(departmentName);
        return ResponseEntity.ok(departmentByName);
    }
}