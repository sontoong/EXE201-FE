import { AxiosResponse } from "axios";

import apiJWT from "./jwtApi";
import baseApi from "./baseApi";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: <T>(url: string, params?: T) =>
    apiJWT.get(url, { params }).then(responseBody),
  post: <T>(url: string, body: T) => apiJWT.post(url, body).then(responseBody),
  put: <T>(url: string, body: T) => apiJWT.put(url, body).then(responseBody),
  patch: <T>(url: string, body: T) =>
    apiJWT.patch(url, body).then(responseBody),
  del: <T>(url: string, params?: T) =>
    apiJWT.delete(url, { params }).then(responseBody),
};

const baseRequests = {
  get: <T>(url: string, params?: T) =>
    baseApi.get(url, { params }).then(responseBody),
  post: <T>(url: string, body: T) => baseApi.post(url, body).then(responseBody),
  put: <T>(url: string, body: T) => baseApi.put(url, body).then(responseBody),
  patch: <T>(url: string, body: T) =>
    baseApi.patch(url, body).then(responseBody),
  del: <T>(url: string, params?: T) =>
    baseApi.delete(url, { params }).then(responseBody),
};

//apis
const _authBase = "Authenticate";
const Auth = {
  // auth
  login: (data: any) => baseRequests.post(`${_authBase}/auth`, data),
  authVerify: (data: any) =>
    baseRequests.post(`${_authBase}/auth/verify`, data),
  refreshToken: (data: any) =>
    baseRequests.post(`${_authBase}/auth/refresh`, data),
  forgetPassword: (data: any) =>
    baseRequests.post(`${_authBase}/auth/forget-password`, data),
  forgetPasswordVerify: (data: any) =>
    baseRequests.post(`${_authBase}/auth/forget-password/verify`, data),
  forgetPasswordNewpassword: (data: any) =>
    baseRequests.post(`${_authBase}/auth/forget-password/new-password`, data),
  // register
  registerCustomer: (data: any) =>
    baseRequests.post(`${_authBase}/register/customer`, data),
  registerTourGuide: (data: any) =>
    baseRequests.post(`${_authBase}/register/tourguide`, data),
  registerVerify: (data: any) =>
    baseRequests.post(`${_authBase}/register/verify`, data),
};

const _bookingTour = "BookingTour";
const BookingTour = {
  createBookingTour: (data: any) =>
    requests.post(`${_bookingTour}/create-booking-tour-request`, data),
  getAllBookingTour: () =>
    requests.get(`${_bookingTour}/get-all-booking-tour-reuqest`),
  getBookingTourById: (id: string) => requests.get(`${_bookingTour}/${id}`),
  getBookingTourByCustomerId: (customerId: any) =>
    requests.get(`${_bookingTour}/customer/${customerId}`),
  getBookingTourByTourGuideId: (tourGuideId: any) =>
    requests.get(`${_bookingTour}/tourguide/${tourGuideId}`),
};

const _bookingTourGuideRequest = "BookingTourGuideRequest";
const BookingTourGuideRequest = {
  createBookingTourGuide: (data: any) =>
    requests.post(`${_bookingTourGuideRequest}/create-booking-tourguide`, data),
  getAllBookingTourGuide: () =>
    requests.get(`${_bookingTourGuideRequest}/get-all-bookingtourguide`),
  getBookingTourGuideById: (id: string) =>
    requests.get(`${_bookingTourGuideRequest}/${id}`),
  getBookingTourGuideByCustomerId: (customerId: any) =>
    requests.get(`${_bookingTourGuideRequest}/customer/${customerId}`),
  getBookingTourGuideByTourGuideId: (tourGuideId: any) =>
    requests.get(`${_bookingTourGuideRequest}/tourguide/${tourGuideId}`),
};

const _cities = "Cities";
const Cities = {
  getCities: () => requests.get(`${_cities}`),
  addNewCity: (data: any) => requests.post(`${_cities}`, data),
  getCityById: (id: string) => requests.get(`${_cities}/${id}`),
  updateCityById: (id: string, data: any) =>
    requests.put(`${_cities}/${id}`, data),
  deleteCityById: (id: string) => requests.del(`${_cities}/${id}`),
};

