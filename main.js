/* -------------------------------------------------
   main.js - Simple JavaScript for Booking Form
   - Validates required fields
   - Shows a summary message instead of reloading
--------------------------------------------------*/

// Booking form handler
function handleBookingSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.fullName.value.trim();
    const phone = form.phone.value.trim();
    const service = form.service.value;
    const barber = form.barber.value;
    const date = form.date.value;
    const time = form.time.value;
    const errorBox = document.getElementById("booking-error");
    const summaryBox = document.getElementById("booking-summary");

    errorBox.textContent = "";
    summaryBox.textContent = "";

    // Basic validation for required fields
    if (!name || !phone || !service || !barber || !date || !time) {
        errorBox.textContent = "Please complete all required fields before booking.";
        return;
    }

    // Simple pricing logic based on selected service
    let basePrice = 30;
    if (service === "Kids Cut") basePrice = 20;
    if (service === "Beard Trim") basePrice = 18;
    if (service === "Combo Cut & Beard") basePrice = 45;

    const msg =
        `Thank you, ${name}! Your ${service} with ${barber} ` +
        `on ${date} at ${time} is tentatively booked. ` +
        `Estimated total: $${basePrice.toFixed(2)}.`;

    summaryBox.textContent = msg;
}

// Attach event listener only if booking form exists
document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", handleBookingSubmit);
    }
});
