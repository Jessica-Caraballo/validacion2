$("#formulario").validate({
    rules: {
        nombre: {
            required: true,
            inlength: 2
            },
        email: "required",
        comentarios: "required"
        }
     });
