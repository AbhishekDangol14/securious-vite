import sweetAlert from "../partials/popup.js";
export default function popupService() {
  const onRegisterError = (error) => {
    const response = error.response;
    if (response && response.status >= 400) {
      const pError = error.response.data.errors.password
        ? error.response.data.errors.password
        : null;
      console.log(pError);
      if (pError != null) {
        displayErrorAlert(pError);
      }
      if (error.response.data.errors.email) {
        return false;
      }
      return false;
    }
  };
  const onError = (error) => {
    const response = error.response;
    if (response && response.status >= 400) {
      displayErrorAlert(error.response.data.message);
      return false;
    }
  };

  const displayErrorAlert = (err) => {
    sweetAlert.alertPopup({
      title: err,
      type: "error",
    });
  };

  return {
    onError,
    onRegisterError,
  };
}
