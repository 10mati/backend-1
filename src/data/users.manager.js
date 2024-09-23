import fs from "fs";
import crypto from "crypto";

class UsersManager {
  constructor() {
    this.path = "./src/data/fs/users.json";
    this.init();
  }

  init() {
    const fileExists = fs.existsSync(this.path);
    if (fileExists) {
      console.log("file already exists");
    } else {
      fs.writeFileSync(this.path, JSON.stringify([]));
      console.log("file created");
    }
  }

  async readAll(role) {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const parsedData = JSON.parse(data);
      if (role) {
        const filteredData = parsedData.filter((each) => each.role === role);
        return filteredData;
      }
      return parsedData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async create(userData) {
    try {
      userData.id = crypto.randomBytes(12).toString("hex");
      const allUsers = await this.readAll();
      allUsers.push(userData);
      const stringData = JSON.stringify(allUsers, null, 2);
      await fs.promises.writeFile(this.path, stringData);
      return userData.id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async readOne(id) {
    try {
      const allUsers = await this.readAll();
      const user = allUsers.find((user) => user.id === id);
      if (!user) {
        throw new Error(`User with id ${id} not found`);
      }
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, updatedUserData) {
    try {
      const allUsers = await this.readAll();
      const userIndex = allUsers.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        throw new Error(`User with id ${id} not found`);
      }
      allUsers[userIndex] = { ...allUsers[userIndex], ...updatedUserData };
      const stringData = JSON.stringify(allUsers, null, 2);
      await fs.promises.writeFile(this.path, stringData);
      return `User with id ${id} updated successfully`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const allUsers = await this.readAll();
      const userIndex = allUsers.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        throw new Error(`User with id ${id} not found`);
      }
      allUsers.splice(userIndex, 1);
      const stringData = JSON.stringify(allUsers, null, 2);
      await fs.promises.writeFile(this.path, stringData);
      return `User with id ${id} deleted successfully`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}

const usersManager = new UsersManager("./src/data/fs/users.json");
export default usersManager;