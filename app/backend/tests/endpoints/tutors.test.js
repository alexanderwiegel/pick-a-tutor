const axios = require("axios");

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:3001/api",
});

test("GET all tutors", () => {
    axiosInstance.get(`tutors`).then((data) => {
        expect(data.data.data).toHaveLength(2);
        expect(data.data.records).toBe(2);
    });
});

test("GET tutors with Jo in their name", () => {
    axiosInstance.get(`tutors?search=jo`).then((data) => {
        expect(data.data.data).toHaveLength(1);
        expect(data.data.records).toBe(1);
    });
});
