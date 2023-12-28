import get from "./getElement.js";

const loading = get(".loading");

// 로딩을 보여주거나 감춘다
export const showLoading = () => {
  loading.classList.remove("hide-loading");
};
export const hideLoading = () => {
  loading.classList.add("hide-loading");
};
