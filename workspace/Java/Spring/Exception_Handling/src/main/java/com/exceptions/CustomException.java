package com.exceptions;

import org.springframework.http.HttpStatus;

public class CustomException extends RuntimeException {
    private HttpStatus status;
    private String msg;
    private ErrorResponse er;

    public CustomException(String msg, HttpStatus status) {
        super(msg);
        this.msg = msg;
        this.status = status;
        this.er = new ErrorResponse(msg, status);
    }

    public HttpStatus getStatus() {
        return status;
    }

    public String getMsg() {
        return msg;
    }

    public ErrorResponse getEr() { return er; }
}
