import axios from 'axios'

const Http = {
    get: (url, options) => {
        return new Promise((reslove, reject) => {
            axios.get(url, options).then(res => {
                reslove(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export default Http