const _customer = "Customer";
const Customer = {
  updateInfo: (data: any) => requests.post(`${_customer}/update-info`, data),
  changePassword: (data: any) =>
    requests.post(`${_customer}/change-password`, data),
  updateAvatar: (data: any) =>
    requests.post(`${_customer}/update-avatar`, data),
  getAllCustomer: () => requests.get(`${_customer}`),
  getCustomerById: (customerId: number) =>
    requests.get(`${_customer}/${customerId}`),
  getPrivate: () => requests.get(`${_customer}/private`),
  changeStatusBookingTourGuide: (
    bookingTourGuideRequestId: string,
    data: any,
  ) =>
    requests.post(
      `${_customer}/change-status-booking-tour-guide/${bookingTourGuideRequestId}`,
      data,
    ),
  changeStatusBookingTour: (bookingTourRequestId: string, data: any) =>
    requests.post(
      `${_customer}/change-status-booking-tour/${bookingTourRequestId}`,
      data,
    ),
};

const _tourGuide = "TourGuide";
const TourGuide = {
  updateAvatar: (data: any) =>
    requests.post(`${_tourGuide}/update-avatar`, data),
  updateCover: (data: any) => requests.post(`${_tourGuide}/update-cover`, data),
  updateInfo: (data: any) => requests.post(`${_tourGuide}/update-info`, data),
  changePassword: (data: any) =>
    requests.post(`${_tourGuide}/change-password`, data),
  getTourGuideById: (tourGuideId: number) =>
    requests.get(`${_tourGuide}/info/${tourGuideId}`),
  getTourGuidePrivateById: (tourGuideId: number) =>
    requests.get(`${_tourGuide}/private-info/${tourGuideId}`),
  getRandomTourGuide: (params: any) =>
    requests.get(`${_tourGuide}/get-random-tourguide`, params),
  getAllTourGuides: () => requests.get(`${_tourGuide}/get-all-tourguides`),
  getRandomTourGuideInCity: (params: any) =>
    requests.get(`${_tourGuide}/get-random-tourguide-in-city`, params),
  acceptBookingTourGuideRequest: (data: any) =>
    requests.post(`${_tourGuide}/accept-booking-tourguide-request`, data),
  rejectBookingTourGuideRequest: (data: any) =>
    requests.post(`${_tourGuide}/reject-booking-tourguide-request`, data),
  acceptBookingTourRequest: (data: any) =>
    requests.post(`${_tourGuide}/accept-booking-tour-request`, data),
  rejectBookingTourRequest: (data: any) =>
    requests.post(`${_tourGuide}/reject-booking-tour-request`, data),
};

const _tour = "Tour";
const Tour = {
  uploadTour: (data: any) => requests.post(`${_tour}`, data),
  updateTour: (tourId: string, data: any) =>
    requests.put(`${_tour}/${tourId}`, data),
  acceptTourChangeStatus: (tourId: string, data: any) =>
    requests.put(`${_tour}/${tourId}`, data),
  deleteTour: (tourId: string) => requests.del(`${_tour}/${tourId}`),
  getTourById: (tourId: string) => requests.get(`${_tour}/${tourId}`),
  getRandomTours: (params: any) => requests.get(`${_tour}/random`, params),
  getTourByCity: (params: any) => requests.get(`${_tour}/city`, params),
  getTourByTourGuide: (params: any) =>
    requests.get(`${_tour}/tour-guide`, params),
  getTourByStatus: (status: string) =>
    requests.get(`${_tour}/status/${status}`),
};

const _feedback = "Feedback";
const Feedback = {
  createFeedback: (data: any) => requests.post(`${_feedback}/upload`, data),
  getFeedbackCustomer: (customerId: string) =>
    requests.get(`${_feedback}/customer/${customerId}`),
  getFeedbackTourguide: (tourGuideId: string) =>
    requests.get(`${_feedback}/tourguide/${tourGuideId}`),
  getAllFeedback: () => requests.get(`${_feedback}`),
  getFeedbackById: (feedbackId: string) =>
    requests.get(`${_feedback}/${feedbackId}`),
  updateFeedbackById: (feedbackId: string, data: any) =>
    requests.put(`${_feedback}/${feedbackId}/status`, data),
  getFeedbackStats: (bookingId: string) =>
    requests.get(`${_feedback}/${bookingId}/feedback-stats`),
  getTourFeedback: (tourId: string) =>
    requests.get(`${_feedback}/tour/${tourId}/feedbacks`),
  getTourguideFeedback: (cityId: string) =>
    requests.get(`${_feedback}/city/${cityId}/feedbacks`),
};

const agent = {
  Auth,
  BookingTour,
  BookingTourGuideRequest,
  Cities,
  Customer,
  Tour,
  TourGuide,
  Feedback,
};
export default agent;
