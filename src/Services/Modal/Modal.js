import Swal from "sweetalert2";

const getModelFail = (errors) =>
    Swal.fire({
        title: "Error!",
        html: `<p>${errors.name ? errors.name[0] : " "}</p>
            <p>${errors.problem ? errors.problem[0] : " "}</p>
            <p>${errors.phone ? errors.phone[0] : " "}</p>
            <p>${errors.email ? errors.email[0] : " "}</p>`,
        icon: "error",
        confirmButtonText: "Got it",
    });

const getModelSuccess = (message) => Swal.fire("Good job!", message, "success");
export  {getModelFail,getModelSuccess};
