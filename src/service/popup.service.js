import sweetAlert from "../partials/popup.js";
export default function popupService() {
  const onError = (error) => {
    const response = error.response;
    if (response && response.status >= 400 && response.status < 405) {
      displayErrorAlert(error);
      return false;
    }
  };

  const displayErrorAlert = (err) => {
    sweetAlert.alertPopup({
      title: err.response.data.message,
      type: "error",
    });
  };

  return {
    onError,
  };
}
