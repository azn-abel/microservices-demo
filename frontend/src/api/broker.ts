import axios from 'axios'

const apiPath = import.meta.env.BROKER_URL || 'http://127.0.0.1:8080'
const headers = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export async function broker() {
    // Simulate some latency
    await new Promise(r => setTimeout(r, 1000))

    const url = apiPath + '/'
    let response;
    
    try {
        response = await axios.post(url, headers)
        console.log('Success:', response)
        return response
    } catch (error) {
        console.error('Error:', error)
        return error
    }
}
