package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Get the value entered in the form.
        String textValue = request.getParameter("text-input");

        // Print the value so you can see it in the server logs.
        System.out.println("User submitted: " + textValue);

        // Write the value to the response so the user can see it.
        response.getWriter().println("You submitted: " + textValue + ",\n\nuse the back button to return to portfolio page.");

        // Redirect user to main portfolio page (use a delay with this so that user knows what's going on)
        // response.sendRedirect("http://hgraves-sps-spring21.appspot.com/");
  }
}