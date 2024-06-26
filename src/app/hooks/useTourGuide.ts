import { useAppDispatch, useAppSelector } from "../redux/hook";
// import { NavigateFunction } from "react-router-dom";
import { App } from "antd";
import {
  getRandomTourGuide,
  GetRandomTourGuideParams,
  getTourGuideById,
  GetTourGuideByIdParams,
  setCurrentTourGuideList,
  getRandomTourGuideInCity,
  GetRandomTourGuideInCityParams,
  setCurrentTourGuide,
} from "../redux/slice/tourguideSlice";
import { useCallback } from "react";

export function useTourGuide() {
  const { notification } = App.useApp();
  const state = useAppSelector((state) => state.tourguide);
  const dispatch = useAppDispatch();

  const handleGetTourGuidebyId = useCallback(
    async (value: GetTourGuideByIdParams) => {
      const resultAction = await dispatch(getTourGuideById(value));
      if (getTourGuideById.fulfilled.match(resultAction)) {
        dispatch(setCurrentTourGuide(resultAction.payload));
      } else {
        if (resultAction.payload) {
          notification.error({
            message: "Error",
            description: `${resultAction.payload}`,
            placement: "topRight",
          });
        } else {
          notification.error({
            message: "Error",
            description: resultAction.error.message,
            placement: "topRight",
          });
        }
      }
    },
    [dispatch, notification],
  );

  const handleGetRandomTourGuides = useCallback(
    async (value: GetRandomTourGuideParams) => {
      const resultAction = await dispatch(getRandomTourGuide(value));
      if (getRandomTourGuide.fulfilled.match(resultAction)) {
        dispatch(setCurrentTourGuideList(resultAction.payload));
      } else {
        if (resultAction.payload) {
          notification.error({
            message: "Error",
            description: `${resultAction.payload}`,
            placement: "topRight",
          });
        } else {
          notification.error({
            message: "Error",
            description: resultAction.error.message,
            placement: "topRight",
          });
        }
      }
    },
    [dispatch, notification],
  );

  const handleGetRandomTourGuidesInCity = useCallback(
    async (value: GetRandomTourGuideInCityParams) => {
      const resultAction = await dispatch(getRandomTourGuideInCity(value));
      if (getRandomTourGuideInCity.fulfilled.match(resultAction)) {
        dispatch(setCurrentTourGuideList(resultAction.payload));
      } else {
        if (resultAction.payload) {
          notification.error({
            message: "Error",
            description: `${resultAction.payload}`,
            placement: "topRight",
          });
        } else {
          notification.error({
            message: "Error",
            description: resultAction.error.message,
            placement: "topRight",
          });
        }
      }
    },
    [dispatch, notification],
  );

  return {
    state,
    handleGetTourGuidebyId,
    handleGetRandomTourGuides,
    handleGetRandomTourGuidesInCity,
  };
}
