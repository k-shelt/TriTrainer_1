

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
//import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoginRetriever
 */
@WebServlet("/SignUpRetriever")
public class SignUpRetriever extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SignUpRetriever() {
        super();
        // TODO Auto-generated constructor stub
    }
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		// TODO Auto-generated method stub
		
		final PrintWriter out = response.getWriter();
		
        System.out.println("getting parameters");
        
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String raceType = request.getParameter("raceType");
        String experience = request.getParameter("experience");       
        //String gender = request.getParameter("gender");
        
        System.out.println(name);
        System.out.println(email);
        System.out.println(raceType);
        System.out.println(experience);
        //System.out.println(gender);
        
        String JDBC_DRIVER = "com.mysql.jdbc.Driver";
        String DB_URL = "jdbc:mysql://localhost:3306/testDB";
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
            
            String insert = ("INSERT INTO signUp(name, email, raceType, experience) "
                    + "VALUES ("+"\'"+name+"\'"+", "+"\'"+email+"\'"+", "+"\'"+raceType+"\'"
                    +", "+"\'"+experience+"\'"+")");
            
            stmt.executeUpdate(insert);
            System.out.println("statement complete");
            
            /*
            String sql;
            sql = "SELECT * FROM signUp where name = \'"+name+"\'";
            ResultSet rs = (ResultSet) stmt.executeQuery(sql);
            //STEP 5: Extract data from result set
            while(rs.next()){
            //Retrieve by column name
                
            	email = rs.getString("email");         
                raceType = rs.getString("type");
                experience = rs.getString("status");
                gender = rs.getString("gender");
            //Display values
               
            //return the query results to client
            }**/
        } 
        catch (ClassNotFoundException | SQLException e) 
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        System.out.println("Writing HTML");
        String docType = "<!doctype html public \"-//w3c//dtd html 4.0 transitional//en\">\n";
            out.println(docType +
            "<html>\n" +
            "<head><title>User Sign Up</title></head>\n" +
            "<body>\n" +
	            //"<h1 align=\"center\"><img src='http://54.213.148.253/Final Pics/triPic1.jpg'>\n" +
	            //"<h1 align=\"center\">Welcome " + name + "</h1>" + 
	            "<u1>\n" + 
		            " <li><b>Your name</b>: " + name + "\n" +
		            " <li><b>Your email</b>: " + email + "\n" +
		            " <li><b>Your preferred type of race</b>: " + raceType + "\n"+
		            " <li><b>Your experience level</b>: " + experience + "\n" +
		            //" <li><b>Your gender</b>: " + gender + "\n"+
		            
		            " <br><br> <a href= 'http://54.213.148.253/triTrainer_home.html' ><input type='button' value='Home'/></a>"+
	            " </u1>\n" + 
            " </body></html>");
            System.out.println("HTML complete");
 	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request,response);
	}

}
