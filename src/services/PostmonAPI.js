class PostmonAPI {
  static async fetchAddress(cep) {
    try {
      const response = await fetch(`https://api.postmon.com.br/v1/cep/${cep}`);
      return response.json();
    }
    catch(error) {
      console.error(`Something is wrong in fetchAddress ${error}`);
    }
  }
};

export default PostmonAPI;
