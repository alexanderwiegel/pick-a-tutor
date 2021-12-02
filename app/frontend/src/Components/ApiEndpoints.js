import axios from "axios";


const axiosInstance = axios.create({
baseURL: "https://jsonplaceholder.typicode.com"
})

// async function getTutorData(course, star) {
//     return await axiosInstance.get(`users/${course}/${star}`)
// }

async function getTutorData() {
    return await axiosInstance.get('users')
}

async function getSingleTutorData() {
    return await axiosInstance.get('users')
}

async function getPostDetail (postId) {
    return await axiosInstance.get(`posts/${postId}`)
}

async function getPosts () {
    return await axiosInstance.get('posts')
}

async function postPosts (data) {
    return await axiosInstance.post('add_post', data)
}

const apiEndPoints = {
    postPosts, getPosts, getPostDetail, getTutorData
}

export default apiEndPoints