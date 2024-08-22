import axios from 'axios';

const API_BASE_URL = 'http://localhost:3443/hospital/v1/api/doctor';

class DoctorService {
    getAll() {
        return axios.get(API_BASE_URL);
    }

    delete(id) {
        return axios.delete(API_BASE_URL + '/' + id);
    }

    get(id) {
        return axios.get(API_BASE_URL + '/' + id);
    }

    update(doctor) {
        return axios.put(API_BASE_URL + "/update", doctor)
    }

    save(doctor) {
        return axios.post(API_BASE_URL, doctor)
    }
}

export default new DoctorService();