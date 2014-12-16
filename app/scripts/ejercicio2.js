$("#formulario").validate({
    rules: {
        nombre: {
            
            //remote: php/users.php
            required: true,
            inlength: 2
            },
        email: "required",
            //remote: php/emails.php

        comentarios: "required"
        }
     });
