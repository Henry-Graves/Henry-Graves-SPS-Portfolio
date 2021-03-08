package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/string")
public class StringServlet extends HttpServlet {
    
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Create the strings to be sent
    ArrayList<String> stringList = new ArrayList<String>();
    stringList.add("This website was created in the span of 3 weeks, starting from no knowledge of anything front-end.");
    stringList.add("This website was created during Google's Software Product Sprint of Spring 2021.");
    stringList.add("I plan on continuing to improve this website and having it as a personal portfolio through my career.");
    
    // Create JSON using GSON
    String json = convertToJsonUsingGson(stringList);

    // Send the JSON as the response
    response.setContentType("application/json");
    response.getWriter().println(json);
  }

  // Converts input arraylist to a JSON string using the gson library.
  private String convertToJsonUsingGson(ArrayList<String> inputList) {
    Gson gson = new Gson();
    String json = gson.toJson(inputList);
    return json;
  }
}