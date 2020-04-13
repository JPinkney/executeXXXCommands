package org.my.sample;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/hello")
public class MySample {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {

        MyHelloText text = new MyHelloText();
        return text.getText();
    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String helloFormat() {

        MyHelloText text = new MyHelloText();



        
        return text.getText();
    }
}
