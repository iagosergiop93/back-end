package com.exceptions;

import org.springframework.http.HttpStatus;

public class ErrorResponse {
    private String msg;
    private HttpStatus status;

    public ErrorResponse() {
        super();
    }

    public ErrorResponse(String msg, HttpStatus status) {
        this.msg = msg;
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }



    @Override
    public String toString() {
        return "ErrorResponse{" +
                "msg='" + msg + '\'' +
                ", status=" + status +
                '}';
    }
}
