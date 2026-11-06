
import axios from 'axios';

const BASE_URL = 'https://job-portal-node-t61e.onrender.com';

const API_URL = `${BASE_URL}/register/api`;
const JOBS_API = `${BASE_URL}/jobs/api/fetch`;
const APPLIED_JOBS = `${BASE_URL}/apply/api`;
const RECURITER_JOBS = `${BASE_URL}/jobs/api/dashboard`;
const NEW_JOBS = `${BASE_URL}/jobs/api`;
const UPDATE_ID = `${BASE_URL}/jobs/api`;
const DELETE_ID = `${BASE_URL}/jobs/api`;
const RECRUITER_APPLICATION = `${BASE_URL}/jobs/api`;
const APPLICATION_STATUS = `${BASE_URL}/jobs/api`;
const CANDIDATE_APP = `${BASE_URL}/apply/api`;

class ConnectionApi {

    register(data) {
        return axios.post(`${API_URL}/post`, data);
    }

    login(login) {
        return axios.post(`${API_URL}/login`, login);
    }

    jobs() {
        return axios.get(JOBS_API);
    }

    appliedJobd(data) {
        const token = localStorage.getItem('token');

        return axios.post(`${APPLIED_JOBS}/jobpost`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    recruiterDashboard() {
        const token = localStorage.getItem('token');

        return axios.get(RECURITER_JOBS, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    newJobs(data) {
        const token = localStorage.getItem('token');

        return axios.post(`${NEW_JOBS}/jobs`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    updateByID(Id, data) {
        const token = localStorage.getItem('token');

        return axios.put(`${UPDATE_ID}/update/${Id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    deleteById(Id) {
        const token = localStorage.getItem('token');

        return axios.delete(`${DELETE_ID}/delete/${Id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    getRecruiterApplication() {
        const token = localStorage.getItem('token');

        return axios.get(`${RECRUITER_APPLICATION}/retrive`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    getApplicationStatus(id, status) {
        const token = localStorage.getItem('token');

        return axios.put(`${APPLICATION_STATUS}/status/${id}`, { status }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    getCandidateApplication() {
        const token = localStorage.getItem('token');

        return axios.get(`${CANDIDATE_APP}/fetch`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}

export default new ConnectionApi();
