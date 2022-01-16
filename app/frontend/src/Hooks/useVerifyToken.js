import React from 'react';
// import jwt_decode from 'jwt-decode';

const useVerifyToken = () => {
    const checkToken=(token)=>{
        if(token){
            // var base64Url = token.split('.')[1];
            // var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            // var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            //     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            // }).join(''));
            // console.log("hello world",jsonPayload)
            // const decodedToken = jwt_decode("eyJhbGciOiJIUzI1NiJ9.eWVzQGV4YW1wbGUuY29t.-KRnzSIuCIUsFR7BcqB1Co6mU2Z18UnIkIFC_mG4bpA", );
            // console.log(decodedToken)
            // const currentDate= new Date();
            // if(decodedToken.exp*1000 < currentDate.getTime()){
            //     return false;
            // }
            return true;
        }
        return false;
    }
    return checkToken;
};

export default useVerifyToken;
