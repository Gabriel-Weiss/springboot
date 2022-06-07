import axios from "axios";

const BASE_URL = 'http://localhost:8080/department'

class DepartmentsService {

    getDepartments() {
        return axios.get(BASE_URL + '/list')
    }

    addDepartment(department) {
        return axios.post(BASE_URL + '/add', department)
    }

    getDepartmentById(id) {
        return axios.get(BASE_URL + '/list/' + id)
    }

    updateDepartment(id, department) {
        return axios.put(BASE_URL + '/update/' + id, department)
    }

    deleteDepartment(id) {
        return axios.delete(BASE_URL + '/delete/' + id)
    }
}

export default new DepartmentsService();