import axios from 'axios';

export default {
    data() {
        return {
            users: [],
            user: {},
        }
    },
    methods: {
        async getAllUsers() {
            try {
                const response = await axios.get('http://localhost:2000/users');
                this.users = response.data;
            } catch (error) {
                console.error(error);
            }
        },

        async getUserById(id) {
            try {
                const response = await axios.get(`http://localhost:2000/users/${id}`)
                this.user = response.data;
            } catch (error) {
                console.error(error);
            }
        },

        async deleteUser(id) {
            try {
                await axios.delete(`http://localhost:2000/users/${id}`);
                this.getAllUsers()
            } catch (error) {
                console.log(error);
            }
        },

        async createUser(user) {
            try {
                await axios.post(`http://localhost:2000/users/`, user)
            } catch (error) {
                console.error(error);
            }
        },

        async updateUser(id, user) {
            try {
                await axios.put(`http://localhost:2000/users/${id}`, user)
            } catch (error) {
                console.error(error);
            }
        }
    },
}