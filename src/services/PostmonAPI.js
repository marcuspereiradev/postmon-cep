class PostmonAPI {
  static async fetchAddress(cep) {
    try {
      const response = await fetch(`https://api.postmon.com.br/v1/cep/${cep}`);
      const data = await response.json();
      return data;
    }
    catch(error) {
      console.error(`Something is wrong in fetchAddress ${error}`);
    }
  }
};

export default PostmonAPI;
