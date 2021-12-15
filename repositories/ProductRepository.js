import Repository, { baseUrl, serializeQuery } from './Repository';

class ProductRepository {

    async getCatNameBySlug(param) {
        const reponse = await Repository.get(`${baseUrl}/product-categories/?filters[Slug][$eq]=${param}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsById(payload) {
        const reponse = await Repository.get(`${baseUrl}/products/${payload}/?populate=*`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsByCategory(params) {
        const reponse = await Repository.get(`${baseUrl}/products/?populate=*`)
            .then((response) => {
                if (response.data.data) {
                    if (response.data.data.length > 0) {
                        return response.data.data;
                    }
                } else {
                    return null;
                }
            })
            .catch(() => {
                return null;
            });
        return reponse;
    }
}

export default new ProductRepository();
