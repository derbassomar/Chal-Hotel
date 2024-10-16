
  function isValidDate(dateString) {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
  }

  function validateCheckinCheckout() {
    const checkinInput = document.getElementById("checkin");
    const checkoutInput = document.getElementById("checkout");

    if (!isValidDate(checkinInput.value) || !isValidDate(checkoutInput.value)) {
      alert("Invalid date format. Please use YYYY-MM-DD.");
      return false;
    }

    const checkin = new Date(checkinInput.value);
    const checkout = new Date(checkoutInput.value);

    if (checkin.getTime() >= checkout.getTime()) {
      alert("Check-out date must be after check-in date.");
      return false;
    }

    return true;
  }

  function validarFormulario() {
    if (validateCheckinCheckout()) {
      alert("Reserva enviada com sucesso!");
      return true;
    }
    return false;
  }
