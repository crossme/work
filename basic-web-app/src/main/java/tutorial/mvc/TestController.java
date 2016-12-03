package tutorial.mvc;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Mohit on 05/03/16.
 */
@Controller
public class TestController {

	@RequestMapping(value = "/test")
	@ResponseBody
	public String test(){
		
		Logger logger = Logger.getLogger("LOGGING=======");
		// SQL Runs here..
		mySqlConnection mySql = new mySqlConnection();
		JSONObject outputJsonObj = new JSONObject();
		List<JSONObject> listOfUsersData = null;
		
		try {
			System.out.println("TEST CONTROLLER");
			outputJsonObj = mySql.init11();
		} catch (ServletException e) {
			logger.log(Level.SEVERE, "connection FAILED!", new RuntimeException());
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return outputJsonObj.toString();

//
//		UserDao manager = new UserDaoIbatis();
//		
//		Reader reader = null;
//		try {
//			reader = Resources.getResourceAsReader("sql-maps-config.xml");
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		SqlMapClient sqlmapClient = SqlMapClientBuilder.buildSqlMapClient (reader);
//		
//		UserTEO user = new UserTEO();
//		//user.setId(1);
//		user.setName("SSS");
//		user.setEmail("demo-user@howtodoinjava.com");
//		user.setDomain("DOMAIN_HERE");
//		
//		manager.addUser(user,sqlmapClient);
//		
//		UserTEO createdUser = manager.getUserById(1, sqlmapClient);
//		System.out.println(createdUser.getEmail());
//		
//		return new String("asd");
		
		
	}
	
}
