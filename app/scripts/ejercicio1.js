$("#formulario").validate({
    onkeyup: false,
    onfocusout: false,
    onclick: false,
    rules: {
        nombre: {
            required: true,
            inlength: 2
            },
        email: "required",
        comentarios: "required"
        }
     });
