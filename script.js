document.querySelector(".appointment-form").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const service = document.querySelector('select[name="service"]').value;
    const date = document.querySelector('input[name="date"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const whatsappMessage =
        "?? *NANDINI HOSPITAL - APPOINTMENT REQUEST*%0A%0A" +
        "*Patient Name:* " + name + "%0A" +
        "*Mobile Number:* " + phone + "%0A" +
        "*Service:* " + service + "%0A" +
        "*Appointment Date:* " + date + "%0A" +
        "*Problem / Message:* " + message;

    const whatsappNumber = "919050019007";

    const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");
});