

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CommentRetriever
 */
//@SuppressWarnings("unused")
@WebServlet("/CommentRetriever")
public class CommentRetriever extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CommentRetriever() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
final PrintWriter out = response.getWriter();
		
        System.out.println("getting parameters");
        
        String name = request.getParameter("name");
        String comment = request.getParameter("words");
        
        System.out.println("got parameters");
        System.out.println("name = "+name);
        //System.out.println("comment = "+comment);
        String JDBC_DRIVER = "com.mysql.jdbc.Driver";
        String DB_URL = "jdbc:mysql://localhost:3306/triathlon";

        // Database credentials
        String USER = "root";
        String PASS = "";
        Connection conn = null;
        Statement stmt = null;
        //STEP 2: Register JDBC driver
        try {
        Class.forName(JDBC_DRIVER);
        //STEP 3: Open a connection
             System.out.println("Connecting to database...");
             conn = (Connection) DriverManager.getConnection(DB_URL,USER,PASS);
         //STEP 4: Execute a query
             System.out.println("Creating statement...");
             stmt = (Statement) conn.createStatement();
             
             String insert = ("INSERT INTO comments(name, statement) "
                     + "VALUES ("+"\'"+name+"\'"+", "+"\'"+comment+")");
             stmt.executeUpdate(insert);
             
             String sql;
             sql = "SELECT * FROM comments";
             ResultSet rs = (ResultSet) stmt.executeQuery(sql);
             //STEP 5: Extract data from result set
             while(rs.next()){
             //Retrieve by column name
                 
                 //comment = rs.getString("words");
                 
            	 String docType = "<!doctype html public \"-//w3c//dtd html 4.0 transitional//en\">\n";
                 out.println(docType +
                 "<html>\n" +
                 "<head><title>comments</title></head>\n" +
     	            "<body>\n" +
     	
     		            "<u1>\n" + 
     			            " <li><b>Name</b>: " + name + "\n" +
     			            " <li><b>Comment</b>: " + comment + "\n" +        
     	 					" <br><br> <a href= 'http://54.213.148.253/triTrainer_home.html' ><input type='button' value='Home'/></a>"+
     		            " </u1>\n" + 
     		        " </body>"+
                  "</html>");
                 //location = rs.getString("location");
                 //email = rs.getString("email");
                 //gender = rs.getString("gender");
             //Display values
                
             //return the query results to client
                 
             }
        
       
        } 
        catch (ClassNotFoundException | SQLException e) 
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
        //System.out.println(raceType);
        String docType = "<!doctype html public \"-//w3c//dtd html 4.0 transitional//en\">\n";
            out.println(docType +
            "<html>\n" +
            "<head><title>comments</title></head>\n" +
	            "<body>\n" +
	
		            "<u1>\n" + 
			            " <li><b>Name</b>: " + name + "\n" +
			            " <li><b>Comment</b>: " + comment + "\n" +        
	 					" <br><br> <a href= 'http://54.213.148.253/triTrainer_home.html' ><input type='button' value='Home'/></a>"+
		            " </u1>\n" + 
		        " </body>"+
             "</html>");
           
 	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request,response);
	}

}
