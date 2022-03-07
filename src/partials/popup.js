import Swal from "sweetalert2";

let sweetAlert = {
  alertPopup(obj) {
    return Swal.fire({
      toast: true,
      showConfirmButton: false,
      position: "top-end",
      icon: obj.type,
      title: obj.title ?? null,
      text: obj.text ?? null,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  },
  //   alertPopupClose() {
  //     Swal.close();
  //   },
};
export default sweetAlert;
