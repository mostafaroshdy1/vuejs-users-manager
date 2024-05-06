<template>
  <div class="p-4 sm:ml-64">
    <section class="bg-white">
      <div class="py-4 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 class="mb-4 text-xl font-bold text-gray-900">Add Person</h2>
        <form action="#" @submit.prevent="addPerson()">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="sm:col-span-2">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Name</label
              >
              <input
                type="text"
                name="name"
                id="name"
                v-model.trim.lazy="FormValue.name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Enter Name..."
                required=""
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="age"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Age</label
              >
              <input
                type="text"
                name="age"
                id="age"
                v-model.lazy.number="FormValue.age"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                placeholder="Enter Age..."
                required=""
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Select Role</label
              >
              <select
                id="countries"
                v-model="FormValue.role"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Add User
          </button>
        </form>
      </div>
    </section>
  </div>
  <div class="p-4 sm:ml-64 flex justify-center items-center">
    <button
      type="button"
      @click="showComp('admin')"
      class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
    >
      Admin
    </button>
    <button
      type="button"
      @click="showComp('user')"
      class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
    >
      User
    </button>
  </div>
  <AdminTable
    v-if="flag === 'admin'"
    :admins="admins"
    @updateAdmins="updateAdmins"
  />
  <UserTable
    v-else-if="flag === 'user'"
    :users="users"
    @updateUsers="updateUsers"
  />
</template>

<script>
import AdminTable from "./AdminTable.vue";
import UserTable from "./UserTable.vue";

export default {
  name: "home",
  components: { AdminTable, UserTable },
  data() {
    return {
      flag: false,
      users: [
        { name: "Mostafa", age: 24, role: "user" },
        { name: "Abbas", age: 25, role: "user" },
      ],
      admins: [
        { name: "Mostafa", age: 24, role: "admin" },
        { name: "abdo", age: 26, role: "admin" },
        { name: "mohamed", age: 20, role: "admin" },
      ],
      FormValue: {
        name: "",
        age: 0,
        role: "",
      },
    };
  },
  methods: {
    showComp(role) {
      this.flag = role;
    },
    addPerson() {
      const { name, age, role } = this.FormValue;
      if (this.FormValue.role === "admin") {
        this.admins.push({ name, age, role });
      } else {
        this.users.push({ name, age, role });
      }

      this.FormValue = { name: "", age: 0, role: "" };
    },
    updateAdmins(updatedAdmins) {
      this.admins = updatedAdmins;
    },
    updateUsers(updatedUsers) {
      this.users = updatedUsers;
    },
  },
};
</script>

<style lang="scss" scoped></style>
