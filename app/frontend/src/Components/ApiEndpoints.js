import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3001/api"
})

// async function getTutorData(course, star) {
//     return await axiosInstance.get(`users/${course}/${star}`)
// }

async function getTutorData() {
  return await axiosInstance.get(`tutors`)
}

async function register(data) {
  const gender_val = parseInt(data.gender)
  return await axiosInstance.post(`/users`, {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    dateOfBirth: data.dateOfBirth,
    gender: gender_val,
    role: data.role
  })
}

async function login(data) {
  return await axiosInstance.post(`/login`, {
    email: data.email,
    password: data.password
  })
}

async function getListofTutors(subject) {
  return await axiosInstance.get(`tutors?search=${subject}`)
}


async function getSingleTutorData() {
  return await axiosInstance.get('users')
}

async function getPostDetail(postId) {
  return await axiosInstance.get(`posts/${postId}`)
}

async function getPosts() {
  return await axiosInstance.get('posts')
}

async function postPosts(data) {
  return await axiosInstance.post('add_post', data)
}

const apiEndPoints = {
  postPosts, getPosts, getPostDetail, getTutorData, getListofTutors, register, login
}

export default apiEndPoints