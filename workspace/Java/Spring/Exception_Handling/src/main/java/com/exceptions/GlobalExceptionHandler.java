package com.exceptions;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.io.IOException;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    ObjectMapper om;

    @Autowired
    GlobalExceptionHandler(ObjectMapper om) {
        this.om = om;
    }

    @ExceptionHandler(value = { CustomException.class })
    protected ResponseEntity<Object> handleConflict(CustomException ce, WebRequest request) {
        String body = "";
        try {
            body = om.writeValueAsString(ce.getEr());
        } catch (IOException io) {
            io.printStackTrace();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        return handleExceptionInternal(ce, body, headers, ce.getStatus(), request);
    }
}
