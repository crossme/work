/**
 * 
 */
package tutorial.mvc;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Mohit
 *
 */
@RestController
public class GreetingController {
	private static final String template = "Hello %s";
	private final AtomicLong counter  = new AtomicLong(); //initial  is 0 by default = AtomicLong.
	
	@RequestMapping("/greeting")
	public Greeting greeting(@RequestParam(value="name", defaultValue="abcd") String name){
		System.out.println("asxasx");
		
		
		return new Greeting(counter.incrementAndGet(), String.format(template, name));
		
	}
	
}
