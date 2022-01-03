import httpCommon from "../http-common";
class RestaurantDataService {
    getAll(page = 0) {
      return httpCommon.get(`restaurants?page=${page}`);
    }
  
    get(id) {
      return httpCommon.get(`/restaurant?id=${id}`);
    }
  
    find(query, by = "name", page = 0) {
      return httpCommon.get(`restaurants?${by}=${query}&page=${page}`);
    } 
  
    createReview(data) {
      return httpCommon.post("/review-new", data);
    }
  
    updateReview(data) {
      return httpCommon.put("/review-edit", data);
    }
  
    deleteReview(id, userId) {
      return httpCommon.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
    }
  
    getCuisines(id) {
      return httpCommon.get(`/cuisines`);
    }
  
  }
  
  export default new RestaurantDataService();
