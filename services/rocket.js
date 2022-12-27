import axios from 'axios';

const getRockets = async () => {
    try {
        let res = await axios.get('https://api.spacexdata.com/v3/rockets');
        return res.data
    } catch(err) {
        console.error(err)
    }
}

module.exports = {
    getRockets
}