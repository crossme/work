/**
 * 
 */
package tutorial.mvc;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;

import org.json.JSONArray;
import org.json.JSONObject;

import com.mysql.jdbc.*;

/**
 * @author Mohit
 *
 */
public class mySqlConnection {

	/**
	 * @param args
	 */
	public JSONObject init11() throws ServletException {
		// TODO Auto-generated method stub
		java.sql.Connection conn = null;
		java.sql.Statement stmt = null;
		ResultSet rs = null;
		JSONObject outputJsonObj = new JSONObject();
		
		List<JSONObject> listOfUsersData = new ArrayList<JSONObject>();;
		
		
		System.out.println(">-------DATABASE CONNECTION STARTED!-------->");
		try{
			System.out.println("==================================================================");
			System.out.println(">-------DATABASE CONNECTION STARTED!-------->");
			System.out.println("==================================================================");
			
//			new com.mysql.jdbc.Driver();
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			String connectionUrl = "jdbc:mysql://localhost:3306/mydb";
			String connectionUser = "root";
			String connectionPassword = "root";
			 conn = DriverManager.getConnection(connectionUrl, connectionUser, connectionPassword);
			 stmt = conn.createStatement();
			 rs = stmt.executeQuery("SELECT * FROM uusers1");
			 
			while (rs.next()) {
				String id = rs.getString("id");
				String name = rs.getString("name");
				String week1 = rs.getString("week1");
				String week2 = rs.getString("week2");
				String week3 = rs.getString("week3");
				String color = rs.getString("color");
				
				JSONObject currOb = new JSONObject();
				currOb.put("id", id);
				currOb.put("name", name);
				currOb.put("week1", week1);
				currOb.put("week2", week2);
				currOb.put("week3", week3);
				currOb.put("color", color);
				
				

				listOfUsersData.add(currOb);
			
			}
			
			outputJsonObj.put("data", listOfUsersData);		
						
		}catch(Exception e){ 
			System.out.println(e);
		}  
			return outputJsonObj;
	}

}
