import axios from 'axios';

const BaseUrl = "https://localhost:44388/api";

class MyApi  {
    static getAllRobots() {
        return axios.get(BaseUrl+ "/robots");
    }

    static createRobot(robot) {
        return axios.post(BaseUrl+ "/robots", robot );
    }

    static updateRobot(robot) {
        return axios.put(BaseUrl + "/robots/" + robot.robotID, robot);
    }

    static deleteRobot(robotID) {
        return axios.delete(BaseUrl + "/robots/" + robotID);
    }

    static getAllManufacturers() {
        return axios.get(BaseUrl+ "/manufacturers");
    }

    static getAllCategories() {
        return axios.get(BaseUrl+ "/categories");
    }
}

export default MyApi;

