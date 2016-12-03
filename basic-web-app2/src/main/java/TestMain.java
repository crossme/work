

import java.io.Reader;

import tutorial.mvc.*;
import com.ibatis.common.resources.Resources;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.ibatis.sqlmap.client.SqlMapClientBuilder;

public class TestMain {
	public static void main(String[] args) throws Exception 
	{
		UserDao manager = new UserDaoIbatis();
		
		Reader reader = Resources.getResourceAsReader("sql-maps-config.xml");
		SqlMapClient sqlmapClient = SqlMapClientBuilder.buildSqlMapClient (reader);
		
		UserTEO user = new UserTEO();
		user.setId(1);
		user.setName("MOHIT");
		user.setEmail("demo-user@howtodoinjava.com");
		user.setDomain("DOMAIN_HERE");
		
		manager.addUser(user,sqlmapClient);
		
		UserTEO createdUser = manager.getUserById(1, sqlmapClient);
		System.out.println("HOOOOOO");
		System.out.println(createdUser.getEmail());
		
		//manager.deleteUserById(2, sqlmapClient);
	}
}
